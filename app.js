const navSlide = () => {

    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-ul");
    const navLinks = document.querySelectorAll(".nav-list");

    menu.addEventListener('click', () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();



// SKILL ANIMATION 
var controller = new ScrollMagic.Controller();

var skill = new ScrollMagic.Scene({
    triggerElement: '.skills',
    reverse: false
})
    .setClassToggle('.skills', 'fade-in')
    .addTo(controller);


// SKILL DISCRIBE ANIMATION 
var controller = new ScrollMagic.Controller();

var approach = new ScrollMagic.Scene({
    triggerElement: '.approach',
    reverse: false
})
    .setClassToggle('.approach', 'fade-in')
    .addTo(controller);


// SKILL LOGOS ANIMATION 
var controller = new ScrollMagic.Controller();

var langLogo = new ScrollMagic.Scene({
    triggerElement: '.lang-logo',
    reverse: false
})
    .setClassToggle('.lang-logo', 'fade-in')
    .addTo(controller);

//////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

var langLogo = new ScrollMagic.Scene({
    triggerElement: '.lang-logo2',
    reverse: false
})
    .setClassToggle('.lang-logo2', 'fade-in')
    .addTo(controller);


//////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

var langLogo = new ScrollMagic.Scene({
    triggerElement: '.lang-logo3',
    reverse: false
})
    .setClassToggle('.lang-logo3', 'fade-in')
    .addTo(controller);

//////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

var shape = new ScrollMagic.Scene({
    triggerElement: '.shape',
    triggerHook: 'onStart',
    reverse: false
})
    .setClassToggle('.shape', 'fade-in')
    .addTo(controller);


//////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

var myInfo = new ScrollMagic.Scene({
    triggerElement: '.my-info-h1',
    reverse: false
})
    .setClassToggle('.my-info-h1', 'fade-in')
    .addTo(controller);

//////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

var myInfo = new ScrollMagic.Scene({
    triggerElement: '.my-info-p',
    reverse: false
})
    .setClassToggle('.my-info-p', 'fade-in')
    .addTo(controller);