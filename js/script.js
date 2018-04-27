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

    // // highlighting/activating the nav while scrolling
    // var aChildren = $("nav li").children(); // find the a children of the list items
    // var aArray = []; // create the empty aArray
    // for (var i=0; i < aChildren.length; i++) {
    //     var aChild = aChildren[i];
    //     var ahref = $(aChild).attr("href");
    //     aArray.push(ahref);
    // } // this for loop fills the aArray with attribute href values

    // $(window).scroll(function(){
    //     var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    //     var windowHeight = $(window).height(); // get the height of the window
    //     var docHeight = $(document).height();
    //
    //     for (var i=0; i < aArray.length; i++) {
    //         var theID = aArray[i];
    //         var divPos = $(theID).offset().top; // get the offset of the div from the top of page
    //         var divHeight = $(theID).height(); // get the height of the div in question
    //         if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
    //             $("a[href='" + theID + "']").addClass("nav-active");
    //         } else {
    //             $("a[href='" + theID + "']").removeClass("nav-active");
    //         }
    //     }
    //
    //     if(windowPos + windowHeight == docHeight) {
    //         if (!$("nav li:last-child a").hasClass("nav-active")) {
    //             var navActiveCurrent = $(".nav-active").attr("href");
    //             $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
    //             $("nav li:last-child a").addClass("nav-active");
    //         }
    //     }
    // });

});
