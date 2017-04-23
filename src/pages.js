import $ from 'jquery'
import _ from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
import { globalCustomEventPoly } from './js/utils';
import { initPagesSwiper } from './js/swiper'

Vue.use(VueRouter)
import { routes } from './routes'

export const router = new VueRouter({
    mode: 'history',
    routes
})
$(() => {
    globalCustomEventPoly();
    // initPagesSwiper();
})

import Pages from './vue/Pages.vue'

const pages = new Vue({
    router,
    render: h => h(Pages)
}).$mount('#pages');