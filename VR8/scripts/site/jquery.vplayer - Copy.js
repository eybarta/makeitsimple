(function ($) {

	$.vplayer = function (element, options) {

		var defaults =
        {
            onVideoIndexChange: function () { }
        }

		var plugin = this;
		plugin.settings = {}
		var $element = $(element),
		element = element;

		var _hpvControlsActive = false;
		var video;          var vgalRingCanvas;         var _hpvControlsActive;
		var vContext;       var cWidth = 270;           var winWidth;
		var cHeight = 270;  var pathRadius = 130;       var winHeight;
		var progress = 0;   var handle;                 var winCX;
		var handleVal;      var durationVal;            var winCY;
		var vController;	var dragger;
		var _isHpDKSoundOn = true;

		plugin.init = function () {
			plugin.settings = $.extend({}, defaults, options);
			initLayout();
			setLayout();
			currentIndex = 0;
		}

		var initLayout = function ()
		{
		    resizeHandler();
		    $(window).resize(resizeHandler);

		    video =             $(element).find(".hpvPlayer");
		    handle =            $(element).find(".hpvHandle");
		    handleVal =         $(element).find(".hpvHandleVal");
		    durationVal =       $(element).find(".hpvTotalVal");
		    vgalRingCanvas =    document.getElementById("hpvRingCanvas");
		    vController =       $(element).find(".hpvController");
		    dragger = document.getElementById("hpvDragger"); //$(element).find(".hpvDragger");

		    vContext = vgalRingCanvas.getContext("2d");
		    vContext.translate(cWidth, 0);
		    vContext.scale(-1, 1);

		    addDraggerLogic();

		    $(vController).mousedown(function (event) {
		        if($(video)[0].paused==false)
		        {
		            $(video)[0].pause();
		        } else {
		            $(video)[0].play();
		        }
		        updatePlayPauseMode();
		    });

		    $("#hpvSoundBtn").mousedown(function (event) {
		        dtToggleVideoSound();
		        //onclick="dtToggleVideoSound();"
		    });


		    $(element).mousemove(function (event) {
		        lastMouseX = event.pageX;
		        lastMouseY = event.pageY;
		        var dX = Math.abs(lastMouseX - winCX);
		        var dY = Math.abs(lastMouseY - winCY);
		        var msg = event.pageX + ", " + event.pageY + " " + isVideoControlsVisible;
		        if(_hpvControlsActive)
		        {
		            $(vController).css("opacity", "1");
		            $(".hpvCloseLayer").css("opacity", "");
		            $(".hpvSound").css("opacity", "");

		            if (!isDraggingHandle) {
		                var md = getMouseDistanceFromCenter();
		                if (md.dX < 200 && md.dY < 200) {
		                    $(element).find(".hpvEx").css("opacity", "1");//show extra controls
		                }
		                else {
		                    $(element).find(".hpvEx").css("opacity", "0");
		                }
		            }
		            isVideoControlsVisible = true;
		            clearTimeout(hideControlsDelay);
		            hideControlsDelay = setTimeout(function () {
		                if (!isDraggingHandle) {
		                    var md = getMouseDistanceFromCenter();
		                    if (md.dX > 250 || md.dY > 250)
		                    {
		                        isVideoControlsVisible = false;
		                        $(vController).css("opacity", "0");
		                        $(".hpvCloseLayer").css("opacity", "0");
		                        $(".hpvSound").css("opacity", "0");
		                    }
		                }
		            }, 2000);
		        }
		    });
		}

		
		var dtToggleVideoSound = function ()
		{
		    _isHpDKSoundOn = !_isHpDKSoundOn;
		    if (_isHpDKSoundOn) {
		        $("#videoSoundOff").hide();
		        $("#videoSoundOn").show();
		        $(video)[0].muted = false;

		    } else {
		        $("#videoSoundOff").show();
		        $("#videoSoundOn").hide();
		        $(video)[0].muted = true;
		    }
		}



		var resizeHandler = function ()
		{
		    winWidth = $(window).width();
		    winHeight = $(window).height();
		    winCX = winWidth / 2;
		    winCY = winHeight / 2;
		}

		var isDraggingHandle = false;
		var addDraggerLogic = function()
		{
		    $(dragger).mousedown(function (event) {
		        event.preventDefault();
		    });

		    $(dragger).draggable({
		        distance: 15, revert: true, helper: "",
		        start: function (e, ui) {
		            //stop the video
		            $(video)[0].pause();
		            isDraggingHandle = true;
		        },
		        drag: function (e, ui) {
		            var tX = e.pageX;
		            var tY = e.pageY;
		            var ang = getAngleBy2Points(winCX, winCY, tX, tY);
		            var ref = 0;
		            if (ang > 0) {
		                ref = (180 - ang) / 360;
		            }
		            else {
                        ref = 0.5+(Math.abs(ang)/360);
		            }
		            ref = 1 - ref;//fix for flipping the direction
		            ref = ref * 100;//convert to %
		            updateProgress(ref);
		        },
		        stop: function (e, ui) {
		            isDraggingHandle = false;
		            $(video)[0].currentTime = _videoTimeByDrag;
		            $(video)[0].play();
		            updatePlayPauseMode();
		        }
		    });
		}


		var getAngleBy2Points = function(x1,y1,x2,y2)
		{
		    // angle in radians
		    var angleRadians = Math.atan2(y2 - y1, x2 - x1);
		    // angle in degrees
		    var angleDeg = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
		    return angleDeg;
		}

		var getMouseDistanceFromCenter=function()
		{
		    var winWidth = $(window).width();
		    var winHright = $(window).height();
		    var winCX = winWidth / 2;
		    var winCY = winHright / 2;
		    var dX = Math.abs(lastMouseX - winCX);
		    var dY = Math.abs(lastMouseY - winCY);
		    var obj = {
		        dX: dX,
		        dY: dY
		    };
		    return obj;
		}

		var hideControlsDelay;
		var lastMouseX;
		var lastMouseY;
		var isVideoControlsVisible = false;

		var isFirstVideo = true;

		var updatePlayPauseMode = function()
		{
		    if ($(video)[0].paused) {
		        $(vController).find(".line").addClass("play");
		    } else {
		        $(vController).find(".line").removeClass("play");
		    }
		}

		var loadVideo = function (url) {
		    var vURL = url;

		    if (isFirstVideo) {$(video).bind("timeupdate", onVideoUpdateTime);}

		    var mp4Vid = document.getElementById('vhpvPlayerSrc');
		    mp4Vid.src = vURL;
		    video.src = vURL;
                
		    try {
		        mp4Vid.currentTime = 0;
		    } catch (e) { }

		    $(video)[0].load();
		    $(video)[0].play();

		    updatePlayPauseMode();
		    isFirstVideo = false;
		}

		var setLayout = function () {
		}

		var onVideoUpdateTime = function (e) {
		    _hpvControlsActive = true;
		    //console.log("$(video)[0].currentTime=" + $(video)[0].currentTime);
		    onTrackedVideoFrame($(video)[0].currentTime, $(video)[0].duration);
		};


		var intervalHandler = function () {
		    progress++;
		    if (progress == 100)
		    {
		        progress = 0;
		    }
		    updateProgress(progress);
		}

		var onTrackedVideoFrame = function(curTime,duration)
		{
		    progress = curTime / duration * 100;
		    $(handleVal).html(formatTime(curTime));
		    $(durationVal).html(formatTime(duration));
		    updateProgress(progress);
		    if (progress > 99)
		    {
		        $(video)[0].currentTime = 0;
		        $(video)[0].play();
		        updatePlayPauseMode();
		    }
		    console.log("progress=" + progress);
		}

		var formatTime = function(totalSeconds)
		{
		    var ts = Math.floor(totalSeconds);
		    var minutes = Math.floor(ts / 60);
		    var seconds = ts - (minutes * 60);
		    var display = minutes + ":" + seconds;
		    return display;
		}

		var updateProgress = function (prog) {
		    
		    _deg = 360-(360 * prog / 100);
		    var centerP = 480 / 2;
		    var ArcAng = _deg * Math.PI / 180;


		    var Ang = (180-_deg) * Math.PI / 180;
		    var hx = centerP + (Math.cos(Ang) * (pathRadius-2)) - (30 / 2);
		    var hy = centerP + (Math.sin(Ang) * (pathRadius-2));

		    var hxVal = centerP + (Math.cos(Ang) * (pathRadius+50)) - (30 / 2);
		    var hyVal = centerP + (Math.sin(Ang) * (pathRadius + 50));

		    var pathPart = (prog / 100);//2 * 

		    vContext.clearRect(0, 0, cWidth, cHeight);

		    vContext.strokeStyle = "#c8b783";
		    vContext.lineWidth = 5;
		    vContext.beginPath();
		    vContext.arc(cWidth / 2, cHeight / 2, pathRadius, 0, Math.PI * 2);
		    vContext.stroke();
		    
		    vContext.strokeStyle = "#ffffff";
		    vContext.lineWidth = 5;
		    vContext.beginPath();
		    vContext.arc(cWidth / 2, cHeight / 2, pathRadius, 0, ArcAng);
		    vContext.stroke();

		    var hAng = 90-_deg;//_deg - 180;//
		    $(handle).css("top", hy + "px");
		    $(handle).css("left", hx + "px");
		    $(handle).css("transform", "rotate(" + hAng + "deg)");
		    

		    $(dragger).css("left", hx + "px");
		    $(dragger).css("top", hy + "px");
		    $(dragger).css("transform", "rotate(" + hAng + "deg)");
		    

		    $(handleVal).css("top", hyVal + "px");
		    $(handleVal).css("left", hxVal + "px");

		    if(isDraggingHandle)
		    {
		        //Calculate the video time based on the dragging motion location
		        var reftime = $(video)[0].duration * prog / 100;
		        _videoTimeByDrag = reftime;
		        $(handleVal).html(formatTime(reftime));
		    }

		}

		var _deg = 0;
		var _videoTimeByDrag = 0;

		

		plugin.closeVideo = function () { closeVideo(); }
		var closeVideo = function () {
		    _hpvControlsActive=false;
		    $(element).hide();
		}


		plugin.openVideo = function (url) { openVideo(url); }
		var openVideo = function (url) {
		    loadVideo(url);
		}

		plugin.setControlsActive = function (isActive) { setControlsActive(isActive); }
		var setControlsActive = function (isActive) {
		    _hpvControlsActive = isActive;
		}

		plugin.stopVideo = function () { stopVideo(); }
		var stopVideo = function () {
		    $(video)[0].pause();
		}

		plugin.init();
	}

	$.fn.vplayer = function (options) {
		return this.each(function () {
			if (undefined == $(this).data('vplayer')) {
				var plugin = new $.vplayer(this, options);
				$(this).data('vplayer', plugin);
			}
		});
	}

})(jQuery);
