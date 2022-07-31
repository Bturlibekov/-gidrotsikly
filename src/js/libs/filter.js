const filterBtn = document.querySelectorAll('.filter__list-btn')
const filterList = document.querySelectorAll('.filter__list')

export function filter() {
    filterBtn.forEach(btn => {
        filterList.forEach(list => {
            btn.addEventListener('click', function () {
                if (btn.dataset.filter === list.dataset.filter) {
                    btn.classList.toggle('__active')
                    list.classList.toggle('__active')
                }
            })
        })
    })
}