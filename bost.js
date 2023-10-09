// JavaScript code for the image slider without slideIndex parameter
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

// Initial display
showSlide();

// Event listeners for the arrow buttons
document.querySelector('.left-arrow').addEventListener('click', prevSlide);
document.querySelector('.right-arrow').addEventListener('click', nextSlide);









// Get references to the carousel and slide elements
const carousel = document.getElementById("carousel");
const slide = carousel.querySelectorAll(".slide");

// Initialize the current slide index
let currentSlideIndex = 0;
// Add an event listener to the document to listen for keydown events
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
      // Left arrow key pressed, find the index of the previous slide
      for (let i = 0; i < slide.length; i++) {
          if (slide[i].style.display === "block") {
              slide[i].style.display = "none"; // Hide the current slide
              currentSlideIndex = (i - 1 + slide.length) % slide.length; // Calculate the index of the previous slide
              slide[currentSlideIndex].style.display = "block"; // Show the previous slide
              break; // Exit the loop after finding the previous slide
          }
      }
  } else if (event.key === "ArrowRight") {
      // Right arrow key pressed, find the index of the next slide
      for (let i = 0; i < slide.length; i++) {
          if (slide[i].style.display === "block") {
              slide[i].style.display = "none"; // Hide the current slide
              currentSlideIndex = (i + 1) % slide.length; // Calculate the index of the next slide
              slide[currentSlideIndex].style.display = "block"; // Show the next slide
              break; // Exit the loop after finding the next slide
          }
      }
  }
  //Use a for loop to hide all slides
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    // Show the current slide using its index
    slide[currentSlideIndex].style.display = "block";
});

// Select the button elements
const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");

// Select the .first and .second elements
const first = document.querySelector(".first");
const second = document.querySelector(".second");

// Add click event listeners to the buttons
firstButton.addEventListener("click", () => {
    first.style.display = "block";
    second.style.display = "none";
});

secondButton.addEventListener("click", () => {
    first.style.display = "none";
    second.style.display = "block";
});

const show= document.querySelector('.toggle');
const menu=document.querySelector('.links nav ul');
show.addEventListener('click', expose);
function expose(){
     if(menu.style.display==='block'){
      menu.style.display="none";
     }
     else {
      menu.style.display="block";
     }
}





