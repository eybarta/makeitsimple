import Vue from 'vue';
import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
Vue.config.devtools = true;
import $ from 'jquery'
import { globalCustomEventPoly } from './js/utils';
globalCustomEventPoly();
import { initIntroAnimation } from './js/intro-animation'
// import { initIntroVideo } from './js/intro-video'
import { initSwiper } from './js/swiper'
import { initMap } from './js/google-map';
import { initScrollNav } from './js/scroll-nav'
import * as utils from './js/utils'

var $desktop;

$("header").css({'visibility': 'hidden'});
$(() => {
    $desktop = $(window).width()>1023;
    initSwiper();
    initScrollNav();
    initMap();
    bindEvents();
    if ($desktop && !isMozillaOrIE()) {
        initIntroAnimation();
    }
    else {
        $("#bigGraphic").attr('src', 'dist/img/mobile-intro-graphic.jpg');

        // fix pdf links for mobile on index page
        $("#conicalLink").attr('href', 'http://www.mis-implants.com/upload/PDF/Products/MIS_Conical_Connection_Catalog_2017_(MC-PCCSE)_Rev3.pdf')
        $("#internalLink").attr('href', 'http://www.mis-implants.com/upload/PDF/Products/MIS_Internal_Hex_Catalog_2016_(MC-CIH06)_Rev13.pdf')
    }
})

function isMozillaOrIE() {
    let ua = window.navigator.userAgent;
    return (/firefox/gi.test(ua) || "ActiveXObject" in window);
}
  
function  bindEvents() {
    // FAQ || ENABLE SELF CLICK (closing item)
    $(window).on('resize.title', titleTextHandler)
    titleTextHandler();
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

import IntroSection from './vue/components/IntroSection.vue'
import Faq from './vue/components/Faq.vue'
import VideoSlider from './vue/components/VideoSlider.vue'



const introsection = new Vue({
    render: h => h(IntroSection)
}).$mount('intro-section');


const faq = new Vue({
    render: h => h(Faq)
}).$mount('faq');


const videoslider = new Vue({
    render: h => h(VideoSlider)
}).$mount('video-slider');
