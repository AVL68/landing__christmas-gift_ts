import './styles/scss.scss'
import {removeMenuMobile, showMenu} from './ts/menuAction'
import ScrollReveal from 'scrollreveal'
import {activeLink, changeBackgroundHeader, showScrollTop} from "./ts/scrollAction";
import {toggleDarkIightTheme} from "./ts/toggleDarkIightTheme";
import {toggleChangeLanguage} from "./ts/toggleChangeLanguage";

showMenu('nav-toggle', 'nav-menu')

removeMenuMobile()

activeLink()

changeBackgroundHeader()

showScrollTop()

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