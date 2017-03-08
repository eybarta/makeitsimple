import $ from 'jquery'
import _ from 'lodash'
import Vue from 'vue'

import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
import { globalCustomEventPoly } from './js/utils';
import { initPagesSwiper } from './js/swiper'


$(() => {
    globalCustomEventPoly();
    initPagesSwiper();
})

import Pages from './vue/Pages.vue'

const pages = new Vue({
    render: h => h(Pages)
}).$mount('#pages');