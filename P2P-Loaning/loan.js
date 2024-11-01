// Image Slideshow Functionality
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-circle img');

function rotateImages() {
  images.forEach((img, index) => {
    img.style.opacity = index === currentImageIndex ? '1' : '0.2';
  });
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(rotateImages, 2000); // Change every 2 seconds

// Scrolling Updates
const updateScroll = document.querySelector('.update-scroll');
updateScroll.scrollTop = 0;

function scrollUpdates() {
  updateScroll.scrollTop += 1;
  if (updateScroll.scrollTop >= updateScroll.scrollHeight - updateScroll.clientHeight) {
    updateScroll.scrollTop = 0;
  }
}

setInterval(scrollUpdates, 50); // Speed of scrolling
