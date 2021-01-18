$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        infinite: false

    });

    $('select').styler();

    $('.header__menu-burger').on('click', function() {
        $('.header__menu ul').slideToggle();
    })
// карта появляется после тго как доскролили до этого элементы
    let news = $('.news');
    let newsTop = news.offset().top;
    $(window).bind('scroll', function(){
        let windowTop = $(this).scrollTop();
        if(windowTop > newsTop) {
            $('#footer__map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac78ccb2d9dcebbdb647985bd00f6bb1b7b7206d8dcef7456a02bfa2e581820d4&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>')
            $(window).unbind('scroll')
        }
    })
});



