var vrView;
var playButton;
var muteButton;
var VrVideoURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0155_EDITED_injected.mp4";
var VrImageURL = "https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/VR/360_0155_preview.jpg";

function onLoad() {
  // Load VR View.
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: '100%',
    video: VrVideoURL,
    is_stereo: true,
    //is_debug: true,
    //default_heading: 90,
    //is_yaw_only: true,
    //is_vr_off: true,
  });
  vrView.on('ready', onVRViewReady);

  playButton = document.querySelector('#toggleplay');
  muteButton = document.querySelector('#togglemute');

  playButton.addEventListener('click', onTogglePlay);
  muteButton.addEventListener('click', onToggleMute);
}

function onVRViewReady() {
  console.log('vrView.isPaused', vrView.isPaused);
  // Set the initial state of the buttons.
  if (vrView.isPaused) {
    playButton.classList.add('paused');
  } else {
    playButton.classList.remove('paused');
  }
}

function onTogglePlay() {
  if (vrView.isPaused) {
    vrView.play();
    playButton.classList.remove('paused');
  } else {
    vrView.pause();
    playButton.classList.add('paused');
  }
}

function onToggleMute() {
  var isMuted = muteButton.classList.contains('muted');
  if (isMuted) {
    vrView.setVolume(1);
  } else {
    vrView.setVolume(0);
  }
  muteButton.classList.toggle('muted');
}

window.addEventListener('load', onLoad);
