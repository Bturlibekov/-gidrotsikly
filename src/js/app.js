// import * as flsFunctions from "./modules/functions.js"
// import { customSwiper } from "./libs/swiper.js"
// import { toggle } from "./libs/navToggle.js"
// import { addProduct } from "./libs/addProducts.js"
// import { fixedHeader } from "./libs/headerFixed.js"
// import { filter } from "./libs/filter.js"
// import { tabs } from "./libs/tabs.js"
// import Swiper from "swiper"
// import { modalWindow } from './libs/modal.js'
import { rangeInit } from "./libs/range-slider.js"
// flsFunctions.isWebP()
// customSwiper()
// toggle()
// addProduct()
// fixedHeader()
// filter()
// tabs()
// modalWindow()
rangeInit()

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // autoPlay: true,
    speed: 500,

    autoplay: {
        delay: 1500,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

const popularSwiper = new Swiper(".products__container", {
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },

        580: {
            slidesPerView: 2,
        },

        320: {
            slidesPerView: 1,
        },
    }
})

// ==================================
const navToggle = document.querySelector('.nav-toggle')
const headerMenu = document.querySelector('.header__menu')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav-toggle-times')
    headerMenu.classList.toggle('menu-active')
    document.body.classList.toggle('__block')
})



// ==========================================================