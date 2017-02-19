
import $ from 'jquery'
import Vue from 'vue'
// import InView from 'vue-inview'

import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
import { initPagesSwiper } from './js/swiper'
import { initScrollNav } from './js/scroll-nav'


$(() => {
    initPagesSwiper();
    initScrollNav();
})

import Pages from './vue/Pages.vue'

const pages = new Vue({
    render: h => h(Pages),
    mounted() {
    	console.log("VUE ROOT MOUNTED");
    }
}).$mount('#pages');