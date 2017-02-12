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
    $("#playintro").one('click', function() {
        $(this).toggleClass('play');
        $('#introvideo').attr('src', 'http://simple.mis-implants.com/vr8')
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