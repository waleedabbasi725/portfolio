$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["APP/WEB Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["APP/WEB Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Handling "Download CV" functionality
    $('.download-cv').click(function(e){
        e.preventDefault(); // Preventing default behavior of anchor tag
        var cvUrl = 'waleedcv11.pdf'; // Replace with actual CV file path
        window.location.href = cvUrl; // Initiating download of the CV file
    });

    // Handling "Hire me" button functionality
    $('.hire-me').click(function(){
        var phoneNumber = '+923231565225'; // Replace with your phone number
        window.location.href = 'tel:' + phoneNumber; // Opening dial pad with your phone number
    });
});
