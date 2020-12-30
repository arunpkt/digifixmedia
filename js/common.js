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

jQuery(document).ready(function() {
    stellarParallax();
      /* ===================================
     sticky nav Start
     ====================================== */
     jQuery(document).scroll(function() {
        var headerHeight = jQuery('nav').outerHeight();
        var scrollTop = jQuery(document).scrollTop();
        if (scrollTop >= headerHeight) {
            jQuery('header').addClass('sticky');
        } else if (scrollTop <= headerHeight) {
            jQuery('header').removeClass('sticky');
        }
    });
    /* Scroll top */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 600) {
            jQuery('.upar').fadeIn();
        } else {
            jQuery('.upar').fadeOut();
        }
    });
    jQuery('.upar').click(function() {
        jQuery('body,html').animate({
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
    jQuery(document).ready(function () {
        wow.init();
    });
});

/*==============================================================
 //Parallax - START CODE
 ==============================================================*/
 function stellarParallax() {
    if (jQuery(window).width() > 1024) {
        jQuery.stellar();
    } else {
        jQuery.stellar('destroy');
        jQuery('.parallax').css('background-position', '');
    }
}

//Toggle search terms
function toggle(id){
    jQuery("#" + id).toggle();
}
jQuery(window).on("scroll", init_scroll_navigate);
function init_scroll_navigate() {
    
/*==============================================================
    One Page Main JS - START CODE
    =============================================================*/
var menu_links = jQuery(".navbar-nav li a");
var scrollPos = jQuery(document).scrollTop();
scrollPos = scrollPos + 60;
menu_links.each(function () {
    var currLink = jQuery(this);
    var hasPos = currLink.attr("href").indexOf("#");
    if (hasPos > -1) 
    {
        var res = currLink.attr("href").substring(hasPos);
        if (jQuery(res).length > 0) {
            var refElement = jQuery(res);
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
jQuery(document).on('click', 'a', function (event) {
    var target = this.hash;
    if (jQuery(target).length != 0) {
        jQuery('html, body').animate({
                    'scrollTop': jQuery(target)
                            .offset()
                            .top - jQuery("nav.navbar").outerHeight() - 5
                }, scrollAnimationTime, scrollAnimation, function () {
                });
    }
});

// Contact us submit
jQuery(document).ready(function() {
    jQuery("#enquiry_submit").click(function(event){
        event.preventDefault();
        jQuery("#enquiry_submit").attr("disabled","disabled");
        var name = jQuery("#name").val();
        var email = jQuery("#email").val();
        var phoneno = jQuery("#phoneno").val();
        var subject = jQuery("#subject").val();
        if(name == null || name == "" || email == null || email == "" ||phoneno == null || phoneno == "" ||subject == null || subject == "") {
            jQuery("#error_id").fadeIn(500);
            jQuery("#success_id").fadeOut(2000);
            return false;
        }
        var enPoint = jQuery("#admin_ajax_url").val();
        var formData = new FormData;
        var formFields = jQuery("#contact-form").serialize();
        formData.append("action", "enquiry");
        formData.append("enquiry", formFields);
        jQuery.ajax({
        url : enPoint,
        data : formData,
        type : 'POST',
        processData : false,
        contentType : false,
        success : function (res) {
            jQuery("#success_id").fadeIn(2000);
            jQuery("#error_id").fadeOut(500);
            jQuery("#contact-form").fadeOut(2000).trigger('reset').fadeIn(2000);
            jQuery("#enquiry_submit").removeAttr("disabled");
            alert(res.data);
        },
        error : function(res) {
            jQuery("#enquiry_submit").removeAttr("disabled");
            alert(res.data);
        }
        });
    });
});
