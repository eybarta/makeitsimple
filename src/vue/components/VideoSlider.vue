<template>
<div class="video-slider" id="vidSlider">
    <div :class="['info-toggle', infomode ? 'on' : '']" id="infoToggle" @click.prevent.stop="toggleinfo"></div>
    <div ref="control" class="swiper-control">
        <div class="swiper-container video-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <template v-if="slideindex==0">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>MORE BONE Where it Matters Most...</h2>
                                <h5>V3 By MIS, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants/v3.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <!--
                        <img v-if="!!isTablet" :src="'dist/img/animation/V3_2.gif?x='+Math.random()" alt="">
                        <img v-else-if="!!isMobile" :src="'dist/img/animation/V3_mini.gif?x='+Math.random()" alt="">
                        -->
                        <video ref="vid3" :class="[infomode ? 'under' : '']" :src="!!isDesktop ? 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/v3_ver_4.mp4' : 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/V3_mobile.mp4'" playsinline @ended="videoEnded"></video>
                    </template>
                </div>
                <div class="swiper-slide">
                    <template v-if="slideindex==1">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>From perfect planning to precise placement</h2>
                                <h5>MIS MGUIDE, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Digital-Dentistry/MGUIDE.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <!--
                        <img v-if="!!isTablet" :src="'dist/img/animation/MGUIDE_2.gif?x='+Math.random()" alt="">
                        <img v-else-if="!!isMobile" :src="'dist/img/animation/MGUIDE_mini.gif?x='+Math.random()" alt="">
                        -->
                        <video ref="vid3" :class="[infomode ? 'under' : '']" :src="!!isDesktop ? 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_ver.3.mp4' : 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_mobile.mp4'" playsinline @ended="videoEnded"></video>
                    </template>
                </div>
                  <div class="swiper-slide">
                    <template v-if="slideindex==2">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>As easy as 1, 2, 3...</h2>
                                <h5>MIS 4MATRIX, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Regenerative-Solutions/Bone-Grafting-Materials/4MATRIX.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <!--
                        <img v-if="!!isTablet" :src="'dist/img/animation/4MATRIX_2.gif?x='+Math.random()" alt="">
                        <img v-else-if="!!isMobile" :src="'dist/img/animation/4MATRIX_mini.gif?x='+Math.random()" alt="">
                        -->
                        <video ref="vid3" :class="[infomode ? 'under' : '']" :src="!!isDesktop ? 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_3.mp4' : 'https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_mobile.mp4'" playsinline @ended="videoEnded"></video>
                    </template>
                </div>
            </div>
        </div>
        <div class="video-prev swiper-button-prev" ref="prev"></div>
        <div class="video-next swiper-button-next" ref="next"></div>
        <div class="video-swiper-pagination"></div>    
    </div>
</div>
</template>
<script>
import $ from 'jquery'
import { videoSwiper } from '../../js/swiper'
export default {
    data() {
        return {
            testflag: false,
            trigger: 0,
            slideindex: 0,
            slideamount: 3,
            infomode: false,
            swiper: null
        }
    },
    created() {
        
    },
    mounted() {
        let ref = this;
        this.swiper = videoSwiper();
        window.addEventListener('resize', e => { ref.trigger = new Date()})
        // Custom event triggered from 'sections-inview.js'
        this.$el.addEventListener('inview', this.restartSwiper);
        this.$el.addEventListener('slidechange', this.slideChanged);
        // this.$el.addEventListener('lastslide', this.onLastSlide);
        
        
    },
    methods: {
        videoEnded() {
            console.log('video ended...');
            if (!this.infomode) {
                console.log(this.slideindex, " ;: ", this.slideamount);
                if (this.slideindex===this.slideamount-1) {
                    console.log('ended on last slide.');
                    this.swiper.slideTo(0, 0, true);
                }
                else {
                    this.swiper.slideNext(true, 0);
                }
            } else {
                $(this.$el).find('video').trigger('play');
            }
        },
        restartSwiper() {
            this.swiper.slideTo(0, 0, true);
            this.slideChanged();
        },
        slideChanged() {
            this.$set(this, 'slideindex', this.swiper.activeIndex);
            this.$nextTick(function() {
                setTimeout(function() {
                    $(this.$el).find('video').trigger('play');
                }.bind(this), 0)
            })
        },
        toggleinfo() {
            this.$set(this, 'infomode', !this.infomode);
            $(".info-overlay").toggleClass('on');
        }
    },
    computed: {
        isDesktop() {
            let trigger = this.trigger;
            return $(window).width()>1024
        },
        isMobile() {
            let trigger = this.trigger;
            return $(window).width()<=736
        },
        isTablet() {
            console.log("IS TABLET ?? ", !this.isMobile && !this.isDesktop );
            return !this.isMobile && !this.isDesktop;
        },
        isMozillaOrIE() {
            let ua = window.navigator.userAgent;
            return (/firefox/gi.test(ua) || "ActiveXObject" in window);
        }
    }
}
</script>
<style lang="stylus">
.test
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 9999
    background #fff
    img
        width 100%
        height auto
    button
        border 1px solid green
        color green
        background #fff
        padding 10px
.info-toggle
    opacity 1
    transition opacity 200ms ease-out
    &:hover
        opacity 0.6
</style>
