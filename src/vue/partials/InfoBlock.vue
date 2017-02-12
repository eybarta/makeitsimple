<template>
    <div class="info-block pt-max">
        <h1 v-if="title.tag=='h1'" v-text="title.txt"></h1>
        <h3 v-else-if="title.tag=='h3'" v-html="titleText" :class="[breakWords ? 'breaked' : '', !!title.classNames ? title.classNames : '' ]"></h3>
        <div v-if="!!txt" class="centered-text pb-max pt-bigger" v-text="txt"></div>
        <ul class="group-4">
            <li v-if="group.type=='numbers'" v-for="item in group.items">
                <div class="big-num"><span v-text="item.title"></span></div>
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
export default {
    props: ['title', 'txt', 'group', 'image'],
    data() {
        return {
            timer: null
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeHandler);
    },
    computed: {
        isDevice() {
            let time = this.timer;
            return window.innerWidth < 769;
        },
        titleText() {
            if (_.hasIn(this.title, 'options') && this.title.options=='word-break') {
                return this.isDevice ? _.replace(this.title.txt, /\s/g, '<br>') : this.title.txt
            }
            return this.title.txt
        },
        breakWords() {
            return this.isDevice && !!this.title.options && this.title.options.indexOf('word-break')>-1
        }
    },
    methods: {
        resizeHandler() {
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                console.log("FORCE UDPATE");
            }, 550)
        }
    }
}
</script>
<style lang="stylus" scoped>
h3
    text-align center
</style>