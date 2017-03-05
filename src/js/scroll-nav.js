import $ from 'jquery'
import _ from 'lodash'
import {sectionsInView} from './sections-inview'
import { closeIntroVideo } from './intro-video'
import { _introAnimEnded, introAnimToEnd, introAnimEl, introAnimLoop, introAnimBlurAbove, introAnimBlurBehind } from './intro-animation'
var $links, $toggle, $desktop, introAnimation, mintimer, maxtimer, animtimer, scrollstart = true, scrollCount = 0;

var header = {
    el: null,
    status: 'maximized'   // maximized, minimized, maximizing, minimizing

}
export function initScrollNav() {
    header.el = $('header');
    $toggle = $('#toggle');
    $desktop = $(window).width()>1025;
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
    (/max/g.test(header.el.attr('class'))) 
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
    
    console.log('scroll top  >> ', scrolltop);
    if (scrolltop<5) {
        scrollstart = true;
        $("#intro").addClass('stick');
        if ($("#intro").hasClass('play')) {
            header.el.hide();
        }
        else {
            header.el.hasClass('hamburger') && maximizeMenu();
        }

        console.log(">> ", _introAnimEnded);
        
        if (_introAnimEnded && scrollCount>2) {
            introAnimToEnd();
        }
        animtimer = setTimeout(function() {
            introAnimBlurBehind();
        }, 200)
        $('#intro').removeClass('playoverlay');
    } 
    else if (scrolltop>5) {
        if ( !header.el.hasClass('hamburger')) {
            minimizeMenu();
        }
        if (!$("#intro").hasClass('play')) {
            header.el.show();
        } else {
            header.el.hide();
        }
        if (scrollstart) {
            $('#intro').addClass('playoverlay');
            $('#playintro img').removeClass('toplay');

            console.log('play blur..', scrolltop);
            clearTimeout(animtimer);
            introAnimBlurAbove();
            introAnimLoop();
            
        }
        else if (!$('#intro').hasClass('playoverlay')) {
             $('#playintro img').addClass('toplay');
        }
        if (scrolltop<299) {
            $("#intro").addClass('stick');
        }
        else {
            $("#intro").removeClass('stick').removeClass('playoverlay')
            closeIntroVideo();
            if ( !header.el.hasClass('hamburger')) {
                minimizeMenu();
            }
            header.el.show();
            if (!!introAnimEl) {
                introAnimToEnd();
                setTimeout(function() {
                    introAnimBlurBehind();
                }, 500)
                
                
            }
        }
        scrollstart = false;
    }    
    else if (!$desktop) {
        minimizeMenu();
    }
    if (scrolltop>500) {
        $('#intro').removeClass('playoverlay');
    }
    scrollCount++;
    $("#intro").css('opacity', 1);
}
// Minimize and Maximize Menu
function minimizeMenu(e) {
    if (header.status!='minimizing' || header.status!= 'minimized') {
        header.status = 'minimizing';
        if (e && !/a/i.test(e.target.tagName)) {
            preventStop(e)
        }
        clearTimers();
        header.el
            .addClass('animate')
            .removeClass('maximized')
            .addClass('seed')
        mintimer = setTimeout(function() {
            header.el.addClass("hamburger");
            mintimer = setTimeout(function() {
                header.el
                    .on('click', maximizeMenu)
                    .removeClass('seed')
                    .addClass("placed");
                    header.status = 'minimized';
            },300)
        },400)
    }
}
function maximizeMenu(e) {
    if (header.status!='maximizing' || header.status!= 'maximized') {
        header.status = 'maximizing';
        preventStop(e)
        clearTimers();
        header.el
            .off('click')
            .removeClass('placed')
        maxtimer = setTimeout(function() {
            header.el.removeClass("hamburger")
            maxtimer = setTimeout(function() {
                    header.el.removeClass("animate")
                    .removeClass('seed')
                    header.el.attr('class', 'maximized')
                    header.status = 'maximized';
                }, 400)
                
        },400)
    }
}


function clearTimers(who) {
    clearTimeout(maxtimer);
    clearTimeout(mintimer);
}
function preventStop(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
}