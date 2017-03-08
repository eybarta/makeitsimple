<template>
<div class="video-slider" id="vidSlider">
    <div :class="['info-toggle', infomode ? 'on' : '']" id="infoToggle" @click.prevent.stop="toggleinfo"></div>
    <div ref="control" class="swiper-control">
        <div class="swiper-container video-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div :class="['info-overlay', !!infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Regenerative-Solutions/Bone-Grafting-Materials/4MATRIX.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" ref="vid1" :class="[infomode ? 'under' : '']"  src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/4MATRIX.gif" alt="">
                </div>
                <div class="swiper-slide">
                    <div :class="['info-overlay', !!infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>From perfect planning to precise placement</h2>
                            <h5>MIS MGUIDE, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Digital-Dentistry/MGUIDE.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" ref="vid2" :class="[infomode ? 'under' : '']" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/MGUIDE.gif" alt="">
                    
                </div>
                <div class="swiper-slide">
                    <div :class="['info-overlay', !!infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>MORE BONE Where it Matters Most...</h2>
                            <h5>V3 By MIS, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Implants/v3.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" ref="vid3" :class="[infomode ? 'under' : '']" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/V3_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/V3.gif" alt="">
                </div>
            </div>
        </div>
        <div class="video-prev swiper-button-prev" ref="prev" @click.prevent="prevClicked"></div>
        <div class="video-next swiper-button-next" ref="next" @click.prevent="nextClicked"></div>
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
            this.swiper.slideTo(1, 50, true);
            this.swiper.startAutoplay();
        },
        resetVideos() {
            // restart slides on change
            $(this.$el).find('video').prop('currentTime', 0);
        },
        toggleinfo() {
            this.$set(this, 'infomode', !this.infomode);
            console.log('toggle info ??');
            $(".info-overlay").toggleClass('on');
            !!this.infomode 
            ? this.swiper.stopAutoplay()
            : this.swiper.startAutoplay();
        }
    },
    computed: {
        isMobile() {
            let trigger = this.trigger;
            let cond = document.body.offsetWidth<769;
            return document.body.offsetWidth<769;
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
