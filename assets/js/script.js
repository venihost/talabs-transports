// scripts.js

// Initialize the carousel with autoplay
$(document).ready(function () {
    $('#heroCarousel').carousel({
        interval: 5000, // Change slide every 5 seconds
        pause: "hover" // Pause on hover
    });

    // Optional: Add smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });


    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
    
});