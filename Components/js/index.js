(function ($) {
    "use strict";

    // 1. Initialize WOW.js
    document.addEventListener("DOMContentLoaded", function () {
        new WOW().init();
    });

    // 2. Navbar Scroll Behavior
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // 3. Dropdown on Mouse Hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // 4. Back-to-Top Button Functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // 5. Header Carousel
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

    // 6. Testimonial Carousel
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

// 7. Handle Google Form Submission - Version 1 (Generic)
document.getElementById("googleForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Submit data to Google Forms
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

document.getElementById("customForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send the form data to Google Forms
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSd_c-_0VO08DWc9VPqTl8oPuFVpcibUF0gOz_nXKcZLGBBlkQ/viewform?usp=sharing", {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required to bypass CORS restrictions
    })
        .then(() => {
            // Assume success even if no response
            document.getElementById("successMessage").style.display = "block";

            // Optionally, clear the form
            form.reset();
        })
        .catch((error) => {
            console.error("Error submitting the form:", error);
            alert("There was an error submitting the form. Please try again.");
        });
});
