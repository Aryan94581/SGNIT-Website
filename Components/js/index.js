new WOW().init();
document.addEventListener("DOMContentLoaded", function () {
    $(".header-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: true,
    });
});

