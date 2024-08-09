$(document).ready(function() {
    $('.menu').click(function() {
        $('.menu').toggleClass('active')
        $('.nav-bar').toggleClass('open')
        $('.flex').toggleClass('effect')
    })
})

$(document).ready(function() {
    $('.nav-link').click(function() {
        $('.menu').removeClass('active')
        $('.nav-bar').removeClass('open')
        $('.flex').removeClass('effect')
    })
})

$(document).ready(function() {
    $('main').click(function() {
        $('.menu').removeClass('active')
        $('.nav-bar').removeClass('open')
        $('.flex').removeClass('effect')
    })
})

$(document).ready(function(){
    $('.login-btn').click(function(){
        $('.box').css('margin-top', 100)
    })
})

$(document).ready(function(){
    $('.fa-times').click(function(){
        $('.box').css('margin-top', -1000)
    })
})

$(document).ready(function(){
    $('.create').click(function(){
        $('#box0').css('display', 'none')
        $('#box1').css('display', 'block')
    })
})

$(document).ready(function(){
    $('.connect').click(function(){
        $('#box0').css('display', 'block')
        $('#box1').css('display', 'none')
    })
})
