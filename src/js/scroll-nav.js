import $ from 'jquery'
import _ from 'lodash'
import {sectionsInView} from './sections-inview'
var $header, $links, $toggle, $desktop, introAnimation, mintimer, maxtimer, firstScroll = true;

export function initScrollNav() {
    $header = $('header');
    $toggle = $('#toggle');
    $desktop = $(window).width()>1025;
    introAnimation = document.getElementById('vid');
    $links = $("header .nav a");

    sectionsInView()
    bindMenuEvents()
    
}

function bindMenuEvents() {
    $links.on('click touchstart', function(e) {
        if ($('body').hasClass('root')) {
            e.preventDefault();
            if (!$desktop) {
                console.log('MINIMIZE');
                minimizeMenu();
            }
            if ($(window).width()>1025) {
                $(window).off('scroll')
                $("#intro").removeClass('stick');
            }
            
            let anchor = $(this.getAttribute('href'));
            if (anchor.length>0) {
                $('html,body').animate({
                    scrollTop: $(anchor).offset().top
                }, 400, function() {
                    setTimeout(function() {
                        initMenu();
                    },50)
                })
            }
        }
            
    })
    $toggle.on('click', toggleMenu);
    initMenu();

    $(window).on('resize.menu', initMenu);
}

function toggleMenu() {
    (/max/g.test($header.attr('class'))) 
    ? minimizeMenu()
    : maximizeMenu()
}
function initMenu() {
    $desktop = $(window).width()>1025;
    clearTimers();
    $(window).off('scroll').on('scroll', scrollCheck);
    scrollCheck();
}
function scrollCheck(e) {
    let scrolltop = $(window).scrollTop();
    if (scrolltop<20) {
        $("#intro").addClass('stick');
        if ($("#intro").hasClass('play')) {
            $header.hide();
        }
        if (!!introAnimation && !firstScroll) {
            introAnimation.loop = false;
            introAnimation.currentTime = 14;
        }
        $header.hasClass('hamburger') && maximizeMenu();            
        $('#intro').removeClass('playoverlay');
    } 
    else if (scrolltop>20) {
        if ( !$header.hasClass('hamburger')) {
            minimizeMenu();
        }
        $header.show();
        $('#intro').addClass('playoverlay');
        if (scrolltop<300) {
            $("#intro").addClass('stick');
            if (!introAnimation.loop) {
                introAnimation.loop = true;
                introAnimation.play();
            }
        }
        else {
            $("#intro").removeClass('stick');
            if (!!introAnimation && !!introAnimation.loop) {
                introAnimation.loop = false;
                introAnimation.currentTime = 14;
            }
        }
    }
    
    
    else if (!$desktop) {
        minimizeMenu();
    }
    firstScroll = false;
    $("#intro").css('opacity', 1);
}
// Minimize and Maximize Menu
function minimizeMenu(e) {
    if (e && !/a/i.test(e.target.tagName)) {
        preventStop(e)
    }
    clearTimers();
    $header
        .addClass('animate')
        .removeClass('maximized')
        .addClass('seed')
        setTimeout(function() {
            $header.addClass("hamburger");
            setTimeout(function() {
                $header
                    .on('click', maximizeMenu)
                    .removeClass('seed')
                    .addClass("placed");
            },300)
        },400)
}
function maximizeMenu(e) {
    preventStop(e)
    clearTimers();
    $header
        .off('click')
        .removeClass('placed')
        setTimeout(function() {
            $header.removeClass("hamburger")
                setTimeout(function() {
                    $header.removeClass("animate")
                    .removeClass('seed')
                    $header.attr('class', 'maximized')
                }, 400)
                
        },400)
}


function clearTimers() {
    clearTimeout(maxtimer);
    clearTimeout(mintimer);
}
function preventStop(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
}