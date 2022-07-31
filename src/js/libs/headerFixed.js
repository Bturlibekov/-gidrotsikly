const header = document.querySelector('.header')

export function fixedHeader() {
    window.addEventListener('scroll', function () {
        checkScroll()
    });

    window.addEventListener('DOMContentLoaded', function () {
        checkScroll()
    })

    function checkScroll() {
        const scrollPos = window.scrollY

        if (scrollPos > 0) {
            header.classList.add('fixed')
            document.body.classList.add('padding__header')
        } else {
            header.classList.remove('fixed')
            document.body.classList.remove('padding__header')
        }
    }
}