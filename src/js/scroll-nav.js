import $ from 'jquery'
import _ from 'lodash'
import inView from 'in-view'

var $header, $toggle, $desktop, mintimer, maxtimer, scrollpauser = 0;

export function initScrollNav() {
    $header = $('header');
    $toggle = $('#toggle');
    $desktop = $(window).width()>1025;
    let sections = ['top', 'why', 'make', 'faq', 'awards', 'contact']
    let $links = $("header .nav a");

    _.each(sections, section => {
        inView.threshold(0.2);
        inView.offset({
            top: 20,
            bottom: 150,
        });
        inView(`#${section}`).on('enter', el => {
            $links.removeClass('active')
            .filter(`[href$=${section}]`).addClass('active');
        })
    })
    $links.on('click touchstart', function(e) {
        if ($('body').hasClass('root')) {
            e.preventDefault();
            if (!$desktop) {
                console.log('MINIMIZE');
                minimizeMenu();
            }
            if ($(window).width()>1025) {
                $(window).off('scroll')
                $("#top").removeClass('stick');
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
    if (/max/g.test($header.attr('class'))) {
        minimizeMenu();
    }
    else {
        maximizeMenu()
    }
}
function initMenu() {
    console.log("INIT MENU");
    $desktop = $(window).width()>1025;
    clearTimers();
    $(window).off('scroll').on('scroll', scrollCheck);
    scrollCheck();
}
function scrollCheck(e) {
    if ($(window).scrollTop()<20 && $header.hasClass('hamburger')) {
        if ($desktop) {
            $("#top").addClass('stick');
        }
        if ($("#top").hasClass('play')) {
            $header.hide();
        }
        else if ($desktop) {
             maximizeMenu();
        }
        $('#top').removeClass('playoverlay');
    } 
    else if ($(window).scrollTop()>20) {
        if ( !$header.hasClass('hamburger')) {
            minimizeMenu();
        }
        $header.show();
        $('#top').addClass('playoverlay');
    }
    else if (!$desktop) {
        minimizeMenu();
    }

    if ($(window).scrollTop()>400) {
        $("#top").removeClass('stick')
    }
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