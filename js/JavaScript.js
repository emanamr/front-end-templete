/*global $ alert console*/


$(function () {
    'use strict';
// console.log("hello");
//scroll
    $('html').niceScroll({
        cursorcolor: 'darkorange',
        cursorwidth: 5,
        cursorborder: '1px solid darkorange'});
//header height and sign in form height

   var hig= $('.header').height($(window).height());
    $(".header .intro").css("margin-top", (hig - $(".header .intro").height()) / 2);
    var hig1 = $('.signin').height($(window).height());
    $(".signin .form").css("margin-top", (hig1 - $(".signin .form").height()) / 2);
//resize window
    $(window).resize(function () {
        var whig =$('.header').height($(window).height());
        $(".header .intro").css("margin-top", (whig - $(".header .intro").height()) / 2);
        var whig1 = $('.signin').height($(window).height());
        $(".signin .form").css("margin-top", (whig1 - $(".signin .form").height()) / 2);
    })
    

//arrow down
    $(".header .arrow i").click(function () {
        $('html ,body').animate({
            scrollTop: $('#feature').offset().top
        }, 1000);
    });
//move to our work   
    $(".header .intro .works").click(function () {
        $('html ,body').animate({
            scrollTop: $('.ourwork').offset().top
        }, 1000);
    });
//show more
    $(".ourwork .show").click(function () {
        $(".ourwork .hide").fadeIn(1000);
        $(".ourwork .hide1").show();
        $(this).hide();
    });
//show less
    $(".ourwork .hide1").click(function () {
        $(".ourwork .hide").hide();
        $(".ourwork .show").show();
        $(this).hide();
    });

//testmonials slid
    
    $(".testmon .left").click(function () {
        if (!$(".testmon .slide").is(':last-child')) {
            $(".testmon .slide").hide();
            $(".testmon .slide").next().show();
            $(".testmon .slide").removeClass('slide').next().addClass('slide');
        }
        else {
           /* $(this).hide();*/
            $(".testmon .slide").hide();
            $(".testmon .slide").removeClass('slide');
            $(".testmon .test").eq(0).addClass('slide');
            $(".testmon .test").eq(0).show();
        }
        
    });

    $(".testmon .right").click(function () {
        if (!$(".testmon .slide").is(':first-child')) {
            $(".testmon .slide").hide();
            $(".testmon .slide").prev().show();
            $(".testmon .slide").removeClass('slide').prev().addClass('slide');
        }
        else {
            $(".testmon .slide").hide();
            $(".testmon .slide").removeClass('slide');
            var n = $(".testmon .test").length;
            $(".testmon .test").eq(n-1).addClass('slide');
            $(".testmon .test").eq(n-1).show();
        }

    });


    //move to contact

    $(".header .intro .hire").click(function () {
        $('html ,body').animate({
            scrollTop: $('.ourteam').offset().top
        }, 1000);
    });


    $(".header .nav ul .contactus").click(function () {
        $('html ,body').animate({
            scrollTop: $('.contact').offset().top
        }, 1000);
    });

    $("#bar").click(function () {
        $("#list").slideToggle(500);
    });



    //sign in form

    $(".header .nav ul .sign").click(function () {
        $(".signin").show();
    });
    $(".signin .close").click(function () {
        $('.signin').hide();
    });



});