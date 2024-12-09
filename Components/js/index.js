(function ($) {
    "use strict";

    // Initialize WOW.js
    document.addEventListener("DOMContentLoaded", function () {
        new WOW().init();
    });

    // Navbar scroll behavior
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Back-to-top button functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

})(jQuery);

document.getElementById("googleForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(this);

    // Send data to Google Forms
    fetch(this.action, {
      method: this.method,
      body: formData,
      mode: "no-cors" // Allows submission without CORS restrictions
    })
      .then(() => {
        // Show success message
        document.getElementById("successMessage").style.display = "block";
        // Optionally clear the form
        this.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });