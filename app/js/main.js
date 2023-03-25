$(function(){
    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header__btn-menu').on('click',function(){
        $('.menu').toggleClass('menu--open');
    });
    $('.rightside-menu__close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    if($(window).width()<651){
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'))
    }

    $('.top__slider').slick({
        dots:true,
        arrows:false,
        // fade:true,
        autoplay:true,
    });
})  