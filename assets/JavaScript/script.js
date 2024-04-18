

const loader = document.querySelector('#loader');

window.addEventListener('load', () => {
    loader.style.display = "none";
})

// -----------page content loader--------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hide = document.querySelectorAll(".hidden");

hide.forEach((e) => observer.observe(e))

// ----------Menubar-------------
let service = document.querySelector('.services');
let dropmenu = document.querySelector('.dropdown');
let mobileDropDown = document.querySelector('.mobiledropdown');

let count = 1;
const x = window.matchMedia("(max-width: 991px)");

function myFunction(x) {
    if (x.matches) { // If media query matches
        mobileDropDown.style.display = "block";
    } else {
        mobileDropDown.style.display = "flex";
    }
}

function showServices() {
    if (count === 1) {
        myFunction(x);
        count--;
    } else {
        dropmenu.style.display = "none";
        count++;
    }
}

service.addEventListener('click', () => {
    showServices();
});

const nav = document.querySelector("#firstUl");
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const body = document.querySelector('body');
const overlay = document.querySelector('[data-overlay]');

openMenu.addEventListener('click', () => {
    overlay?.classList.add("overlay");
    nav.style.display = "block";
    openMenu.style.display = 'none';
    body.style.overflow = "hidden";

});

closeMenu.addEventListener('click', () => {
    dropmenu.style.display = "none";
    body.style.overflow = "auto";
    nav.style.display = "none";
    overlay?.classList.remove("overlay");
    openMenu.style.display = 'inline-block';
});



document.addEventListener('click', function (event) {
    const menuIcon = document.querySelector('[data-menuicon]');
    const x = window.matchMedia("(max-width: 991px)");

    let nav = document.querySelector("#firstUl");
    var targetElement = event.target;

    // Check if the clicked element is not within the navbar
    if (!nav.contains(targetElement) && !menuIcon.contains(targetElement) && x.matches) {
        nav.style.display = 'none';
        openMenu.style.display = 'inline-block';
        overlay?.classList.remove("overlay");
        body.style.overflow = "auto";
    }
    else if(!nav.contains(targetElement) && !menuIcon.contains(targetElement) ){
        dropmenu.style.display = "none";
        count++;
    }
});

