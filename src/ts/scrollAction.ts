export const activeLink = (): void => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach((current: HTMLElement): void => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }

    window.addEventListener('scroll', scrollActive)
}


export const changeBackgroundHeader = (): void => {

    function scrollHeader(): void {
        const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }

    window.addEventListener('scroll', scrollHeader)
}

export const showScrollTop = (): void => {

    function scrollTop(): void {
        const scrollTop = document.getElementById('scroll-top')
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }

    window.addEventListener('scroll', scrollTop)
}