const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);



const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    if(window.innerWidth > 900 && scrollPos < 1300) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return 
    } else if (window.innerWidth > 900 && scrollPos < 2200) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 900 && scrollPos < 3000) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
}

if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
}

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)


var name = document.getElementById("nm").value;
var phone = document.getElementById("phn").value;
var email = document.getElementById("em").value;
var quantity = document.getElementById("quan").value;


var names = localStorage.setItem("name", name);
var phones = localStorage.setItem("phone", phone);
var emails = localStorage.setItem("email", email);
var quantitys = localStorage.setItem("quantity", quantity);