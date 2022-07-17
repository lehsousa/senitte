//Barra menu

const header = document.querySelector('.navbar')
const imgLogoFull = document.querySelector('.img-logo')
const colorLogo = document.querySelector('.txt-logo')
const imgLogoWhite = document.querySelector('.img-logo')
const colorLogoWhite = document.querySelector('.txt-logo')

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
    if (window.scrollY > 0) {
        imgLogoFull.src = '/img/logo.png'
        colorLogo.style.color = '#EF8300'
    } else {
        imgLogoWhite.src = '/img/logo-white.png'
        colorLogoWhite.style.color = 'white'
    }
})

//Revel

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
.banner .text-banner, .banner .img-banner, .services h1, .services .icons .content-icon,
.about .bg-about, .about .text-about h1, .about .text-about p, .paralax .paralax-content,
.cards .row .imagem, .perguntas, .content-footer .logo, .content-footer .icons-footer

`, {
        interval: 150
    }
)

// Perguntas

const accordion = document.getElementsByClassName('contentBx')
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

//menu mobile
const menu = document.querySelector('.navbar')
const menuMobile = document.querySelector('.menu-mobile')
const linksMenu1 = document.querySelector('.menu-txt-1')
const linksMenu2 = document.querySelector('.menu-txt-2')
const linksMenu3 = document.querySelector('.menu-txt-3')
const linksMenu4 = document.querySelector('.menu-txt-4')
const linksMenu5 = document.querySelector('.menu-txt-5')

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no' // IE
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes' // IE
}

menuMobile.onclick = function() {
    if (menu.classList.toggle('active')) {
        unloadScrollBars()
    } else {
        reloadScrollBars()
    }
}

linksMenu1.onclick = function() {
    menu.classList.remove('active')
    reloadScrollBars()
}
linksMenu2.onclick = function() {
    menu.classList.remove('active')
    reloadScrollBars()
}
linksMenu3.onclick = function() {
    menu.classList.remove('active')
    reloadScrollBars()
}
linksMenu4.onclick = function() {
    menu.classList.remove('active')
    reloadScrollBars()
}
linksMenu5.onclick = function() {
    menu.classList.remove('active')
    reloadScrollBars()
}