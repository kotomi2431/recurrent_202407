// slide用のjsになります。

import {
  Splide
} from '@splidejs/splide';
import '@splidejs/splide/css';

const fvslide = new Splide('.fv_slide', {
  // 今回オプションはループのみを追加しているのみで、他ページネーションやスライドボタンはベースで実装されています
  // オプションを色々追加してみたりしてもらってもいいです。
  // splide公式サイト「https://ja.splidejs.com/guides/options/」

  type:'loop'
});
fvslide.mount({});