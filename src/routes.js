
import { PagesData } from './js/pages-data';

import Page from './vue/Page.vue'
import Homepage from './vue/Homepage.vue'


function dynamicPagePropsFn(route) {
    var hash = route.params.pageid,
    pageObj = _.find(PagesData, { hash }),
    pageIndex = _.findIndex(PagesData, { hash });
    if (!!pageObj) {
        return {
            pageIndex,
            introBg:pageObj.introBg,
            introFloatingElement:pageObj.introFloatingElement,
            introVideo: pageObj.introVideo,
            introMobileVideo: pageObj.introMobileVideo,
            infoblock:pageObj.infoblock,
            outblock:pageObj.outblock,
            infoblock2:pageObj.infoblock2
        }
    }
    return false;
}

export const routes = [
    
    {
        path: '/*/:pageid',
        name: 'page',
        component: Page,
        props: dynamicPagePropsFn
    },
    {
        path: '*',
        name: 'home',
        component: Homepage
    }
]