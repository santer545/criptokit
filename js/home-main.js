$(function() {
    carousels('#js-reviews');
    carousels('#js-news');
    selectpicker();
});

function carousels(element) {
    var swiper = new Swiper(element, {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function selectpicker() {
    $('select').selectric();
}