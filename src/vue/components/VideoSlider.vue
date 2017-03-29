<template>
<div class="video-slider" id="vidSlider">
    <div :class="['info-toggle', infomode ? 'on' : '']" id="infoToggle" @click.prevent.stop="toggleinfo"></div>
    <div ref="control" class="swiper-control">
        <div class="swiper-container video-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide" :data-swiper-autoplay="swiperAutoplay">
                    <template v-if="slideindex==0">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>MORE BONE Where it Matters Most...</h2>
                                <h5>V3 By MIS, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants/v3.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <img v-if="!!isTablet" src="dist/img/animation/V3_2.gif" alt="">
                        <img v-else-if="!!isMobile" src="dist/img/animation/V3_mini.gif" alt="">
                        <video v-else ref="vid3" :class="[infomode ? 'under' : '']" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/v3_ver_4.mp4" autoplay loop></video>
                    </template>
                </div>
                <div class="swiper-slide" :data-swiper-autoplay="swiperAutoplay">
                    <template v-if="slideindex==1">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>As easy as 1, 2, 3...</h2>
                                <h5>MIS 4MATRIX, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Regenerative-Solutions/Bone-Grafting-Materials/4MATRIX.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <img v-if="!!isTablet" src="dist/img/animation/4MATRIX_2.gif" alt="">
                        <img v-else-if="!!isMobile" src="dist/img/animation/4MATRIX_mini.gif" alt="">
                        <video v-else ref="vid3" :class="[infomode ? 'under' : '']" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_3.mp4" autoplay loop></video>
                    </template>
                </div>
                <div class="swiper-slide" :data-swiper-autoplay="swiperAutoplay">
                    <template v-if="slideindex==2">
                        <div :class="['info-overlay', !!infomode ? 'on' : '']">
                            <div class="inner">
                                <h2>From perfect planning to precise placement</h2>
                                <h5>MIS MGUIDE, Make It Simple</h5>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Digital-Dentistry/MGUIDE.aspx">Click for more  ></a>
                            </div>
                        </div>
                        <img v-if="!!isTablet" src="dist/img/animation/MGUIDE_2.gif" alt="">
                        <img v-else-if="!!isMobile" src="dist/img/animation/MGUIDE_mini.gif" alt="">
                        <video v-else ref="vid3" :class="[infomode ? 'under' : '']" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_ver.2.mp4" autoplay loop></video>
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
            trigger: 0,
            slideindex: 0,
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
        this.$el.addEventListener('slidechange', this.resetVideos);
        this.$el.addEventListener('lastslide', this.onLastSlide);
        
        
    },
    methods: {
        onLastSlide() {
           $(this.$refs.vid3).on('ended', () => {
               this.restartSwiper()
           })
        },
        restartSwiper() {
            this.resetVideos();
            this.swiper.stopAutoplay();
            this.swiper.slideTo(1, 50, true);
            this.swiper.startAutoplay();
        },
        resetVideos() {
            console.log('slide Index> ', this.swiper.activeIndex);
            this.$set(this, 'slideindex', this.swiper.activeIndex);
            // restart slides on change
            $(this.$el).find('video').prop('currentTime', 0);
        },
        toggleinfo() {
            this.$set(this, 'infomode', !this.infomode);
            $(".info-overlay").toggleClass('on');
            if (!!this.infomode) {
                this.swiper.stopAutoplay()
            }
            else {
                this.resetVideos();
                this.swiper.startAutoplay();
            }
        }
    },
    computed: {
        swiperAutoplay() {
            return this.isMobile || this.isMozillaOrIE ? 4200 : 11000
        },
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
.info-toggle
    opacity 1
    transition opacity 200ms ease-out
    &:hover
        opacity 0.6
</style>
