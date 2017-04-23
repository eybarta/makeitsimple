<template>
<div :class="['pages-wrap', isAndroid ? 'android' : '']">
        <div :class="['back-home', !!wideScreen ? 'sticky' : '']">
            <span v-text="fromHome ? 'BACK' : 'HOME'"></span>
            <a href="/Default.aspx#makeitsimple"></a>
        </div>
        <div class="swiper-container">
            <div ref="swiper" class="swiper-wrapper" id="pageSwiperWrapper">
                <div class="swiper-slide">
                    <div class="intro full-height unattach" :style="'background-image:url('+introBackground+')'">
                        <img class="floater" v-if="introFloatingElement" :src="introFloatingElement" alt="introFloatingElement">
                    </div>
                    <info-block :title="infoblock.title" :txt="infoblock.txt" :group="infoblock.group" :image="infoblock.image"></info-block>
                    <out-block :txt="outblock.txt" :h2="outblock.h2" :btn="outblock.btn"></out-block>
                    <info-block class="pb-max center" :title="infoblock2.title" :txt="infoblock2.txt" :group="infoblock2.group"></info-block>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import InfoBlock from './partials/InfoBlock.vue'
import OutBlock from './partials/OutBlock.vue'
import { storageAvailable } from '../js/utils'
var fromHome = false;

export default {
    props: {
        pageIndex: Number,
        hash: String,
        introBg: String,
        introFloatingElement: String,
        infoblock: Object,
        outblock: Object,
        infoblock2: Object
    },
    data() {
        return {
            fromHome: null
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
        OutBlock
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

</style>
