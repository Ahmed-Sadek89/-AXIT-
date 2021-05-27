//window
$(window).on({
    load:function(){
        var sc=$(window).scrollTop();
        if(sc<200)
        {
            $('.up').fadeOut(1000)
        }
        else
        {
            $('.up').fadeIn(1000)
        }
        $('.overlay').delay(2000).fadeOut(1000,function(){
            $('body').css('overflow','scroll');
            $('.overlay').remove()
        })
    },
    scroll:function(){
        var sc=$(window).scrollTop();
        if(sc<200)
        {
            $('.up').fadeOut(1000)
        }
        else
        {
            $('.up').fadeIn(1000)
        }
    }
})
$(document).ready(function(){
    AOS.init({
        duration:800,
        once: true,
    });
    
    //about1
    $('#1').on({
        click:function(){
            $('#1').addClass('tab-active').siblings().removeClass('tab-active')
        }
    })
    $('#2').on({
        click:function(){
            $('#2').addClass('tab-active').siblings().removeClass('tab-active')
        }
    })
    $('#3').on({
        click:function(){
            $('#3').addClass('tab-active').siblings().removeClass('tab-active')
        }
    })
    //about1

    //up
    $('.up').on({
        click:function(){
            $('html,body').animate({
                scrollTop:'0px'
            },1000,'easeInOutExpo')
        }
    })
    //up

    
})