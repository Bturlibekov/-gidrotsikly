const tabItem = document.querySelectorAll('.servis__list-item')

export function tabs() {
    tabItem.forEach(item => {
        item.addEventListener('click', function () {
            tabItem.forEach((item) => item.classList.remove('__active'))
            item.classList.add('__active')
        })
    })
}