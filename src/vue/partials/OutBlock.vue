<template>
    <div class="out-block pt-max pb-max">
        <div class="center">
            <p class="mid-txt" v-html="parsedTxt"></p>
            <h2 ref="h2" v-html="parsedTitle"></h2>
        </div>
        <a :href="btn.link" target="_blank" class="btn" v-text="btn.txt"></a>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    props: ['txt', 'h2', 'btn'],
    mounted() {
    },
    methods: {
        breaktext(txt, count) {
            let rgx = new RegExp(`^[\\.\\,\\w\\s\\+\\-\\'\\;]{0,${count}} `, 'i');
            let match = txt.match(rgx);
            let toArr = match[0] ? _.trim(match[0]).split(' ') : null;
            if (!toArr) {
                return txt;
            }
            toArr.push('<br>')
            let final = txt.replace(rgx, toArr.join(' '))
            return final;
        }
    },
    computed: {
        parsedTxt() {
            let txt = this.txt;
            if (window.screen.width>640 && txt.length>100) {
                return this.breaktext(txt, 80)
            }     
            return txt;       
        },
        parsedTitle() {
                let titleTxt = this.h2.txt || this.h2;
                if (window.screen.width>640 && titleTxt.length>30) {
                    // from break variable (1-0 based nth word from start of string)
                    let breakword = this.h2.break-1 || null;

                    if (!!breakword) {
                        let arr = titleTxt.split(' ');
                        arr[breakword] = arr[breakword]+"<br>";
                        return arr.join(' ');
                    }

                    // default break it
                    return this.breaktext(titleTxt, 25)

                }
                return titleTxt
        }
    }
}
</script>
<style lang="stylus">
</style>