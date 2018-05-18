'use strict';
$(function () {

    $("a[href*='#']:not([href='#'])").click(function (e) {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });
});