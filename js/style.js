let notifications = document.getElementById('notification');
let ads = ['https://bvscarpenters.netlify.app',  'https://addtheadd.com','https://bvsadd.netlify.app','https://bvswatchshop.netlify.app']; // Deep link URLs of ads
let currentIndex = 0;

function displayAd() {
    notifications.classList.add('show');
    setTimeout(hideAd, 10000); // Hide ad after 10 seconds
}

function hideAd() {
    notifications.classList.remove('show');
    currentIndex = (currentIndex + 1) % ads.length;
    setTimeout(displayAd, 10000); // Display next ad after 10 second
}

function cancelAd() {
    window.location.href = ads[currentIndex];
}

displayAd(); // Start displaying ads