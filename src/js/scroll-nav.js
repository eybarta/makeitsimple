import $ from 'jquery'
import _ from 'lodash'
import inView from 'in-view'

export function initScrollNav() {
    let sections = ['top', 'why', 'make', 'faq', 'awards', 'contact']
    let $links = $("header .nav a");
    _.each(sections, section => {
     
        inView.threshold(0.5);
        inView(`#${section}`).on('enter', el => {
            $links.removeClass('active')
            .filter(`[href$=${section}]`).addClass('active')
        })
    })
    $links.on('click touchstart', function(e) {
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
            
    })

    initBackgroundCheck();
    scrollCheck();
}


var $header, $desktop, mintimer, maxtimer;
function scrollCheck() {
    $header = $('header');
    $desktop = $(window).width()>768;
console.log(' $desktop ',  $desktop)
    $(window).off('scroll').on('scroll', function() {
        if ($(window).scrollTop()<80 && $header.hasClass('hamburger') && $desktop) {
            clearTimeout(mintimer);
            maximizeMenu()
        } 
        else if ($(window).scrollTop()>80 && !$header.hasClass('hamburger')) {
            clearTimeout(maxtimer);
            minimizeMenu()
        }
    })
    if (!$desktop) {
        minimizeMenu()
    }
}



function minimizeMenu() {
    $header.removeClass('maxed')
    $header.addClass('animate')
    mintimer = setTimeout(function() {
        $header.addClass("hamburger")
        setTimeout(function() {
            $header.addClass("placed")
            $header.on('click', maximizeMenu);
        },400)
    },200)
}

function maximizeMenu(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
    $header.off()
    $header.removeClass('placed')
    $header.addClass('maxed')
    maxtimer = setTimeout(function() {
        $header.removeClass("hamburger")
        setTimeout(function() {
            $header.removeClass("animate")
            
        },200)
    },400)
}

function initBackgroundCheck() {
    BackgroundCheck.init({
        targets: 'header'
    });
}