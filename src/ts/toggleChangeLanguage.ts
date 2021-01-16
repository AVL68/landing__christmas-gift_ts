export const toggleChangeLanguage = (): void => {
    const languageButton: HTMLElement = document.querySelector('.change-language')
// Activate / deactivate the theme manually with the button

    languageButton.addEventListener('click', (): void => {
        let currentLocation: string = '../en/en.html'

        if (languageButton.innerText == 'Ru') {
            currentLocation = '../ru/ru.html'
        }
        window.location.href = currentLocation

        // // Add or remove the dark / icon theme
        // document.body.classList.toggle(darkTheme)
        // themeButton.classList.toggle(iconTheme)
        // // We save the theme and the current icon that the user chose
        // localStorage.setItem('selected-theme', getCurrentTheme())
        // localStorage.setItem('selected-icon', getCurrentIcon())
    })
}
