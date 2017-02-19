<template>
    <div class="info-block pt-max">
        <h1 v-if="title.tag=='h1'" v-text="title.txt"></h1>
        <h3 v-else-if="title.tag=='h3'" v-html="titleText" :class="[breakWords ? 'breaked' : '', !!title.classNames ? title.classNames : '' ]"></h3>
        <div v-if="!!txt" class="centered-text pb-max pt-bigger" v-text="txt"></div>
            <ul class="group-4 items">
                <li class="pb-med" v-if="group.type=='numbers'" v-for="item in group.items">
                    <div class="big-num" :class="[item.title>9 ? 'dbl' : '']">
                        <!--<span>{{ item.title }}</span>-->
                        <count-up v-if="numload" :start="0" :end="parseInt(item.title)" :decimals="0" :duration="2.5" :options="countOptions"></count-up>
                    </div>
                    <p class="midtxt tcenter" v-text="item.text"></p>
                </li>
                <li  v-if="group.type=='images'" v-for="item in group.items">
                    <div class="img-wrap">
                        <img :src="item.img.src" alt="item.img.alt">
                    </div>
                    <a v-for="link in item.links" href="link.href" v-text="link.txt"></a>
                </li>
            </ul>
        <div v-if="!!image" class="bottom-graphic-v3" :style="'background-image:url('+image+')'"></div>
    </div>
</template>
<script>
import CountUp from 'vue-countup-v2';
import inView from 'in-view'
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
        inView.offset({ bottom: -window.screen.height})
        inView('.items').once('enter', el => {
            this.$set(this, 'numload', true)
        });
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
    }
}
</script>
<style lang="stylus" scoped>
h3
    text-align center
.dbl span
    transform translate(-55%, -55%)
    letter-spacing -9px
</style>