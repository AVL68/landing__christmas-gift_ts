export const toggleChangeLanguage = (): void => {
    const languageButton: HTMLElement = document.querySelector('.change-language')

    languageButton.addEventListener('click', (): void => {
        let currentLocation: string = '../en/en.html'

        if (languageButton.innerText == 'Ru') {
            currentLocation = '../ru/ru.html'
        }
        window.location.href = currentLocation

    })
}
