
const slid = document.querySelectorAll('.imgg');
let currentSlid = 1;

function imgSlid(n) {

    slid.forEach((slide) => {
        slide.classList.remove('active');
    });
    slid[n].classList.add("active");
}

function number() {
    currentSlid = (currentSlid + 1) % slid.length;
    imgSlid(currentSlid);
}
setInterval(number, 2000);

