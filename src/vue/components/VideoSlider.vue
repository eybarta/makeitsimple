<template>
<div class="video-slider" id="vidSlider">
    <div :class="['info-toggle', infomode ? 'on' : '']" id="infoToggle" @click="toggleinfo"></div>
    <div ref="control" class="swiper-control">
        <div class="swiper-container video-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div :class="['info-overlay', infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Regenerative-Solutions/Bone-Grafting-Materials/4MATRIX.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video ref="vid1" :class="[infomode ? 'under' : '']" v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/4MATRIX.gif" alt="">
                </div>
                <div class="swiper-slide">
                    <div :class="['info-overlay', infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Digital-Dentistry/MGUIDE.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video :class="[infomode ? 'under' : '']" v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/MGUIDE.gif" alt="">
                    
                </div>
                <div class="swiper-slide">
                    <div :class="['info-overlay', infomode ? 'on' : '']">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a target="_blank" href="http://www.mis-implants.com/Products/Implants/v3.aspx">Click for more  ></a>
                        </div>
                    </div>
                    <video :class="[infomode ? 'under' : '']" v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/V3_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/V3.gif" alt="">
                </div>
            </div>
        </div>
        <div class="video-swiper-pagination"></div>                    
    </div>
</div>
</template>
<script>
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
        this.$el.addEventListener('inview', this.inview);
        
    },
    methods: {
        inview() {
            // Element is in view port.
            // restart slides and animation
            this.swiper.slideTo(0, 50, true);
            if (!this.isMobile) {
                this.$refs.vid1.currentTime = 0;
            }
        },
        toggleinfo() {
            this.infomode = !this.infomode
            this.swiper.stopAutoplay();
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
</style>
