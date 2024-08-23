$(function(){
    // index.html

    function fadeAnimeUp() {

        $('.fadeUpTrigger').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
            }
        });
    }
    $(window).scroll(function(){
        fadeAnimeUp();
    });

    function fadeAnimeRight(){
        $('.fadeRightTrigger').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');
            }
        });
    }
    $(window).scroll(function(){
        fadeAnimeRight();
    });

    // lp.html
    $('.lp-img').slick({
        autoplay:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        prevArrow:'<div class="slick-prev"></div>',
        nextArrow:'<div class="slick-next"></div>',

        responsive: [
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    })

    if(window.matchMedia('(max-width:600px)').matches) {
        $('#js-hamburger-menu,.navigation-link').on('click',function() {
            $('.navigation').slideToggle(500);
            $('.hamburger-menu').toggleClass('hamburger-menu--open');
        })
    }
})
