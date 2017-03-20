<template>
    <div id="top" :class="[isDesktop ? 'extra-height' : '', !isDesktop && !isMobile ? 'extra-nudge' : '']">
        <div id="intro" @click="playIntroVideo" @restartIntroAnim="restartAnim" :class="['intro', 'hp', 'full-height', 'unattach', isSticky ? 'sticky' : '']">
            <div v-if="showhotspot" id="hotspot" class="hotspot"></div>
            <button v-if="introvidplaying && !isMobile" @click.prevent.stop="closeTriggerHandler" id="closeIntro" class="close-btn"></button>
            <img v-if="!isMobile && !introvidplaying" id="simpleIntro" :class="[showplay&&zeroscroll ? 'blurme' : '']" src="dist/img/simple-intro.png" />
            <div v-if="isMobile && !introvidplaying" class="mobile-play">
                <img id="simpleIntroMobile" :class="[showplay && zeroscroll ? 'blurme' : '']" src="dist/img/mobile-play.png" />
                <img src="dist/img/mobile-simple-intro.png" />
            </div>
                <template v-if="isDesktop && !isMozillaOrIE && zeroscroll">
                    <video ref="introanim" id="introAnim" preload="auto" autoplay></video>
                    <video ref="introanimBlur" id="introAnimBlur" preload="auto" autoplay></video>
                    <div id='i360' class="i-360">
                        <img src="dist/img/360-icon.png" alt="The video includes a 360° experience">
                        <span>The video includes a <em>360°</em> experience</span>
                    </div>
                </template>
            <transition name="fade" appear>
                <div v-if="showplay && !!zeroscroll" id="playintro" :class="['play-overlay', !isDesktop || isMozillaOrIE || zeroscroll ? 'blubg' : '', !zeroscroll ? 'hide' : '']">
                    <img src="dist/img/play-btn.svg" alt="Play Video">
                    <div class="intro-txt">
                        <span>All the great things are simple...</span>
                        <span>(Click to know more)</span>
                    </div>
                </div>
            </transition>
            <iframe v-if="!!introvidplaying && !isMobile" ref="introvideo" class="video-frame" id="introvideo" frameborder="0" allowfullscreen></iframe>
            <video v-if="!!introvidplaying && isMobile" ref="introvideomobile" class="video-frame" id="introvideomobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MIS_Simple+Movie_compressed.mp4"></video>
            
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
            // zeroscroll: true,
            hasScrolled: false,
            introvidplaying: false,
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
            ref.trigger = new Date();
        })
        if (this.isTablet) {
            this.$nextTick(function() {
                window.scrollTo(0,0);
                window.addEventListener('scroll', this.tabletScroll);
            })
            
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
        zeroscroll() {
            let trigger = this.trigger;
            if ( $(window).scrollTop()==0) {
                   return true;
                }
            else if ($(window).scrollTop()>500) {
               return false;
            }
        },
        scrollTop() {
            let trigger = this.trigger;
            if (!this.justLoaded) {
                let scrolltop = $(window).scrollTop();
                // if ( $(window).scrollTop()==0) {
                //     this.$set(this, 'zeroscroll', true);
                //     this.zeroscroll = true;
                // }
                // else if ($(window).scrollTop()>500) {
                //     this.$set(this, 'zeroscroll', false);
                //     this.zeroscroll = false;
                // }
                // this.$set(this, 'zeroscroll', (scrolltop==0) ? true : scrolltop>500 ? false : this.zeroscroll)
                if (this.hasScrolled) {
                    document.getElementById('rest').style.display = 'block'
                }
                return scrolltop
            }
            setTimeout(function() {
                this.justLoaded =false;
            }.bind(this), 400)
            return 0

        },
        isSticky() {
            return this.isDesktop && this.scrollTop<499;
        },
        showplay() {
            let trigger = this.trigger;
            /*
            // when to show play overlay?
            --> NOT on Mobile
            --> DESKTOP When windows.scrolltop is > 10 and < 499
                ONLY after scrolling from top
            */
            return  !this.introvidplaying && ( ( (this.isTablet || this.isMozillaOrIE) && this.hasScrolled)  ||  (!this.isMobile && this.scrollTop>10 && this.scrollTop < 499))
        },
        showhotspot() {
            let trigger = this.trigger;
            return (this.isDesktop && !this.zeroscroll && !this.introvidplaying)
        }
    },
    methods: {
        tabletScroll() {
            this.hasScrolled = true;
            

            console.log('tablet scrolled>> ', $(window).scrollTop());
            if (this.tabscroll>5) {
                window.removeEventListener('scroll', this.tabletScroll)
                document.getElementById('rest').style.display = 'block';    
            }
            
            this.tabscroll++;
        },
        restartAnim() {
            var vm = this;
            var animation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/First-Animation.mp4';
            var blurredAnimation = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/FirstAnimationBlur.mp4';
            setTimeout(function() {
                this.$set(this, 'zeroscroll', true);
                this.$nextTick(function() {
                    let anim =this.$refs.introanim,
                        blur = this.$refs.introanimBlur;
                    $(anim).css('z-index', 12);
                    $(anim).attr('src', animation);
                    $(blur).attr('src', blurredAnimation);
                    $(anim).show();
                    $(blur).show();
                    blur.play();
                    anim.play();
                });
            }.bind(this), 650)
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
                    // vid.src = 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MIS_Simple+Movie_compressed.mp4';
                    $(vid).on('webkitendfullscreen fullscreenchange',this.closeIntroVideo);
                    // try {
                        // vid.requestFullscreen();
                       vid.play();
                        vid.webkitEnterFullscreen();
                        
                        setTimeout(function() {
                            vid.play();
                             vid.webkitEnterFullscreen();
                            
                        }, 200)
                        
                    // }
                    // catch (e) {
                    //     console.log('catched err  .. ', e);
                    // }
                    
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
            console.log('close video');
            if (this.isDesktop && !this.isMozillaOrIE) {
                this.$refs.introvideo.src = '';
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

