

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal .close-btn");
const discountBtn = document.querySelector(".modal .discount-btn");

const createCookie = () => {
  let maxAge = ";max-age=10";
  let path = ";path=/";
  document.cookie = "live-blogger-popup=displayed" + maxAge + path;
};

const displayModal = () => {
  if (document.cookie.indexOf("live-blogger-popup") == -1) {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    createCookie();
  }
};

setTimeout(() => {
  displayModal();
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

discountBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})