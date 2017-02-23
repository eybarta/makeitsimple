<template>
<div class="video-slider">
    <div class="info-toggle" id="infoToggle"></div>
    <div class="swiper-control">
        <div class="swiper-container video-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="info-overlay">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a href="">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/4MATRIX_3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/4MATRIX.gif" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="info-overlay">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a href="">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/MGUIDE_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/MGUIDE.gif" alt="">
                    
                </div>
                <div class="swiper-slide">
                    <div class="info-overlay">
                        <div class="inner">
                            <h2>As easy as 1, 2, 3...</h2>
                            <h5>MIS 4MATRIX, Make It Simple</h5>
                            <a href="">Click for more  ></a>
                        </div>
                    </div>
                    <video v-if="!isMobile" src="https://s3-eu-west-1.amazonaws.com/mis-implants/makeitsimple/Minisite/V3_ver.3.mp4" autoplay loop></video>
                    <img v-else src="dist/img/animation/V3.gif" alt="">
                </div>
            </div>
        </div>
        <div class="video-swiper-pagination"></div>                    
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            trigger: 0
        }
    },
    mounted() {
        let ref = this;
        window.addEventListener('resize', e => { ref.trigger = new Date()})
    },
    computed: {
        isMobile() {
            let trigger = this.trigger;
            let cond = document.body.offsetWidth<769;
            console.log("is mobiel? ", cond);
            return document.body.offsetWidth<769;
        }
    }
}
</script>
<style lang="stylus">
</style>
