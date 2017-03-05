<template>
    <div class="info-block pt-max" :class="[group.type=='numbers' ? 'num-grp' : '']">
        <h1 v-if="title.tag=='h1'" v-text="title.txt"></h1>
        <h3 v-else-if="title.tag=='h3'" v-html="titleText" :class="[breakWords ? 'breaked' : '', !!title.classNames ? title.classNames : '' ]"></h3>
        <div v-if="!!txt" class="centered-text pb-max pt-bigger" v-text="txt"></div>
        <ul id="itemlist" :class="[group.items.length>3 ? 'group-4' : 'group-3', 'centered', 'items', 'pt-big']">
            <li class="pb-med" v-if="group.type=='numbers'" v-for="(item, index) in group.items">
                <div v-if="numload" class="big-num" :class="[item.title>9 ? 'dbl' : '']" >
                    <count-up v-if="isNumber(item.title)" :start="0" :end="parseInt(item.title)" :decimals="0" :duration="2.5" :options="countOptions"></count-up>
                    <span v-else v-html="item.title" :class="[isNaN(item.title) ? '' : 'bigger']"></span>
                </div>
                <p class="midtxt tcenter" v-text="item.text"></p>
            </li>
            <li  v-if="group.type=='images'" v-for="(item, index) in group.items" :class="[index==1 ? 'm0' : '']">
                <div class="img-wrap">
                    <img :src="item.img.src" alt="item.img.alt">
                </div>
                <div class="out-links">
                    <a v-for="link in item.links" href="link.href">{{link.txt}} <span>></span></a>
                </div>
            </li>
        </ul>
        <div v-if="!!image" class="bottom-graphic" :style="'background-image:url('+image+')'"></div>
    </div>
</template>
<script>
import CountUp from 'vue-countup-v2';
import inView from 'in-view'
// import AOS from 'aos'
export default {
    props: ['title', 'txt', 'group', 'image'],
    data() {
        return {
            trigger: null,
            numload: false,
            countOptions: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '' 
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeHandler);
        inView.offset({ bottom: 0})
        inView('#itemlist').once('enter', el => {
            this.$set(this, 'numload', true)
        });
        
        //  AOS.init({
        //     offset: 400,
        //     duration: 400,
        //     easing: 'ease-out-quad',
        //     delay: 20,
        // });
        // this.$nextTick(function() {
        //     AOS.refresh()
        // })
    },
    components: {
      CountUp  
    },
    computed: {
        isDevice() {
            let triggerme = this.trigger;
            return window.innerWidth < 769;
        },
        titleText() {
            if (this.breakWords) {
                return this.isDevice ? _.replace(this.title.txt, /\s/g, '<br>') : this.title.txt
            }
            return this.title.txt
        },
        breakWords() {
            return this.isDevice && _.hasIn(this.title, 'options') && this.title.options.indexOf('word-break')>-1
        }
    },
    methods: {
        resizeHandler() {
            // Nudge trigger to recompute computed properties on resize.
            this.trigger = null;
            this.trigger = Math.random();
        },
        isNumber(num) {
            return _.isNumber(num);
        },
        isNaN(num) {
            return _.isNaN(parseInt(num))
        }
    }
}
</script>
<style lang="stylus" scoped>
.info-block
    min-height 400px
h3
    text-align center
.dbl span
    transform translate(-55%, -55%)
    letter-spacing -9px
.bigger
    font-size 200px !important
</style>