const addToCart = document.querySelectorAll('.add__delete')

export function addProduct() {
    addToCart.forEach(cart => {
        cart.addEventListener('click', function () {
            cart.classList.toggle('icon-property-plus')
            cart.classList.toggle('icon-times')
        })
    })
}