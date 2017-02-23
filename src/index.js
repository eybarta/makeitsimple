import Vue from 'vue';
import './styl/app.styl';
import 'swiper/dist/css/swiper.css'

import $ from 'jquery'

import { initSwiper, videoSwiper } from './js/swiper'
import { initMap } from './js/google-map';
import { initScrollNav } from './js/scroll-nav'
import * as utils from './js/utils'

var vidSwiper;
$(() => {
    initScrollNav();
    initSwiper();
    vidSwiper = videoSwiper();
    initMap();

    bindEvents();

})

    
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

    $("#infoToggle").on('click', infoToggleHandler)
    $(window).on('resize.title', titleTextHandler)
    titleTextHandler();
}


function closeIntroVideo() {
    $(this).hide();
    $("header").toggle();
    $("#top").toggleClass('play')
    $('#introvideo').attr('src', '').hide()
    setTimeout(function() {
        $("#top").one('click', playIntroVideo);
    },1)
}

function  playIntroVideo() {
    console.log("PLAY INTRO");
    $("header").toggle();
    $("#top").toggleClass('play')
    $('#introvideo').attr('src', 'http://simple.mis-implants.com/vr8').show()
    $("#closeIntro").show().one('click', closeIntroVideo)
    
}

function infoToggleHandler() {
    $(this).toggleClass('on');
    let $control = $(this).next(".swiper-control");
    $control.find(".info-overlay").toggleClass('on')
    $control.find("video").toggleClass('under')
    vidSwiper.stopAutoplay();
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