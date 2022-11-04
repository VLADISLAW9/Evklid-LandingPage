document.addEventListener('DOMContentLoaded', function () {
    // OPEN MENU
    document.querySelector("#burger").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active")
    })
    // CLOSE MENU
    document.querySelector("#close").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active")
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})