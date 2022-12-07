import Swiper from 'swiper';

let surfSlider = new Swiper('.surf-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: -50,
    grabCursor: true,
    navigation: {
        nextEl: '.surf-slider-next',
        prevEl: '.surf-slider-prev',
    },
    // thumbs: {
    //     swiper: surfSubslider,
    // },
});
let surfSubslider = new Swiper('.surf-subslider', {
    slidesPerView: 9,
    swipeHandler: 1,
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,       
});




