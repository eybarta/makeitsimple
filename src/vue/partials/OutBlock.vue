<template>
    <div class="out-block clearfix">
        <div class="txtblock pb-max">
            <div>
                <p class="mid-txt" v-html="parsedTxt"></p>
                <h2 ref="h2" v-html="parsedTitle"></h2>
            </div>
        </div>
        <div :class="[thankyou ? 'tu' : '', 'formblock']" id="formBlock">
            <h5 v-text="formTitle"></h5>
            <div v-if="!thankyou" class="form">
                <div :class="['field', valid ? '' : 'invalid']">
                    <input v-model="name" id="name" type="text" required>
                    <label for="name">My Name is</label>
                </div>
                <div :class="['field', valid ? '' : 'invalid']">
                    <input v-model="email" id="email"  :class="invalidemail ? 'invalid-strong' : ''" type="text" required>
                    <label for="email" :class="invalidemail ? 'invalid' : ''" v-text="emailLabel"></label>
                </div>
                <div class="field">
                    <textarea v-model="msg" id="msg" required></textarea>
                    <label for="msg">My Message is</label>
                </div>
                
                <!--
                <button @click="send" class="send-btn"><img v-if="sending" src="./assets/preloader.gif">Send Message</button>
                -->
                <g-recaptcha 
                    class="send-btn"
                    :data-sitekey="sitekey" 
                    :data-validate="validate"
                    :data-callback="callback" ><img v-if="sending" src="./assets/preloader.gif">Send Message
                </g-recaptcha>
            </div>
        </div>
        <!--
        <div class="center">
            <p class="mid-txt" v-html="parsedTxt"></p>
            <h2 ref="h2" v-html="parsedTitle"></h2>
        </div>
        <a :href="btnLink" target="_blank" class="btn" v-text="btnLabel"></a>
        -->
    </div>
</template>
<script>
import $ from 'jquery'
import gRecaptcha from '@finpo/vue2-recaptcha-invisible';
import { countrylist } from '../../js/country-list'
export default {
    data() {
        return {
            valid: true,
            name: null,
            email: null,
            msg: null,
            invalidemail: false,
            sending: false,
            thankyou: false,
            sitekey: "6Lcj1h4UAAAAAEq8ZhGxVz7NT9Y4wV-MAMW1YEQK" //6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
        }
    },
    props: ['txt', 'h2', 'btn', 'country'],
    components: { gRecaptcha },
    methods: {
        validate: function () {
            console.log('validate')
            var emailrx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            let _valid = !!this.name && !!this.email;
            let _validemail = !!emailrx.test(this.email);
            console.log('_validemail?? ', _validemail)
            _valid = !!_valid  && !!_validemail;
            this.$set(this, 'invalidemail', !_validemail);
            this.$set(this, 'valid', _valid);
            return _valid;
        },
        callback: function (res) {
            console.log('callback>> ', res);
            var vm = this;
            this.$set(this, 'valid', true);

            // SEND EMAIL TO DISTRIBUTER
            let _data = {
                token: res,
                name: this.name,
                email: this.email,
                message: this.msg,
                cc: (!!this.country && !!this.country.fulfilled) ? this.country.value.alpha2Code : null
            }
            
            this.sending = true;

            console.log("Data to send >> ", _data);
            $.ajax({
                method: 'POST',
                url: '/webservice/Appservice.asmx/SendToDistributor',
                data: JSON.stringify(_data),
                contentType: "application/json; charset=utf-8",
                dataType:'json'
            }).done(function( response ) {
                console.log( "response from ajax: " + response.d.length);
                if (response.d.length<1) {
                    // No error 
                    vm.$set(vm, 'thankyou', true);
                    vm.$set(vm, 'sending', false);
                    vm.$nextTick(function() {
                        $("html,body").animate({scrollTop: $("#formBlock").offset().top}, 200)
                    })
                }
                
            });
        },
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
        emailLabel() {
            return this.invalidemail ? 'Enter valid email' : 'My Email is';
        },
        formTitle() {
            return !!this.thankyou ? "Thank you, we'll be in touch." : "Let's Get In Touch !"
        },
        // btnLabel() {
        //     let fulfilled = (!!this.country && this.country.fulfilled) || null;
        //     if (!!fulfilled) {
        //             return 'Contact our distributor in ' + this.country.value.name;
        //     } else {
        //         return 'Contact your local distributor';
        //     }
        // },
        // btnLink() {
        //     let fulfilled = (!!this.country && this.country.fulfilled) || null;
        //     let vm = this;
        //     let link = 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx';
        //     if (!!fulfilled) {
        //         let countryObj = _.find(countrylist, obj => { return obj.country.toLowerCase()===vm.country.value.name.toLowerCase() })
        //         if (!!countryObj) {
        //             link = countryObj.link;
        //         }
        //     }
        //     return link;
        // },
        parsedTxt() {
            // let txt = this.txt;
            // if (window.screen.width>640 && txt.length>100) {
            //     return this.breaktext(txt, 80)
            // }     
            return  this.txt; 
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
@import '../../styl/rupture.styl'
.grecaptcha-badge
    position absolute !important
    bottom 3px !important
    right -190px !important
    opacity 0.2
    transition opacity 300ms ease
    &:hover
        opacity 1
.send-btn
    img
        height 50%
        display inline-block
        vertical-align middle
        padding 0 5px 0 0

.txtblock
    height 100%
    width 49%
    float left
    background url('assets/outblock-separator-wave.jpg') no-repeat center right / auto 100%
    box-sizing border-box
    padding-left 15%
    padding-right 5%
    padding-top 8%
    height 500px
    +below(1025px)
        padding-left 13%
        padding-top 13%
    +below(415px)
        background url('assets/outblock-separator-mobile-wave.jpg') no-repeat bottom center / 100% auto
        float none
        width auto
        padding-left 58px
        padding-top 15%
        height auto
        
    &:before
        content ''
        height 100%
        visibility hidden
        display inline-block
        vertical-align middle
    & > div
        display inline-block
        vertical-align middle
.formblock
    box-sizing border-box
    position relative
    padding-left 5%
    overflow hidden
    background-color #173142
    height 500px
    padding-top 100px
    padding-bottom 100px
    +below(415px)
        padding 75px 0 75px 58px
        height auto
    h5
        font-size 26px
        color lighten(#c6c6c8, 30)
    &.tu h5
        color #05a5e6
        position absolute
        top 50%
        transform translateY(-50%)
    .form
        padding-top 50px
        width 50%
        +below(1024px)
            width 80%
        +below(415px)
            padding-top 58px
        .send-btn
            width 145px
            height 43px
            background #21455f
            float right
            text-align center
            line-height 43px
            color lighten(#c6c6c8, 10)
            transition background 350ms ease, color 350ms ease
            &:hover
                background lighten(#21455f, 5)
        .field
            position relative
            padding-bottom 40px
            input, textarea
                width 100%
                background none
                border 0
                border-radius 0
                color #fff
                padding 0 0 5px 0
                border-bottom 1px solid #5d6f7d
                resize none
                &:active, &:focus
                    outline 0
            label
                position absolute
                left 0
                top 0
                color #a8adb1
                transform translate(0,0)
                transition all 300ms ease-out
                &.invalid
                    color rgba(#e44a4a, 0.9)
            input, textarea
                &:focus, &:valid
                    & + label
                        transform translate(0,-26px)
                        font-size 13px
                        &:after
                            content ':'
            &.invalid
                input:not(:valid)
                    border-color rgba(#e44a4a, 0.5)
                input.invalid-strong
                    border-color rgba(#e44a4a, 0.5)
                    color rgba(#e44a4a, 0.9)
</style>