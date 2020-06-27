const $ = require('jquery/dist/jquery.min.js')

$(window).scroll(function() {
    const y = $(this).scrollTop()
    if (y > 50) {
        $('#menu').addClass('menu-scroll').removeClass('menu')
    } else {
        $('#menu').removeClass('menu-scroll').addClass('menu')
    }
})


