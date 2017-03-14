import $ from 'jquery'
// Intro Simple Animation

var $introAnim, $introAnimBlur, $introImage, $hotspot;

const animation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/First-Animation.mp4';
const blurredAnimation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/FirstAnimationBlur.mp4';
export var _introAnimEnded = false;

export function initIntroAnimation() {
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
            introAnimRestart();
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
    $introAnim.get(0).pause();
    $introAnimBlur.get(0).pause();
}

export function hide() {
    $introAnim.fadeOut(100);
    $introAnimBlur.fadeOut(100);
    $introImage.fadeOut(100);
    
}

export function hideHotSpot() {
    $hotspot.hide();   
}
export function showHotSpot() {
    $hotspot.show();
}
export function play() {
    $introAnim.get(0).play();
    $introAnimBlur.get(0).play();
}

export function show() {
    $introAnim.fadeIn(200);
    $introAnimBlur.fadeIn(200);
    $introImage.fadeIn(200);
}

export function introAnimLoop() {
    if ($introAnimBlur.get(0).currentTime > 12) {
        $introAnim.get(0).currentTime = 0;
        $introAnimBlur.get(0).currentTime = 0;
    }
    play();
}
export function introAnimToEnd() {
    console.log('in intro anim to end');
        $introAnim.hide();
        $introAnimBlur.hide();
        $introImage.show();        
}
export function introAnimRestart() {
    console.log('restart animation');
    $introAnim.get(0).currentTime = 0;
    $introAnimBlur.get(0).currentTime = 0;
    $introAnim.show();
    $introAnimBlur.show();
    play();
}
export function loadAnim() {
    $introAnim.attr('src', animation);
}
export function loadAnimBlur() {
    $introAnimBlur.attr('src', blurredAnimation);
}

export function introAnimBlurAbove() {
    console.log('introAnimBlurAbove');
    $introAnimBlur.css('z-index', 10);
    $introAnim.css('z-index', 9);
    $introAnim.show()
    $introAnimBlur.show()
    
    
}

export function introAnimBlurBehind() {
    console.log('introAnimBlurBehind');
    $introAnimBlur.css('z-index', 9);
    $introAnim.css('z-index', 10);
    $introAnim.show()
    $introAnimBlur.show()
    
}