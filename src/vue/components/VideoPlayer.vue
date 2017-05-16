<template>
    <div :class="['video-wrapper', !!playing ? 'cinema' : '']" >
        <div id="videoHolder" @click="playvid($event)">
            <div v-if="!mobile"  id="hpVideoFull">
                <!-- start video controller -->
                <div id="vgalController" v-show="!hidden" :class="[hidden ? 'hide' : '']">
                    <div id="vgalDragger"><img src="./assets/trans30x30.png" /></div>
                    <div id="vgalHandleVal" class="vgalEx fadeAnimation"></div>
                    <div id="vgalHandle"    class="vgalEx fadeAnimation"><img src="./assets/jogEdge.png" /></div>
                    <div id="vgalTotalVal"  class="vgalEx fadeAnimation">0.00</div>
                    <div id="vgalTotal"     class="vgalEx fadeAnimation"><img src="./assets/jogEdgeHor.png" /></div>
                    <div id="vgalPalyPauseIcon" @click="playing=!playing; hidden=false">
                        <div class="vgalLine"></div>
                        <div class="vgalLine"></div>
                        <div class="vgalLine"></div>
                    </div>
                    <canvas id="vgalRingCanvas" width="270" height="270"></canvas>
                </div>
                <!-- end video controller -->
                <video v-show="!hidden" ref="vid" id="video1" class="" preload="auto" style="position:relative; width: 100%;" :muted="isMuted"></video>
            </div>
            <div v-else class="video-mobile">
                <button @click="playvid($event)" :class="['play-mobile', $route.params.pageid==='More_with_less' ? 'hidden' : '']"><img src="./assets/play-mobile.svg"></button>
                <video v-show="!hidden && !!playing" ref="vid" id="video1" class="" preload="auto" style="position:relative; width: 100%;" :muted="isMuted"></video>
            </div>
        </div>
        <div v-if="!hidden && !mobile" class="controls">
            
            <div class="control-wrap">
                <div id="hpVideoSoundControl" :class="[isMuted ? 'hpVideoMuteBtn' : 'hpVideoSoundBtn']" @click="isMuted=!isMuted"></div>
            </div>
            <button @click.prevent.stop="close" id="closeIntro" class="close-btn"></button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import '../../js/jquery-video-controller.js'
export default {
    props: ['vidurl', 'mobile'],
    data() {
        return {
            hidden: true,
            playing:false,
            isMuted: false
        }
    },
    mounted() {
        console.log('video player created >> ', this.$route.params);
        if (!this.mobile) {
            // this.init();
        }
        
      
    },
    methods: {
        init() {
            let $vid = $(this.$refs.vid);
            $vid.videoController({ videoUrl: this.vidurl});
            $vid.data('videoController').updateUI();
            // $("#video1").data('videoController').playVideoByURL(this.vidurl);
            // this.playing = true;
            $vid.data('videoController').setControlsActive(true);  
        },
        close() {
            this.closevid();
            this.$refs.vid.pause();
            this.$refs.vid.currentTime = 0;
            if (!this.mobile) {
                $(this.$refs.vid).data('videoController').updateUI();
            }
            
    

        },
        dispatchPlayEvent() {
            let event = new CustomEvent('playingvid'),
                el = document.getElementById('pageSwiperWrapper');
                el.dispatchEvent(event);
        },
        dispatchStopEvent() {
            let event = new CustomEvent('stoppedvid'),
                el = document.getElementById('pageSwiperWrapper'),
                el2 = document.getElementById("vgalController");
                el.dispatchEvent(event);
                el2.dispatchEvent(event);
        },
        playvid(e) {


            console.log("play vid >> ", e.target.id, " ::::: ", $(e.target).parents());


            if (e.target.id==="vgalController" || $(e.target).parents("#vgalController").length>0) {
                return;
            }

            this.hidden = false;
            this.playing = true;

            this.dispatchPlayEvent();
            
            console.log("WT FFF");
                
            this.$nextTick(function() {
                let vid = this.$refs.vid,
                    $vid = $(vid);
                if (!!this.mobile) {
                    vid.src = this.vidurl;
                    $(vid).off().on('webkitendfullscreen fullscreenchange',this.closevid);
                    vid.play();
                    vid.webkitEnterFullscreen();
                }
                else {
                    $vid.videoController({ videoUrl: this.vidurl});
                    $vid.data('videoController').updateUI();
                    $("#video1").data('videoController').playVideoByURL(this.vidurl);
                    // this.playing = true;
                    $vid.data('videoController').setControlsActive(true);  
                }
                
            })           
        },
        closevid() {
            this.hidden = true;
            this.playing = false;
            this.dispatchStopEvent();
        }

    }
}
</script>
<style lang="stylus">
.hide
    display none !important
.video-wrapper
    position relative
    height 100%
    overflow hidden
    #videoHolder, #hpVideoFull
        cursor pointer
        height 100%
    &.cinema
        background darken(gray, 88)
    video
        top 50%
        transform translateY(-50%)
.play-mobile
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
.video-mobile
    height 100%
    video
        position absolute
        width 100%
        top 50%
        left 50%
        transform translate(-50%,-50%)
        z-index 999
    button
        z-index 9991
        &.hidden
            opacity 0
.controls
    position absolute
    top 30px
    right 30px
    & > *
        opacity 0.7
        transition 300ms ease
        &:hover
            opacity 1
    .close-btn
        position relative
        top auto
        left auto
        right auto
        bottom auto
        display inline-block
        vertical-align middle
        border-radius 22.5px
        width 42px
        height @width
        box-sizing border-box
        margin-left 5px
    
    .control-wrap
        position relative
        display inline-block
        vertical-align middle
        padding-right 6px
        &:after
            content ''
            position absolute
            height 90%
            top 50%
            right 0
            transform translateY(-50%)
            width 1px
            background rgba(#e1e1e1, 0.3)
            transition background 300ms ease
        &:hover:after
            background rgba(#e1e1e1, 0.2)
    #hpVideoSoundControl
        width 33px
        height 33px
        z-index 130
        background-position center center
        background-repeat no-repeat
        background-size 90%
        cursor pointer
        position relative
        &.hpVideoSoundBtn
            background-image url(assets/sound.svg)
        &:after
            content ''
            opacity 0
        &.hpVideoMuteBtn
            background-image url(assets/sound.svg)
            &:after
                content ''
                opacity 1
                position absolute
                height 86%
                top 50%
                left 50%
                transform rotate(-45deg) translate(11px, -10px)
                width 1px
                background  #01cefd
                transition opacity 300ms ease
                
        
            

#vgalController
    width 480px
    height 480px
    position absolute
    left 50%
    top 50%
    margin-top -240px
    margin-left -240px
    -webkit-transition opacity 0.5s ease
    -moz-transition opacity 0.5s ease
    -o-transition opacity 0.5s ease
    transition opacity 0.5s ease
    z-index 500
    opacity 0
    background-position center center
    background-repeat no-repeat
    cursor pointer


#vgalRingCanvas
    z-index 106
    position absolute
    width 270px
    height 270px
    top 105px
    left 105px
    border solid 0px gray

#vgalHandle
    z-index 107
    position absolute
    width 30px
    height 30px
    cursor pointer
    transform-origin top center
    -webkit-transform-origin top center
    -moz-transform-origin top center
    -o-transform-origin top center

#vgalHandleVal
    z-index 107
    position absolute
    width 30px
    text-align center
    transform-origin top center
    -webkit-transform-origin top center
    -moz-transform-origin top center
    -o-transform-origin top center
    color white

#vgalTotal
    z-index 107
    position absolute
    width 30px
    height 30px
    top 225px
    left 82px

#vgalTotalVal
    z-index 107
    position absolute
    width 30px
    height 30px
    top 234px
    left 42px
    color white
    text-align right

#vgalDragger
    z-index 120
    position absolute
    width 30px
    height 30px
    top 0px
    left 0px
    cursor pointer
    transform-origin top center
    -webkit-transform-origin top center
    -moz-transform-origin top center
    -o-transform-origin top center

#vgalPalyPauseIcon
    z-index 107
    position absolute
    width 270px
    height 270px
    top 105px
    left 105px
    .vgalLine
        position absolute
        width 3px
        height 152px
        background-color #fff
        overflow hidden
        top 0px
        left 0px
        transform-origin center center
        -webkit-transform-origin center center
        -moz-transform-origin center center
        -o-transform-origin center center
        transition all ease 0.8s
        -moz-transition all ease 0.8s
        -webkit-transition all ease 0.8s
        -o-transition all ease 0.8s
        &:nth-child(1)
            top 59px
            left 112px
        &:nth-child(2)
            top 59px
            left 154px
        &:nth-child(3)
            top 59px
            left 154px
        &.play
            &:nth-child(1)
                top 59px
                left 91px
            &:nth-child(2)
                transform rotate(60deg)
                -moz-transform rotate(60deg)
                -webkit-transform rotate(60deg)
                -o-transform rotate(60deg)
                top 97px
                left 156px
            &:nth-child(3)
                transform rotate(120deg)
                -moz-transform rotate(120deg)
                -webkit-transform rotate(120deg)
                -o-transform rotate(120deg)
                top 22px
                left 156px
</style>