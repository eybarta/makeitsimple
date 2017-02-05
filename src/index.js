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
})

 