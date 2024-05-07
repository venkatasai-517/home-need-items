(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");
const visitButton = document.querySelector(".popup-container .visit-button");

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;

const createPopupCookie = () => {
  let expiresDays = 30;
  let date = new Date();
  date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
  
};

const showAd = () => {
  popupOverlay.classList.add("active");
  popupTimer = setInterval(() => {
    skipButton.innerHTML = `Skip in ${remainingTime}s`;
    remainingTime--;

    if (remainingTime < 0) {
      allowedToSkip = true;
      skipButton.innerHTML = "Skip";
      clearInterval(popupTimer);
    }
  }, 1000);
};

const skipAd = () => {
  popupOverlay.classList.remove("active");
  createPopupCookie();
};

skipButton.addEventListener("click", () => {
  if (allowedToSkip) {
    skipAd();
  }
});

const startTimer = () => {
  if (window.scrollY > 100) {
    showAd();
    window.removeEventListener("scroll", startTimer);
  }
};

if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
  window.addEventListener("scroll", startTimer);
}

