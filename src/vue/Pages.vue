<template>
        <div :class="['pages-wrap', isAndroid ? 'android' : '']">
        <div :class="['back-home', !!wideScreen ? 'sticky' : '']">
            <span>HOME</span>
            <a href="Default.aspx#top"></a>
        </div>
        <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div ref="swiper" class="swiper-wrapper" id="pageSwiperWrapper">
                    <router-view></router-view>
                    <!-- Slides 
                    <swiper-slide v-for="slide in slides" 
                        :hash="slide.hash"
                        :introBg="slide.introBg"
                        :introFloatingElement="slide.introFloatingElement"
                        :infoblock="slide.infoblock"
                        :outblock="slide.outblock"
                        :infoblock2="slide.infoblock2"
                        :track-by="slide.hash"
                        :swiped="swipetrigger"
                        key="slide.hash"></swiper-slide>
                        -->
                </div>
                <!--
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
                -->
        </div>
    </div>
</template>
<script>
// import SwiperSlide from './SwiperSlide.vue';
export default {
    data() {
        return {
            // slides: PageSlides,
            trigger: -1,
            swipetrigger: -1
        }
    },
    // components: {
    //     // SwiperSlide
    // },
    mounted() {
        let ref = this;
        window.addEventListener('resize', () => this.trigger = new Date())
    },
    computed: {
        wideScreen() {
            let trigger = this.trigger;
            return window.innerWidth>1300;
        },
        isAndroid() {
            if(navigator != undefined && navigator.userAgent != undefined) {
                return (/android/gi.test(navigator.userAgent))
            }
            return false;
        }
    }
}
</script>
<style lang="stylus">
.sticky
    position fixed
.pages-wrap
    overflow hidden
    .swiper-slide:last-child
        .bottom-graphic
            padding-bottom 20%

</style>
