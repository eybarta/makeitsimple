var misSwiper, pagesSwiper;

export function initSwiper()  {
    misSwiper =  new Swiper('.mis-swiper-container', {
        pagination: '.mis-swiper-pagination',
        paginationClickable: true,
        slidesPerView:5,
        spaceBetween:20,
        keyboardControl: true,
        preventClicks: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
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

export function initPagesSwiper() {
    pagesSwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // grabCursor: true,
        simulateTouch: false,
        paginationClickable: true,
        slidesPerView:1,
        spaceBetween:0,
        keyboardControl: true,
        autoHeight: true,
        hashnav: true,
        hashnavWatchState: true,
        longSwipes:true,
        shortSwipes:false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}

export function videoSwiper() {
    return new Swiper('.video-swiper', {
        pagination: '.video-swiper-pagination',
        // grabCursor: true,
        simulateTouch: true,
        paginationClickable: true,
        slidesPerView:1,
        spaceBetween:0,
        keyboardControl: true,
        autoHeight: true,
        autoplay: 11000
    });
}
