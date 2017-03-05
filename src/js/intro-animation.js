import $ from 'jquery'
// Intro Simple Animation

var $introAnim, $introAnimBlur, $introImage;

const animation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/First-Animation.mp4';
const blurredAnimation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/FirstAnimationBlur.mp4';
export var _introAnimEnded = false;

export function initIntroAnimation() {
    $introAnim = $("#introAnim");
    $introAnimBlur = $("#introAnimBlur");
    $introImage = $("#simpleIntro");
    
    // bind animation to video tag
    $introAnim.one('canplaythrough', () => $introImage.hide())
    $introAnim.on('ended', () => {
        _introAnimEnded=true;
        console.log('intro anim ended');
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
    $introImage.fadeOut(100);
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
    $introAnim.get(0).currentTime = 0;
    $introAnimBlur.get(0).currentTime = 0;
    play();
}
export function introAnimToEnd() {
    $introAnim.get(0).loop = false;
    $introAnim.get(0).currentTime = 14
    $introAnimBlur.get(0).loop = false;
    $introAnimBlur.get(0).currentTime = 14
}

export function loadAnim() {
    $introAnim.attr('src', animation);
}
export function loadAnimBlur() {
    $introAnimBlur.attr('src', blurredAnimation);
}

export function introAnimBlurAbove() {
    $introAnimBlur.css('z-index', 10);
    $introAnim.css('z-index', 9);
}

export function introAnimBlurBehind() {
    $introAnimBlur.css('z-index', 9);
    $introAnim.css('z-index', 10);
}