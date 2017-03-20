import $ from 'jquery'
// Intro Simple Animation

var $introAnim, $introAnimBlur, $introImage, $hotspot, $desktop;

const animation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/First-Animation.mp4';
const blurredAnimation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/FirstAnimationBlur.mp4';
export var _introAnimEnded = false;

export function initIntroAnimation() {
    $desktop = $(window).width()>1024;
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    $introImage = $("#simpleIntro");
    $hotspot = $("#hotspot");
    // bind animation to video tag
    // $introAnim.one('canplaythrough', () => $introImage.hide())
    $introAnim.on('ended', () => {
        _introAnimEnded=true;
        if ($(window).scrollTop()<5 || $(window).scrollTop()>499) {
            introAnimToEnd();
        } else {
            // introAnimRestart();
        }
    })
    introAnimBlurBehind();
    loadAnim();
    loadAnimBlur();

    
}

export function introAnimEl() {
    return $introAnim.get(0);
}

export function stop() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.get(0).pause();
        $introAnimBlur.get(0).pause();
    }
}

export function hide() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    $introImage = $("#simpleIntro");
    
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.fadeOut(100);
        $introAnimBlur.fadeOut(100);
        $introImage.fadeOut(100);
    }
}
export function play() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.get(0).play();
        $introAnimBlur.get(0).play();
    }
}

export function show() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    $introImage = $("#simpleIntro");
    
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.fadeIn(200);
        $introAnimBlur.fadeIn(200);
        $introImage.fadeIn(200);
    }
}

export function introAnimLoop() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        if ($introAnimBlur.get(0).currentTime > 12) {
            $introAnim.get(0).currentTime = 0;
            $introAnimBlur.get(0).currentTime = 0;
        }
        play();
    }
}
export function introAnimToEnd() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    $introImage = $("#simpleIntro");
    
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.hide();
        $introAnimBlur.hide();
        $introImage.show();        
    }
}
export function introAnimRestart() {
    console.log('introAnimRestart');
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnim.get(0).currentTime = 0;
        $introAnimBlur.get(0).currentTime = 0;
        $introAnim.show();
        $introAnimBlur.show();
        play();
    }
}
export function loadAnim() {
    $introAnim = $("#introAnim");
    
    if (!!$introAnim && !isMozillaOrIE) {
        $introAnim.attr('src', animation);
    }
}
export function loadAnimBlur() {
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnimBlur && !isMozillaOrIE) {
        $introAnimBlur.attr('src', blurredAnimation);
    }
}

export function introAnimBlurAbove() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnimBlur.css('z-index', 10);
        $introAnim.css('z-index', 9);
        $introAnim.show()
        $introAnimBlur.show()
    }
}

export function introAnimBlurBehind() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    if (!!$introAnim && !!$introAnimBlur && !isMozillaOrIE) {
        $introAnimBlur.css('z-index', 9);
        $introAnim.css('z-index', 10);
        $introAnim.show()
        $introAnimBlur.show()
    }
}

var isMozillaOrIE = function() {
    let ua = window.navigator.userAgent;
    return (/firefox/gi.test(ua) || "ActiveXObject" in window);
}()