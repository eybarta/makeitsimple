import Vue from 'vue';
import './styl/app.styl';
import 'swiper/dist/css/swiper.css'

import $ from 'jquery'
import { globalCustomEventPoly } from './js/utils';
globalCustomEventPoly();
import { initIntroAnimation } from './js/intro-animation'
import { initIntroVideo } from './js/intro-video'
import { initSwiper } from './js/swiper'
import { initMap } from './js/google-map';
import { initScrollNav } from './js/scroll-nav'
import * as utils from './js/utils'

var $desktop;

$("header").css({'visibility': 'hidden'});
$(() => {
    $desktop = $(window).width()>1023;
    if ($desktop) {
        initIntroAnimation();
    }
    else {
        $("#bigGraphic").attr('src', 'dist/img/mobile-intro-graphic.jpg');
    }
    initIntroVideo();
    initScrollNav();
    initSwiper();
    initMap();
    bindEvents();
})

  
function  bindEvents() {
    // FAQ || ENABLE SELF CLICK (closing item)
    $("#faq li").on('mousedown', faqSelfClick)

    $(window).on('resize.title', titleTextHandler)
    titleTextHandler();
}



// FAQ self click
 function faqSelfClick(e) {
    let radio = $(this).find("input[type=radio]").get(0);
    if (!!radio.checked) {
        setTimeout(function() {
            radio.checked = false;
        }, 150)
    }
}
// TITLE TEXT CHANGES ON RESIZE
var titletxt = "SIMPLY MORE INFORMATION";
function titleTextHandler() {
    let isDevice = $(window).width()<640;
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
    render: h => h(VideoSlider)
}).$mount('#vidSlider');