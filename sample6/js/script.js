$(window).scroll(function () {           /* スクロールされた時 */
    var pos = $('concept').offset();       /* mvを過ぎたconceptタグの高さを取得して変数[pos]に格納 */
    if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
      $('header').fadeIn();                /* ヘッダーをふわっと表示 */
    } else {                               /* それ以外の場合 */
      $('header').fadeOut();               /* ヘッダーをふわっと非表示 */
    }
});