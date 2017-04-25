import { globalCustomEventPoly } from './js/utils'
globalCustomEventPoly()

import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import VueRouter from 'vue-router'
import FetchData from 'vue-fetch-data'
 
Vue.use(AsyncComputed)
Vue.use(VueRouter)
Vue.use(FetchData)

import './styl/app.styl';
import 'swiper/dist/css/swiper.css'
Vue.config.devtools = true;


import { routes } from './routes'

export const router = new VueRouter({
    mode: 'history',
    routes
})

import Simple from './vue/Main.vue'

const simple = new Vue({
    router,
    render: h => h(Simple)
}).$mount('#simple');