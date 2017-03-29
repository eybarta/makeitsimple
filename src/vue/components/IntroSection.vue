<template>
    <div id="top" :class="[isDesktop ? 'extra-height' : '', !isDesktop && !isMobile ? 'extra-nudge' : '']">
        <div ref="intro" id="intro" @click="playIntroVideo" @restartIntroAnim="restartAnim" :class="['intro', 'hp', 'full-height', 'unattach', isSticky ? 'sticky' : '']">
            <div v-if="showhotspot" id="hotspot" class="hotspot"></div>
            <button v-if="introvidplaying && (isAndroid || !isMobile)" @click.prevent.stop="closeTriggerHandler" id="closeIntro" class="close-btn"></button>
            <img v-if="!isMobile && !introvidplaying" id="simpleIntro" :class="[showplay&&zeroscroll ? 'blurme' : '']" src="dist/img/simple-intro.png" />
            <div v-if="isMobile && !introvidplaying" class="mobile-play">
                <img id="simpleIntroMobile" :class="[showplay && zeroscroll ? 'blurme' : '']" src="dist/img/mobile-play.png" />
                <img src="dist/img/mobile-simple-intro.png" />
            </div>
                <template v-if="!introvidplaying && isDesktop && !isMozillaOrIE && (zeroscroll||blockscroll)">
                    <video ref="introanim" id="introAnim" preload="auto" autoplay></video>
                    <video ref="introanimBlur" id="introAnimBlur" preload="auto" autoplay></video>
                    <div id='i360' class="i-360">
                        <img src="dist/img/360-icon.png" alt="The video includes a 360° experience">
                        <span>The video includes a <em>360°</em> experience</span>
                    </div>
                </template>
            <transition name="fade" appear>
                <div v-if="showplay && !!zeroscroll && !blockscroll" id="playintro" :class="['play-overlay', !isDesktop || isMozillaOrIE || zeroscroll ? 'blubg' : '', !zeroscroll ? 'hide' : '']">
                    <img src="dist/img/play-btn.svg" alt="Play Video">
                    <div class="intro-txt">
                        <span>All the great things are simple...</span>
                        <span>(Click to know more)</span>
                    </div>
                </div>
            </transition>
            <iframe v-if="!!introvidplaying && isAndroid" ref="introvideomobile" class="video-in-frame" frameborder="0" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MIS_Simple+Movie_compressed.mp4" allowfullscreen></iframe>
            <iframe v-else-if="!!introvidplaying && !isMobile" ref="introvideo" class="video-frame" id="introvideo" frameborder="0" allowfullscreen></iframe>
            <video v-else-if="!!introvidplaying && isMobile" ref="introvideomobile" class="video-frame" id="introvideomobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MIS_Simple+Movie_compressed.mp4"></video>
            
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import * as introAnim from '../../js/intro-animation'
export default {
    data() {
        return {
            trigger: -1,
            timer: -1,
            zeroscroll: true,
            blockscroll: false,
            hasScrolled: false,
            introvidplaying: false,
            scrolltop: 0,
            tabscroll:0,
            justLoaded: true,

        }
    },
    created() {
        let ref = this;
        window.addEventListener('resize', function() {
            ref.trigger = new Date();
        })
        window.addEventListener('scroll', function() {
            // console.log('scroll triggered');
            ref.trigger = new Date();
            ref.$set(ref, 'scrolltop', $(window).scrollTop());
            ref.scrollHandler();
        })
        
        if (this.isTablet) {
            this.tabletRestart();
             
        }
    },
    computed: {
        isDesktop() {
            let trigger = this.trigger;
            return window.screen.width>1024
        },
        isMobile() {
            let trigger = this.trigger;
            return window.screen.width<=736
        },
        isMozillaOrIE() {
            let ua = window.navigator.userAgent;
            return (/firefox/gi.test(ua) || "ActiveXObject" in window);
        },
        isTablet() {
            return !this.isMobile && !this.isDesktop;
        },
        isSticky() {
            let trigger = this.trigger;
            return this.isDesktop && this.scrolltop<500;
        },
        showplay() {
            let trigger = this.trigger;
            /*
            // when to show play overlay?
            --> NOT on Mobile
            --> DESKTOP When windows.scrolltop is > 10 and < 499
                ONLY after scrolling from top
            */
            let must = !this.blockscroll && !this.introvidplaying && this.zeroscroll;
            if (!!this.isTablet) {
                return must && this.hasScrolled && this.scrolltop>0;
            }
            else if (!this.isMobile || !!this.isMozillaOrIE) {
                return must && this.scrolltop>50 && this.scrolltop < 499;
            }
            return false;
        },
        showhotspot() {
            let trigger = this.trigger;
            return (this.isDesktop && !this.zeroscroll && !this.introvidplaying)
        },
        isAndroid() {
            if(navigator != undefined && navigator.userAgent != undefined) {
                return (/android/gi.test(navigator.userAgent))
            }
            return false;
        }
    },
    mounted() {
        console.log('isMozillaOrIE>> ', this.isMozillaOrIE);
    },
    methods: {
        tabletRestart() {
            console.log('tabletRestart')
            let ref = this;
            // window.setInterval(function() {
            //     ref.trigger = new Date();
            // }, 300)
            this.$nextTick(function() {
                window.scrollTo(0,0);
                window.addEventListener('scroll', this.tabletScroll);
                this.$set(this, 'hasScrolled', false);
                document.getElementById('rest').style.display = 'none';    
            })
        },
        tabletScroll() {
            if (this.scrolltop>0) {
                this.hasScrolled = true;
                console.log('tablet scrolled>> ', $(window).scrollTop());
                if (this.tabscroll>5) {
                    window.removeEventListener('scroll', this.tabletScroll)
                    document.getElementById('rest').style.display = 'block';    
                }
                
                this.tabscroll++;
            }
        },
        restartAnim() {
            if (!!this.isDesktop) {
                console.log("RESTART ANIMATION");
                this.blockScroll();
                var vm = this;
                var animation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/First-Animation.mp4';
                var blurredAnimation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/FirstAnimationBlur.mp4';
                setTimeout(function() {
                    this.$set(this, 'zeroscroll', true);
                    this.$nextTick(function() {
                        let anim =this.$refs.introanim,
                            blur = this.$refs.introanimBlur;

                            console.log("ANIM > ", anim);
                            console.log("BLUR > ", blur);
                        $(anim).css('z-index', 12);
                        $(anim).attr('src', animation);
                        $(blur).attr('src', blurredAnimation);
                        $(anim).show();
                        $(blur).show();
                        blur.play();
                        anim.play();
                        this.unBlockScroll();
                    });
                }.bind(this), 450)
            }
        },
        scrollHandler() {
            console.log('scrollhandler >> ', this.scrolltop);
            if (!this.justLoaded && !this.blockscroll) {
                if ( this.scrolltop==0) {
                    this.$set(this, 'zeroscroll', true);
                    this.$set(this, 'justLoaded', true);
                    if (this.isTablet) {
                        this.tabletRestart();
                    }
                    // this.zeroscroll = true;
                }
                else if (this.scrolltop>500) {
                    this.$set(this, 'zeroscroll', false);
                    // this.zeroscroll = true;
                    this.closeIntroVideo();
                }
                // this.$set(this, 'zeroscroll', (scrolltop==0) ? true : scrolltop>500 ? false : this.zeroscroll)
                if (this.hasScrolled) {
                    document.getElementById('rest').style.display = 'block'
                }
            }
            else {
                setTimeout(function() {
                    this.$set(this, 'justLoaded', false);
                }.bind(this), 400)
            }
        },
        blockScroll() {
            this.$set(this, 'blockscroll', true);
            let event = new CustomEvent('blockscroll'),
            el = this.$refs.intro;
            el.dispatchEvent(event, true)
        },
        unBlockScroll() {
            this.$nextTick(function() {
                setTimeout(function() {
                    this.$set(this, 'blockscroll', false);
                    let event = new CustomEvent('unblockscroll'),
                    el = this.$refs.intro;
                    el.dispatchEvent(event, false)
                }.bind(this), 400)
            })
            
        },
        playIntroVideo() {
            console.log('play video');
            if (this.isDesktop && !this.isMozillaOrIE) {
                introAnim.stop();
                introAnim.hide();
            }
            
            $("header").hide();
                this.$set(this, 'introvidplaying', true);
                this.$nextTick(function() {
                if (this.isMobile) {
                    let vid = this.$refs.introvideomobile;
                    $(vid).on('webkitendfullscreen fullscreenchange',this.closeIntroVideo);
                    vid.play();
                    vid.webkitEnterFullscreen();
                }
                else {
                    this.$refs.introvideo.src = 'http://simple.mis-implants.com/vr8';
                }
            })
                
        },
        closeTriggerHandler() {
            var ref = this;
            if (this.isMobile) {
                this.closeIntroVideo()
            }
            try {

                let closer = this.$refs.introvideo.contentWindow.vrExitVR();
                if (closer) {
                    console.log('2 close trigger mobile');
                    this.closeIntroVideo();
                }
            }
            catch(e) {
                console.log('3 close trigger mobile>> catch >> ', e);
                this.closeIntroVideo()
            }   
        },
        closeIntroVideo() {
            if (this.isDesktop && !this.isMozillaOrIE) {
                // this.$refs.introvideo.src = '';
                introAnim.play();
                introAnim.show();
            }
            this.$set(this, 'introvidplaying', false);
            this.$set(this, 'zeroscroll', false);
            $("header").show();
        }
    }
}
</script>
<style lang="stylus">
@import '../../styl/settings.styl'
.video-in-frame
    position absolute
    top 90px
    left 0 
    right 0
    bottom 0
    z-index 9999999990
    @media all and (orientation: landscape)
        top 0
.close-btn
    z-index 99999999999 !important
#top
    position relative
    min-height 100vh
    height 100vh
    &.extra-height
        height calc(100vh + 500px)
    // &.extra-nudge
    //     margin-bottom 1px
    .intro
        &.sticky
            position fixed
    .blubg
        background rgba(darkblue, 0.8)
    .hide
        opacity 0

</style>

