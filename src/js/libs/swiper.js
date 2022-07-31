export function customSwiper() {
    new Swiper('.swiper-container', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynimcBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    })
}