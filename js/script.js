$(document).ready (function() {

    // navbar and back to top button
    $(window).scroll (function() {
           var window_top = $(window).scrollTop();
           // var nav_top = $(".hero").offset().top;
           var div_top = $("#cover").offset().top;

            if (window_top > nav_top) {
                $("header").addClass("stick");
            } else {
                $("header").removeClass("stick");
            }

            if (window_top > div_top) {
                $(".top").fadeIn();
            } else {
                $(".top").fadeOut();
            }
    });

    // smooth scroll to top
    $(".top").on("click", function(event) {
        event.preventDefault();
        $("body, html").animate({scrollTop: 0}, 700);
    });

    // scroll to home
    $("header a").click (function(event) {
        event.preventDefault();
        $("body, html").scrollTo(this.hash, this.hash);
    });

    // scroll learn more click
    $("#home a").click (function(event) {
        event.preventDefault();
        $("body, html").scrollTo(this.hash, this.hash);
    });

    // scroll to sections
    $("nav a").click (function(event) {
        event.preventDefault();
        $("body, html").scrollTo(this.hash, this.hash);
    });

    //scroll by scroll down button
    $(".scroll-down a").click (function(event) {
        event.preventDefault();
        $("body, html").scrollTo(this.hash, this.hash);
    });

    

});
