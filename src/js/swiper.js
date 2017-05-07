import $ from 'jquery'
import { storageAvailable } from './utils'
var misSwiper, pagesSwiper;


var initialSlide = storageAvailable('localStorage') ? localStorage.getItem('pageIndex') || 0 : 0;

export function initSwiper()  {
    misSwiper =  new Swiper('.mis-swiper-container', {
        pagination: '.mis-swiper-pagination',
        lazyLoading: true,
        paginationClickable: true,
        slidesPerView:7,
        spaceBetween:20,
        keyboardControl: true,
        preventClicks: false,
        nextButton: '.mis-next',
        prevButton: '.mis-prev',
        initialSlide,
        breakpoints: {
            1600: {
                slidesPerView:5,
                spaceBetween:15,
            },
            1200: {
                slidesPerView:4,
                spaceBetween:15,
            },
            900: {
                slidesPerView:3,
                spaceBetween:10,                
            },
            620: {
                slidesPerView:2,
                spaceBetween:10,
            },
            500: {
                slidesPerView:1,
                spaceBetween:10               
            }
        }
    });
}

// export function initPagesSwiper() {
//         pagesSwiper = new Swiper('.swiper-container', {
//             pagination: '.swiper-pagination',
//             simulateTouch: false,
//             paginationClickable: true,
//             slidesPerView:1,
//             shortSwipes: true,
//             spaceBetween:0,
//             autoHeight: true,
//             hashnav: true,
//             hashnavWatchState: true,
//             preloadImages: false,
//             lazyLoadingInPrevNext: true,
//             touchMoveStopPropagation: true,
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
//             onInit(swiper) {
//                 fixSwiperHeightIssue(swiper);
//                 $(window).on('keyup.pages', e => {
//                     if (e.keyCode==37) {
//                         // left
//                         swiper.slidePrev();
//                     }
//                     else if (e.keyCode==39) {
//                         // right
//                         swiper.slideNext();
//                     }
//                 })
//             },
//             onTransitionStart(swiper) {
//                 let event = new CustomEvent('swiped'),
//                     el = document.getElementById('pageSwiperWrapper');

//                     $(el).css('height', 3350);
//                     el.dispatchEvent(event)

//             },
//         });
// }

export function videoSwiper() {
    return new Swiper('.video-swiper', {
        pagination: '.video-swiper-pagination',
        simulateTouch: true,
        paginationClickable: true,
        slidesPerView:1,
        spaceBetween:0,
        initialSlide:0,
        effect: 'fade',
        fade: {
            crossFade: false
            },
        shortSwipes: true,
        keyboardControl: true,
        controlInverse: true,
        autoHeight: true,
        // autoplay: 11000,
        // autoplayDisableOnInteraction: false,
        nextButton: '.video-next',
        prevButton: '.video-prev',
        onTransitionStart(swiper) {
            let event = new CustomEvent('slidechange'),
                el = document.getElementById('vidSlider');
                el.dispatchEvent(event);
                console.log('swiper transition stop auto play >>', swiper);
                // swiper.stopAutoplay();
                // swiper.startAutoplay();
        },
        onReachEnd(swiper) {
             let event = new CustomEvent('lastslide'),
                el = document.getElementById('vidSlider');
                el.dispatchEvent(event)
        }

    });
}


// UTIL
export function fixSwiperHeightIssue(swiper = pagesSwiper) {
    let timer, height = Math.floor($(swiper.slides[swiper.activeIndex]).outerHeight(true));
    setTimeout(()=> {
        swiper.updateAutoHeight()
    },100)
    $(window).on('scroll.swiper', () => {
        clearTimeout(timer);
        let height2 = Math.floor($(swiper.slides[swiper.activeIndex]).outerHeight(true));
        if (height!=height2) {
            swiper.updateAutoHeight()
            $(window).off('scroll.swiper')
        }
        timer = setTimeout(function() {
            $(window).off('scroll.swiper')
        },3000)
    })
}