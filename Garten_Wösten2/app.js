const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')
//Mobile 
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const planMenu = document.querySelector('#plan-page')
    const sponsorMenu = document.querySelector('#sponsor-page')
    const galleryMenu = document.querySelector('#gallery-page')
    let scrollPos = window.scrollY
     
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        sponsorMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        sponsorMenu.classList.add('highlight')
        planMenu.classList.remove('highlight')
        return
    }
}