import Vue from 'vue';
import './styl/app.styl';
import 'swiper/dist/css/swiper.css'

import $ from 'jquery'

import { initSwiper } from './js/swiper'
import { initMap } from './js/google-map';
import { initScrollNav } from './js/scroll-nav'
import * as utils from './js/utils'

$(() => {
    loadIntro();
    initScrollNav();
    initSwiper();
    initMap();
    bindEvents();

    console.log($("#vidSource"))

    
    
})

function loadIntro() {
    $("#vid").one('canplaythrough', function() {
        $("#simpleIntro").fadeOut(100)
    })
    $("#vid").attr('src', 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/simple-minisite.mp4');
}    
function  bindEvents() {
    // INTRO PLAYER
    $("#top").one('click', playIntroVideo)
    // FAQ || ENABLE SELF CLICK (closing item)
    $("#faq li").on('mousedown', function(e) {
        let radio = $(this).find("input[type=radio]").get(0);
    	if (!!radio.checked) {
        setTimeout(function() {
          radio.checked = false;
        }, 150)
      }
	})

    $(window).on('resize.title', titleTextHandler)
    titleTextHandler();
}


function closeIntroVideo() {
    var ref = this;
    console.log('close intro video');
    try {

        let closer = $("#introvideo").get(0).contentWindow.vrExitVR();
        console.log("closer >> ", closer);
        if (closer) {
            closevid()
        }
    }
    catch(e) {
        console.log('in catch>> ', e);
        closevid()
    }
    
    function closevid() {
        $(ref).hide();
        $("header").toggle();
        $("#top").toggleClass('play')
        $('#introvideo').attr('src', '').hide()
        setTimeout(function() {
            $("#top").one('click', playIntroVideo);
            $("#vid").fadeIn(200)
            $("#vid").get(0).play();
        },1)
    }
    
}

function  playIntroVideo() {
    $("vid").stop().fadeOut('fast');
    $("header").toggle();
    $("#top").toggleClass('play')
    $('#introvideo').attr('src', 'http://simple.mis-implants.com/vr8').show()
    $("#closeIntro").show().one('click', closeIntroVideo)
    
}

// TITLE TEXT CHANGES ON RESIZE
var titletxt = "SIMPLY MORE INFORMATION";
function titleTextHandler() {
    let isDevice = $(window).width()<769;
    $("#infoTitle").html(isDevice ? _.replace(titletxt, /\s/g, '<br>') : titletxt)
    if (isDevice) {
        $("#infoTitle").addClass('breaked')
    }
    else {
        $("#infoTitle").removeClass('breaked')
        
    }


}


import VideoSlider from './vue/components/VideoSlider.vue'

const pages = new Vue({
    render: h => h(VideoSlider),
    mounted() {
    	console.log("VideoSlider MOUNTED");
    }
}).$mount('#vidSlider');