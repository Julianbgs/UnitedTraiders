function elemAnimate() {
    $('.main-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('animate')) {
            $(this).addClass('animate')
        }
    });
    $('.right-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('r-animate')) {
            $(this).addClass('r-animate')
        }
    });
    $('.left-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('l-animate')) {
            $(this).addClass('l-animate')
        }
    });
    $('.stop-animate').each(function () {
        if($(this).offset().top < $(document).scrollTop() + $(window).height() - 50 && !$(this).hasClass('animate-stop')) {
            $(this).addClass('animate-stop')
        }
    })
}

$(document).ready(function () {

    //mobile menu

    $(document).on('click', '#header-trigger', function (event) {
        event.preventDefault();
        var menu = $('.header__menu');
        if ($(this).hasClass('js-trigger-active')) {
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });

    // close script
    $(window).scroll(function () {
        elemAnimate();
    })
});