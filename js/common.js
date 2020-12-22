"use strict";
var lastScroll = 0;

//check for browser os
var isMobile = false;
var isiPhoneiPad = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
}

$(document).ready(function() {
    stellarParallax();
      /* ===================================
     sticky nav Start
     ====================================== */
     $(document).scroll(function() {
        var headerHeight = $('nav').outerHeight();
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= headerHeight) {
            $('header').addClass('sticky');
        } else if (scrollTop <= headerHeight) {
            $('header').removeClass('sticky');
        }
    });
    /* Scroll top */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.upar').fadeIn();
        } else {
            $('.upar').fadeOut();
        }
    });
    $('.upar').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);    
        return false;
    });
    
    /*==============================================================
      wow animation - on scroll
    ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });

});

/*==============================================================
 //Parallax - START CODE
 ==============================================================*/
 function stellarParallax() {
    if ($(window).width() > 1024) {
        $.stellar();
    } else {
        $.stellar('destroy');
        $('.parallax').css('background-position', '');
    }
}

//Toggle search terms
function toggle(id){
    $("#" + id).toggle();
}
$(window).on("scroll", init_scroll_navigate);
function init_scroll_navigate() {
    
/*==============================================================
    One Page Main JS - START CODE
    =============================================================*/
var menu_links = $(".navbar-nav li a");
var scrollPos = $(document).scrollTop();
scrollPos = scrollPos + 60;
menu_links.each(function () {
    var currLink = $(this);
    var hasPos = currLink.attr("href").indexOf("#");
    if (hasPos > -1) 
    {
        var res = currLink.attr("href").substring(hasPos);
        if ($(res).length > 0) {
            var refElement = $(res);
            if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
                menu_links.not(currLink).removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        }
    }
});
}
var scrollAnimationTime = 1200, scrollAnimation = 'easeInOutExpo';
$(document).on('click', 'a', function (event) {
    var target = this.hash;
    if ($(target).length != 0) {
        $('html, body').animate({
                    'scrollTop': $(target)
                            .offset()
                            .top - $("nav.navbar").outerHeight() - 5
                }, scrollAnimationTime, scrollAnimation, function () {
                });
    }
});