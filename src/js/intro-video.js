import $ from 'jquery'

import * as introAnim from './intro-animation'
// INTRO VIDEO FUNCTIONS

var $trig, $introVideo;

export function initIntroVideo () {
     $trig = $("#playintro img");
    $introVideo = $("#introvideo");
    // INTRO PLAYER
    $trig.one('click', playIntroVideo)
}


function closeTriggeHandler() {
    var ref = this;
    console.log('close intro video');
    try {

        let closer = $introVideo.get(0).contentWindow.vrExitVR();
        console.log("closer >> ", closer);
        if (closer) {
            closeIntroVideo()
        }
    }
    catch(e) {
        console.log('in catch>> ', e);
        closeIntroVideo()
    }    
}

function  playIntroVideo() {
    introAnim.stop();
    introAnim.hide();
    $("header").hide();
    $("#intro").toggleClass('play');
    
    $introVideo.attr('src', 'http://simple.mis-implants.com/vr8').show()
    console.log($introVideo);
    $("#closeIntro").show().one('click', closeTriggeHandler)
    
}

export function closeIntroVideo() {
    if ($introVideo.is(':visible')) {
        $("#closeIntro").hide()
        $("header").toggle();
        $("#intro").toggleClass('play')
        $introVideo.attr('src', '').hide()
        setTimeout(function() {
            $trig.one('click', playIntroVideo)
            introAnim.show();
            introAnim.play();
        },1)
    }
    
}