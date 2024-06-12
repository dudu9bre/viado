$(document).ready(function () {
    $('.cont1').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow')
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow')
    })
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 1500) {
        let iframe = $('<iframe class="iframe" src="flores.html" frameborder="0"></iframe>')
        $('body').append(iframe)
        $(window).off('scroll')
    }
})