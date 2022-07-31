const modalOverlay = document.querySelector('.modal__overlay')
const close = document.querySelector('.modal__buttons-yes')


export function modalWindow() {
    window.addEventListener('load', function () {
        this.setTimeout(function () {
            modalOverlay.classList.add('open')
        }, 5000)
    })

    close.addEventListener('click', function () {
        modalOverlay.classList.remove('open')
    })
}