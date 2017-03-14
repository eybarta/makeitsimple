import $ from 'jquery'

import * as introAnim from './intro-animation'
// INTRO VIDEO FUNCTIONS

var $trig, $introVideo, $desktop, $playImg;

export function initIntroVideo () {
    $desktop = $(window).width()>1025;
    $playImg = $("#playintro img");
    $trig = $desktop ? $("#intro") : $("#simpleIntroMobile");
    $introVideo = $("#introvideo");
    // INTRO PLAYER
    $trig.one('click', playIntroVideo)
}


function closeTriggeHandler() {
    var ref = this;
    try {

        let closer = $introVideo.get(0).contentWindow.vrExitVR();
        if (closer) {
            closeIntroVideo();
        }
    }
    catch(e) {
        closeIntroVideo()
    }    
}

function  playIntroVideo() {
    if ($desktop) {
        introAnim.stop();
        introAnim.hide();
    }
    
    $("header").hide();
    $trig.toggleClass('play');
    $playImg.hide();
    $introVideo.attr('src', 'http://simple.mis-implants.com/vr8').show()
    $("#closeIntro").show().on('click', closeTriggeHandler)
    
}

export function closeIntroVideo() {
    if ($introVideo.is(':visible')) {
        $("#closeIntro").hide().off()
        $("header").toggle();
        $trig.toggleClass('play')
        $introVideo.attr('src', '').hide()
        setTimeout(function() {
            $playImg.show();
            $trig.one('click', playIntroVideo);
            if ($desktop) {
                introAnim.introAnimToEnd();
            }
            $trig.removeClass('playoverlay');
            $playImg.removeClass('toplay');
        },1)
    }
    
}