<template>
    <div class="out-block pt-max pb-max">
        <div class="center">
            <p class="mid-txt" v-html="parsedTxt"></p>
            <h2 ref="h2" v-html="parsedTitle"></h2>
        </div>
        <a :href="btnLink" target="_blank" class="btn" v-text="btnLabel"></a>
    </div>
</template>
<script>
import $ from 'jquery'
import { countrylist } from '../../js/country-list'
export default {
    props: ['txt', 'h2', 'btn'],
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
        },
        
    },
    computed: {
        btnLabel() {
            let _cc = localStorage.getItem('cc');
            if (!!_cc) {
                let api = `https://restcountries.eu/rest/v2/alpha/${_cc}`;
                return $.get(api).then(function( data ) {
                    console.log('name >> ', data.name);
                    return 'Contact our distributor in ' + data.name;
                });
            } else {
                console.log('huh?');
                return 'Contact your local distributor';
            }
        },
        btnLink() {
            let _cc = localStorage.getItem('cc');
            let link = 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx';
            if (!!_cc) {
                let api = `https://restcountries.eu/rest/v2/alpha/${_cc}`;
                return $.get(api).then(function( data ) {
                    console.log('name >> ', data.name);
                    let countryObj = _.find(countrylist, obj => { return obj.country.toLowerCase()===data.name.toLowerCase() })
                    if (!!countryObj) {
                        link = countryObj.link;
                    }
                    return link;
                });
            } else {
               
                return link;
            }

        },
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
        },
    }
}
</script>
<style lang="stylus">
</style>