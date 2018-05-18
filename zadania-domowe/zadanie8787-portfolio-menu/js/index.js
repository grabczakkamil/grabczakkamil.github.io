'use strict';

$(function() {
    
    // scroll nav color change
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#main-nav").addClass("scroll");
        } else {
            $("#main-nav").removeClass("scroll");
        }
    });
    
});