const $ = require('jquery/dist/jquery.min.js')

$(window).scroll(function() {
    const y = $(this).scrollTop()
    if (y > 50) {
        $('#menu').addClass('menu-scroll').removeClass('menu')
        $('#menutoogle').addClass('puxabaixo').removeClass('puxacima')
    } else {
        $('#menu').removeClass('menu-scroll').addClass('menu')
        $('#menutoogle').addClass('puxacima').removeClass('puxabaixo')
    }
})