var vrView;
var playButton;
var muteButton;
var VrVideoURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0155_EDITED_injected.mp4";
var VrImageURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0155_preview.jpg";

function changeVideo()
{
    VrVideoURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0115_injected.mp4";
    VrImageURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0115_preview.jpg";
    vrView.setContentInfo({
        video: VrVideoURL
    });
}

//todo:
//1 check if video is supported !
//2 if not, load the image


function isIOS() {
    return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}
function isIE(){
    return navigator.userAgent.match(/Trident/);
}



function onLoad()
{
    // Load VR View.
    //if ios or IE, load the image only
    if (isIOS() || isIE())
    {
        vrView = new VRView.Player('#vrview', {
            width: '100%',
            height: '100%',
            image: VrImageURL,
            is_stereo: false,
        });
    }
    else
    {
        vrView = new VRView.Player('#vrview', {
            width: '100%',
            height: '100%',
            video: VrVideoURL,
            is_stereo: false,
            //is_debug: true,
            //default_heading: 90,
            //is_yaw_only: true,
            //is_vr_off: true,
        });

    }

  vrView.on('ready', onVRViewReady);
  vrView.on('error', onVRViewError);

  setTimeout(function () {
      changeVideo();
  }, 5000);

}

function onVRViewReady() {

}
function onVRViewError(event) {
    alert(event);
}

window.addEventListener('load', onLoad);
