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