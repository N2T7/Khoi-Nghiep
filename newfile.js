let slideIndex = 1;
let autoSlideInterval;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Reset index if it goes out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and remove active class from dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the selected slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to change slide manually
function plusSlides(n) {
  clearInterval(autoSlideInterval); // Stop auto-slide
  showSlides((slideIndex += n));
  startAutoSlide(); // Restart auto-slide
}

// Function to set a specific slide manually
function currentSlide(n) {
  clearInterval(autoSlideInterval); // Stop auto-slide
  showSlides((slideIndex = n));
  startAutoSlide(); // Restart auto-slide
}

// Function to automatically advance slides every 3 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000); // Change interval as needed
}

// Initial display of the first slide
showSlides(slideIndex);
startAutoSlide(); // Start automatic slideshow
