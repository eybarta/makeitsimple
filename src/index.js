import './styl/app.styl';
import 'swiper/dist/css/swiper.css'

import $ from 'jquery'

import { initSwiper } from './js/swiper'
import { initMap } from './js/google-map';
import { initScrollNav } from './js/scroll-nav'
import * as utils from './js/utils'
$(() => {
    initScrollNav();
    initSwiper();
    initMap();

    bindEvents();
})

    
function  bindEvents() {
    // INTRO PLAYER
    $("#top").on('click', function() {
        console.log('play/stop');
        $("header").toggle();
        $("#top").toggleClass('play')
        
        $('#introvideo').attr('src', 'http://simple.mis-implants.com/vr8')
        $("#closeIntro").show().on('click', closeIntroVideo)
        
    })

    // FAQ || ENABLE SELF CLICK (closing item)
    $("#faq li").on('mousedown', function(e) {
        let radio = $(this).find("input[type=radio]").get(0);
    	if (!!radio.checked) {
        setTimeout(function() {
          radio.checked = false;
        }, 150)
      }
	})
}


function closeIntroVideo() {
    $('#introvideo').attr('src', '').hide()
    $("#closeIntro").hide()
}