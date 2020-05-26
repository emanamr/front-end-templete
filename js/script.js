//global $
$(function(){
    'use strict'
    // change header height
    var myheader = $('.header');
    myheader.height($(window).height());
    $(window).resize(function(){
        myheader.height($(window).height());
        //bx-slider height(padding-top)
        $('.slider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });    
    });
    // links active
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    }); 

    //bx-slider
   
    $('.slider').bxSlider({pager:false});
    //bx-slider height(padding-top)
    $('.slider').each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) /2);
    });
   
//smooth scroll
    $('.links li a').click(function(){
        $('html ,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000);
    });

// auto slider
(function autoSlider(){
    $('.slidert .active').each(function(){
        if (!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();
            });
        }
        else{
            $(this).delay(3000).fadeOut(1000, function () {
                $(this).removeClass('active');
                $('.slidert div').eq(0).addClass('active').fadeIn();
                autoSlider();
        });
    };
});
}());


    $('.project ul li').click(function () {
        $(this).addClass('select').siblings().removeClass('select');
        //this code make filter such as mixitup
        /*var mycont = $('.select').text();
        console.log(mycont);
        switch (mycont) {
            case 'mobile':
                $('.works .box').fadeOut(1);
                $('.works .box').filter(".works .mobile").fadeIn(1);
                break;
            case 'video':
                $('.works .box').fadeOut();
                $('.works .box').filter(".works .video").fadeIn();
                break;
            case 'coffee':
                $('.works .box').fadeOut(1);
                $('.works .box').filter(".works .coffee").fadeIn(1);
                break;
            case 'fashion':
                $('.works .box').fadeOut();
                $('.works .box').filter(".works .fashion").fadeIn();
                break;
            default:
                $('.works .box').fadeIn();
        }*/
        
    });  
    var mixer = mixitup('#container');  
    $("html").niceScroll();
});


