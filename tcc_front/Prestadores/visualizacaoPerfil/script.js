"use strict";

$(document).ready(function () {
    $('.carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<button class="slick_prev" aria-label="Previous" type="button">&lt;</button>',
        nextArrow:'<button class="slick_next" aria-label="Next" type="button">&gt;</button>'
      });
})