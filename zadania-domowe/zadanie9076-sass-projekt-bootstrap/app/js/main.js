'use strict';

$(function() {
   
    // smooth scroll
    
    $("a[href*='#']:not([href='#'])").click(function(e) {
        $("html, body").animate({ scrollTop: $(this.hash).offset().top}, 500);
    });
    
    // scroll nav color change
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("#main-nav").addClass("scroll");
        } else {
            $("#main-nav").removeClass("scroll");
        }
    });
    
});