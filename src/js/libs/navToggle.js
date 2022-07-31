const navToggle = document.querySelector('#navToggle')
const closeMenu = document.querySelector('#closeMenu')
const menuBlock = document.querySelector('#menuBlock')
const header = document.querySelector('.header')

export function toggle() {
    navToggle.addEventListener('click', menuBlockActive)

    closeMenu.addEventListener('click', menuBlockClose)

    function menuBlockActive() {
        menuBlock.classList.add('__active')
        document.body.classList.add('body__nav')
        header.classList.add('lock__padding')
    }

    function menuBlockClose() {
        menuBlock.classList.remove('__active')
        document.body.classList.remove('body__nav')
        header.classList.remove('lock__padding')
    }

    window.addEventListener('click', function (event) {
        if (event.target === menuBlock) {
            menuBlockClose()
        }
    })
}