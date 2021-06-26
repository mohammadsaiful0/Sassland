$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready


    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("navbar-fixed");

        } else {
            $(".navbar").removeClass("navbar-fixed");

        }

    });
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("bg-dark");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("bg-dark");
            } else {}
        }
    });

    // document ready
});

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 56) {
            $('.navbar-brand img').attr('src', './assets/Images/Logo/logo.png');
        }
        if ($(this).scrollTop() < 56) {
            $('.navbar-brand img').attr('src', './assets/Images/Logo/logo2.png');
        }
    })
});
// ==== scroll animation ====

AOS.init({
    duration: 1200,
})

// ==== ppops hover pricing ====

$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
});