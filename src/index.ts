import './styles/scss.scss'
import {removeMenuMobile, showMenu} from './ts/menuAction'
import ScrollReveal from 'scrollreveal'
import {activeLink} from "./ts/scrollAction";
import {toggleDarkIightTheme} from "./ts/toggleDarkIightTheme";
import {toggleChangeLanguage} from "./ts/toggleChangeLanguage";

showMenu('nav-toggle', 'nav-menu')

removeMenuMobile()

activeLink()


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(): void {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop(): void {
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

toggleDarkIightTheme()
toggleChangeLanguage()

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})