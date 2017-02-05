var misSwiper, pagesSwiper;

export function initSwiper()  {
    misSwiper =  new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
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
        paginationClickable: true,
        slidesPerView:1,
        spaceBetween:0,
        keyboardControl: true,
        autoHeight: true,
        hashnav: true,
        hashnavWatchState: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}