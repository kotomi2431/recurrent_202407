
import Splide from '@splidejs/splide';/* splideの読み込み */

// デフォルトのテーマCSS読み込み
import '@splidejs/splide/css';

new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
}).mount();