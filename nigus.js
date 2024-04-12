// const valueDisplays = document.querySelectorAll(".num");
// const interval = 500;

// valueDisplays.forEach(valueDisplay => {
//     let endValue = parseInt(valueDisplay.getAttribute("value"));
//     let duration = interval / endValue;
//     let startValue = 0;
    
//     let counter = setInterval(() => {
//         valueDisplay.textContent = ++startValue;
//         if (startValue === endValue) clearInterval(counter);
//     }, duration);
// });


document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(n) {
      slides.forEach((slide) => {
          slide.classList.remove('active');
      });
      slides[n].classList.add('active');
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 2000); // Change slide every 3 seconds (3000 milliseconds)
});



