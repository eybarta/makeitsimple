import $ from 'jquery'
import _ from 'lodash'
import Vue from 'vue'

import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
import { initPagesSwiper } from './js/swiper'


$(() => {
    initPagesSwiper();
})

import Pages from './vue/Pages.vue'

const pages = new Vue({
    render: h => h(Pages),
    mounted() {
    	console.log("VUE ROOT MOUNTED");
    }
}).$mount('#pages');