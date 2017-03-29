import $ from 'jquery'
import _ from 'lodash'
import {sectionsInView} from './sections-inview'
// import { closeIntroVideo } from './intro-video'
import { _introAnimEnded, introAnimToEnd, introAnimEl, introAnimLoop, introAnimBlurAbove, introAnimBlurBehind, introAnimRestart } from './intro-animation'
var $links, $toggle, introAnimation, mintimer, maxtimer, animtimer, scrollstart = true, homeclicked =false, scrollCount = 0;

var header = {
    el: null,
    status: 'maximized'   // maximized, minimized, maximizing, minimizing

}


export var $desktop;

export function initScrollNav() {
    header.el = $('header');
    $toggle = $('#toggle');
    $desktop = $(window).width()>1024;
    $links = $("header .nav a");
    if ($desktop) {
        $("header").addClass('maximized')
    }
    sectionsInView()
    bindMenuEvents()
    
}


// Bind events to Menu
function bindMenuEvents() {
    $links.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!$desktop) {
                minimizeMenu();
                document.getElementById('rest').style.display = 'block';
            }
            else {
                // $(window).off('scroll')
                // $("#intro").removeClass('stick');
            }
            let anchor = $(this.getAttribute('href'));
            if (anchor.length>0) {
                let callbacked = false;
                $('html,body').animate({
                    scrollTop: $(anchor).offset().top
                }, 600, function() {
                    if (!callbacked) {
                        setTimeout(function() {
                            if (!homeclicked) {
                                initMenu();
                            }
                            // console.log('end scroll animation, homeclicked=false');
                            homeclicked = false;
                        },50)
                        callbacked = true;
                    }
                })
                if (/top/gi.test(anchor.get(0).id)) {
                    // console.log('clicked Home');
                    homeclicked = true;
                    scrollCount = 0;
                    var event = new CustomEvent('restartIntroAnim');
                    var el = document.getElementById('intro');
                    el.dispatchEvent(event)
                    // introAnimRestart();
                }
            }
    })
    $toggle.on('click', toggleMenu);
    initMenu();

    if ($desktop) {
        $(window).on('resize.menu', initMenu);
    }
}

function toggleMenu() {
    (/max/g.test(header.el.attr('class'))) 
    ? minimizeMenu()
    : maximizeMenu()
}
function initMenu(e) {
    // alert('init menu')
    setTimeout(function() {
            $("header").css('visibility','visible');
    }, 1500)
    // console.log('initmenu > ', e);
    $desktop = $(window).width()>1024;
    clearTimers();
    
    if ($desktop) {
        $(window).off('scroll').on('scroll', scrollCheck);
        scrollCheck();
    } 
    else if (scrollstart || header.status != 'maximized') {
        minimizeMenu();        
        $("#intro").css('opacity', 1);
    }
    
}

function scrollCheck(e) {
    // console.log('scrolling.. check');
    
    handleMinMaxOnScroll();
    if ( $(window).width()>1024) {
        handleHeaderOnScroll();
        handleIntroAnimOnScroll();
        handleOnScrollSticky();
    }

    if (!homeclicked) {
        scrollCount++;
    }
    $("#intro").css('opacity', 1);
}

function handleHeaderOnScroll() {
    let scrolltop = $(window).scrollTop();
    if (scrolltop<5) {
        scrollstart = true;
        if ($("#intro").hasClass('play')) {
            header.el.hide();
        }
        $('#intro').removeClass('playoverlay');
        $('#playintro img').removeClass('toplay');
    } 
    else if (scrolltop>5) {
        if (!$("#intro").hasClass('play')) {
            header.el.show();
        } else {
            header.el.hide();
        }
        if (scrollstart) {
            $('#intro').addClass('playoverlay');
            $('#playintro img').removeClass('toplay');
            setTimeout(function() {
                scrollstart = false;
            }, 500)
        }
        else if (!$('#intro').hasClass('playoverlay')) {
             $('#playintro img').addClass('toplay');
        }
        if (scrolltop>499) {
            $("#intro").removeClass('stick').removeClass('playoverlay')
            // closeIntroVideo();
            header.el.show();
        }
        
        
    }
    if (scrolltop>500) {
        $('#intro').removeClass('playoverlay');
    }
}
function handleOnScrollSticky() {
    // let scrolltop = $(window).scrollTop();
    // if (scrolltop<499) {
    //     $("#intro").addClass('stick');
    // }
    // else {
    //     $("#intro").removeClass('stick')
    // }
}

function handleMinMaxOnScroll() {
    let scrolltop = $(window).scrollTop();
    if ($(window).width()>1024 && scrolltop<5 && !$("#intro").hasClass('play') && header.el.hasClass('hamburger') ) {
        maximizeMenu();
    }
    else if (scrolltop>5 && !header.el.hasClass('hamburger')) {
        minimizeMenu();
    }
}

function handleIntroAnimOnScroll() {
    let scrolltop = $(window).scrollTop();
    if (scrolltop<5) {
        if (_introAnimEnded && scrollCount>2) {
            introAnimToEnd();
        } else {
            introAnimBlurBehind();
        }
    }
    else if (scrolltop>499) {
        // console.log('introAnimToEnd')
        introAnimToEnd();                
    }
    else if (scrolltop>5 && scrollstart) {
        clearTimeout(animtimer);
        introAnimBlurAbove();
        introAnimLoop();
    }
    
}
// Minimize and Maximize Menu
function minimizeMenu(e) {
    if (header.status != 'minimized' && !homeclicked) {
        if (header.status != 'minimizing') {
            clearTimers();
        }
        header.status = 'minimizing';
        if (e && !/a/i.test(e.target.tagName)) {
            preventStop(e)
        }
        header.el
            .removeClass('maximized')
            .addClass('animate')
            mintimer = setTimeout(function() {
                header.el
                    .on('click', maximizeMenu)
                    .addClass("hamburger")
                    
                    
                    mintimer = setTimeout(function() {
                        
                                header.el.addClass("placed");
                                header.status = 'minimized';
                       
                    }, 500)
                    if (!$desktop) {
                        $(window).off('scroll').on('scroll', scrollCheck);
                    }
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
                    header.el.attr('class', 'maximized')
                    header.status = 'maximized';
                    if (!$desktop) {
                        $(window).off('scroll');
                    }
                }, 400)
                
        },500)
    }
}


function clearTimers(who) {
    clearTimeout(maxtimer);
    clearTimeout(mintimer);
    // header.status = null;
}
function preventStop(e) {
    if (!!e) {
        e.preventDefault();
        e.stopPropagation();
    }
}