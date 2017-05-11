<template>
<div :class="['pages-wrap', isAndroid ? 'android' : '']">
        <div :class="['back-home', !!wideScreen ? 'sticky' : '']">
            <span v-text="fromHome ? 'BACK' : 'HOME'"></span>
            <a href="/Default.aspx#makeitsimple"></a>
        </div>
        <div :class="['swiper-container', vidplaying ? 'overall' : '']">
            <div ref="swiper" class="swiper-wrapper" id="pageSwiperWrapper" @playingvid="vidplaying=true" @stoppedvid="vidplaying=false">
                <div class="swiper-slide">
                    <div class="page-intro full-height unattach" :style="'background-image:url('+introBackground+')'">
                        <img class="floater" v-if="introFloatingElement" :src="introFloatingElement" alt="introFloatingElement">
                        
                        <video-player v-if="introVideo" :mobile="isMobile" :vidurl="introVideo"></video-player>
                    </div>
                    <info-block :title="infoblock.title" :txt="infoblock.txt" :group="infoblock.group" :image="infoblock.image"></info-block>
                    <out-block :txt="outblock.txt" :h2="outblock.h2" :country="country" :btn="outblock.btn"></out-block>
                    <info-block class="pb-max center" :title="infoblock2.title" :txt="infoblock2.txt" :group="infoblock2.group"></info-block>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import InfoBlock from './partials/InfoBlock.vue'
import OutBlock from './partials/OutBlock.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import { storageAvailable } from '../js/utils'
var fromHome = false;

export default {
    props: {
        pageIndex: Number,
        hash: String,
        introBg: String,
        introVideo: String,
        introFloatingElement: String,
        infoblock: Object,
        outblock: Object,
        infoblock2: Object
    },
    fetch: {
        country() {
            return !!localStorage.getItem('cc') ? `https://restcountries.eu/rest/v2/alpha/${localStorage.getItem('cc')}` : false;
        }
    },
    data() {
        return {
            fromHome: null,
            country: null,
            vidplaying: false
        }
    },
    created() {
        this.$set(this, 'fromHome', fromHome);
        if (storageAvailable('localStorage')) {
            localStorage.setItem('pageIndex', this.pageIndex)
        }
    },
    components: {
        InfoBlock,
        OutBlock,
        VideoPlayer
    },
    beforeRouteEnter (to, from, next) {
        fromHome = !!from.name;
        window.scrollTo(0,0)
        next();
    },
    computed: {
        introBackground() {
            return window.screen.width<540 ? this.introBg.replace('.jpg', '-mobile.jpg') : this.introBg;
        },
        isMobile() {
            return window.screen.width<=736
        },
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
.overall
    z-index 99999
.page-intro
    min-height auto
    height 100vh
    overflow hidden
    position relative
    #videoHolder
        position absolute
        width 100%
        top 0
        left 0
</style>
