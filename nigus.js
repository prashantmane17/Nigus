const observer =new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }
    });
});

const hide=document.querySelectorAll(".hidden");

hide.forEach((e)=>observer.observe(e))


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


let service=document.querySelector('.services');
let dropmenu=document.querySelector('.dropdown');
 
let count=1;

function showServices(){
    if(count===1)
    {
        dropmenu.style.display="flex";
        count--;
    }
    else{
        dropmenu.style.display="none";
        console.log("2");
        count++;
    }
   
}
service.addEventListener('click',()=>{
showServices();
})