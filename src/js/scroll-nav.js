import $ from 'jquery'
import _ from 'lodash'
import inView from 'in-view'

var $header, $toggle, $desktop, mintimer, maxtimer;

export function initScrollNav() {
    $header = $('header');
    $toggle = $('#toggle');
    $desktop = $(window).width()>768;
    // !$desktop ? deviceMinimize() : $header.attr('class', 'maximized')
    let sections = ['top', 'why', 'make', 'faq', 'awards', 'contact']
    let $links = $("header .nav a");

    _.each(sections, section => {
        inView.threshold(0.2);
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
                // deviceMinimize();
            }
            if ($(window).width()>767) {
                $(window).off('scroll')
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

    $(window).on('resize', initMenu);
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
    $desktop = $(window).width()>768;
    clearTimers();

    $(window).off('scroll').on('scroll', scrollCheck);
    
    scrollCheck();
}
function scrollCheck() {
    if ($(window).scrollTop()<20 && $header.hasClass('hamburger')) {
        if ($("#top").hasClass('play')) {
            $header.hide();
        }
        else if ($desktop) maximizeMenu();
        $('#top').removeClass('playoverlay');
        

    } 
    else if ($(window).scrollTop()>20  && !$header.hasClass('hamburger')) {
        $header.show();
        minimizeMenu();
        $('#top').addClass('playoverlay');
    }
}
function clearTimers() {
    clearTimeout(maxtimer);
    clearTimeout(mintimer);
}
// Minimize and Maximize Menu
function minimizeMenu(e) {
    if (e && !/a/i.test(e.target.tagName)) {
        preventStop(e)
    }
    clearTimers();
    // !$desktop ? deviceMinimize() : desktopMinimize();
    desktopMinimize();
}
function maximizeMenu(e) {
    preventStop(e)
    clearTimers();
    // !$desktop ? deviceMaximize() : desktopMaximize();
    desktopMaximize();
}

// Menu Min/Max for DEVICES (Tablet, Smartphones)
function deviceMaximize() {
    $header
        .off('click')
        .on('click', minimizeMenu)
        .addClass('seed');
        setTimeout(function() {
            $header.removeClass("hamburger").addClass('maxed');
        },200)
}
function deviceMinimize() {
    $header.off('click')
    .on('click', maximizeMenu)
    .removeClass('maxed');
    setTimeout(function() {
        $header.removeClass('seed')
        $header.addClass("hamburger")   
        $header.addClass('loaded')                 
    },300)
}

// Menu Min/Max for DESKTOP
function desktopMaximize() {
    console.log('maximize');
    $header
        .off()
        .removeClass('placed')
        
        setTimeout(function() {
            $header.removeClass("hamburger")
                    
                
                setTimeout(function() {
                    $header.removeClass("animate")
                    $header.attr('class', 'maximized')
                }, 400)
                
        },400)
}

function desktopMinimize() {
    console.log('minimize');
    $header
        .removeClass('maximized')
        .addClass('animate')
                .addClass("hamburger");
        setTimeout(function() {
                
                setTimeout(function() {
                    $header
                        .on('click', maximizeMenu)
                        .addClass("placed");
                },400)
        },50)
        
}

function preventStop(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
}