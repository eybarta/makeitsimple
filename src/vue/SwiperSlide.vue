<template>
    <div class="swiper-slide" :data-hash="hash">
        <div class="intro full-height unattach" :style="'background-image:url('+introBackground+')'">
            <img class="floater" v-if="introFloatingElement" :src="introFloatingElement" alt="introFloatingElement">
        </div>
        <info-block :title="infoblock.title" :txt="infoblock.txt" :group="infoblock.group" :image="infoblock.image" :swiped="swiped"></info-block>
        <out-block :txt="outblock.txt" :h2="outblock.h2" :btn="outblock.btn"></out-block>
        <info-block class="pb-max center" :title="infoblock2.title" :txt="infoblock2.txt" :group="infoblock2.group"></info-block>
    </div>
</template>
<script>
import InfoBlock from './partials/InfoBlock.vue'
import OutBlock from './partials/OutBlock.vue'
export default {
    props: {
        hash: String,
        introBg: String,
        introFloatingElement: String,
        infoblock: Object,
        outblock: Object,
        infoblock2: Object,
        swiped: {
            type: [Date, Number],
            default: -1
        }
    },
    mounted() {
        // console.log(this.swiped);
        // this.$watch('swiped', () => {
        //     console.log('swiped changed');
        // })
    },
    components: {
        InfoBlock,
        OutBlock
    },
    computed: {
        introBackground() {
            return window.screen.width<540 ? this.introBg.replace('.jpg', '-mobile.jpg') : this.introBg;
        }
    }
}
</script>
<style lang="stylus">

</style>
