jQuery(function($) {
    'use strict';

    // var preloder = document.getElementById('#loader');

    // function screenLoad() {
    //     preloder.style.display = 'none';
    // }


    /* 1. Proloder */
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });



    $(function() {
        var navbar = $('.header-sticky');
        $(window).scroll(function() {
            if ($(window).scrollTop() <= 40) {
                navbar.removeClass('navbar-scroll');
            } else {
                navbar.addClass('navbar-scroll');
            }
        });
    });


    /*===== WOW  =====*/
    new WOW().init();

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

    // Scroll Up
    $('#back-top a').on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    /*===== LINK ACTIVE  =====*/
    const linkColor = document.querySelectorAll('#navigation li')

    function colorLink() {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    /*===== Scroll Auto Setect MENU  =====*/
    $('#navigation').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

    /*===== Tab  =====*/
    var tabs = document.querySelectorAll(".tabs ul li");
    var tab_wraps = document.querySelectorAll(".tab_wrap");

    tabs.forEach(function(tab, tab_index) {
        tab.addEventListener("click", function() {
            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            })
            tab.classList.add("active");

            tab_wraps.forEach(function(content, content_index) {
                if (content_index == tab_index) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            })

        })
    })

    // blog_slider
    $('.blog_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        arrows: false,
    });


    /*===== portfolio ACTIVE  =====*/
    const MyMenuLinkColor = document.querySelectorAll('.mix_itup_menu')

    function MyWorkMenuColorLink() {
        MyMenuLinkColor.forEach(l => l.classList.remove('nActive'))
        this.classList.add('nActive')
    }

    /*===== portfolio Mix It Up  =====*/
    var containerEl = document.querySelector('.gallery');

    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)'
        },
        load: {
            filter: 'none'
        }

    });

    containerEl.classList.add('mixitup-ready');

    mixer.show()
        .then(function() {

            mixer.configure({
                animation: {
                    effects: 'fade scale'
                }
            });
        });

    /*===== counter  =====*/
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Disable Right Click
    document.querySelector('body').addEventListener('contextmenu', disableRightClick);

    function disableRightClick(e) {
        e.preventDefault();
    }

    // Loding PopupWindow
    var id = '#dialog';

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

    //transition effect		
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);

    //transition effect
    $(id).fadeIn(2000);

    //if close button is clicked
    $('.window .close').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
    });

    //if mask is clicked
    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });

    //Cource Link  function
    if ($(window).width() < 991) {
        $('#our_course_link_class').addClass('someclass');
    } else {
        $('.someclass').click(function(event) {
            event.preventDefault();
        });
    }







});