// import 'components/search/search';

import Swiper, {Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);

const mainSubslider = new Swiper('.main-subslider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.main-slider-next',
        prevEl: '.main-slider-prev',
    },
    thumbs: {
        swiper: mainSubslider,
    },
});





// // import 'components/search/search';
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

// let mainSubslider = new Swiper('.main-subslider', {
//     slidesPerView: 4,
//     slidesPerGroup: 4,
//     spaceBetween: 40,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// });

// let mainSlider = new Swiper('.main-slider', {
//     slidesPerView: 1,
//     spaceBetween: 40,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true,
//     },
//     navigation: {
//         nextEl: '.main-slider-next',
//         prevEl: '.main-slider-prev',
//     },
//     thumbs: {
//         swiper: mainSubslider,
//     },
// });
