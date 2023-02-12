var navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
var darkmode = document.getElementById("theme-button")
if(darkmode){
    darkmode.addEventListener("click", function(){
    classList.co("dark")
})
}

var navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('.section'),
    links = document.querySelectorAll('.nav__item'),
    activeLink = li => {
        links.forEach(item => item.classList.remove('active'));
        li.classList.add('active');
    };
links.forEach(item => item.addEventListener('click', () => activeLink(item)));
window.onscroll = () => sections.forEach(sec => {
    const top = window.scrollY,
        offset = sec.offsetTop,
        height = sec.offsetHeight,
        id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) activeLink(document.querySelector(`[href='#${id}']`).parentElement);
});




     