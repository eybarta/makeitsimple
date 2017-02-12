import $ from 'jquery'
import _ from 'lodash'
import inView from 'in-view'

var $header, $desktop, mintimer, maxtimer;

export function initScrollNav() {
    $header = $('header');
    $desktop = $(window).width()>768;
    !$desktop ? deviceMinimize() : $header.attr('class', '')
    let sections = ['top', 'why', 'make', 'faq', 'awards', 'contact']
    let $links = $("header .nav a");

    _.each(sections, section => {
        inView.threshold(0.5);
        inView(`#${section}`).on('enter', el => {
            $links.removeClass('active')
            .filter(`[href$=${section}]`).addClass('active');
        })
    })
    $links.on('click touchstart', function(e) {
        if ($('body').hasClass('root')) {
            e.preventDefault();
            if ($(window).width()>767) {
                $(window).off('scroll')
            }
            
            let anchor = $(this.getAttribute('href'));
            if (anchor.length>0) {
                $('html,body').animate({
                    scrollTop: $(anchor).offset().top
                }, 400, function() {
                    setTimeout(function() {
                        scrollCheck();
                    },50)
                })
            }
        }
            
    })

    scrollCheck();

    $(window).on('resize', scrollCheck);
}



function scrollCheck() {
    $desktop = $(window).width()>768;
    $(window).off('scroll').on('scroll', function() {
        if ($(window).scrollTop()<20 && $header.hasClass('hamburger')) {
            if ($desktop) maximizeMenu();
            $('#top').removeClass('playoverlay');
        } 
        else if ($(window).scrollTop()>20) {
            if (!$header.hasClass('hamburger')) minimizeMenu();
            $('#top').addClass('playoverlay');
        }
    })
    clearTimers();
    if (!$desktop) {
        deviceMinimize();
    }
    else {
        $header.attr('class', '');
    }
}

function clearTimers() {
    clearTimeout(maxtimer);
    clearTimeout(mintimer);
}
// Minimize and Maximize Menu
function minimizeMenu(e) {
    preventStop(e)
    clearTimers();
    !$desktop ? deviceMinimize() : desktopMinimize();
}
function maximizeMenu(e) {
    preventStop(e)
    clearTimers();
    !$desktop ? deviceMaximize() : desktopMaximize();
}

// Menu Min/Max for DEVICES (Tablet, Smartphones)
function deviceMaximize() {
    maxtimer = setTimeout(function() {
        $header.off('click')
            .on('click', minimizeMenu)
            .removeClass("hamburger")
            .addClass('seed');
            setTimeout(function() {
                $header.addClass('maxed');
            },200)
    }, 100)

}
function deviceMinimize() {
    mintimer = setTimeout(function() {
        $header.off('click')
            .on('click', maximizeMenu)
            .removeClass('maxed');
            setTimeout(function() {
                $header.removeClass('seed')
                $header.addClass("hamburger")   
                $header.addClass('loaded')                 
            },400)
    }, 100)
}

// Menu Min/Max for DESKTOP
function desktopMaximize() {
    $header.off()
    $header.removeClass('placed')
    maxtimer = setTimeout(function() {
        $header.removeClass("hamburger")
        setTimeout(function() {
            $header.removeClass("animate")
            
        },200)
    },400)
}

function desktopMinimize() {
    $header.addClass('animate');
    mintimer = setTimeout(function() {
        $header.addClass("hamburger")
        setTimeout(function() {
            $header
                .on('click', maximizeMenu)
                .addClass("placed");
        },400)
    },200)
}

function preventStop(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
}