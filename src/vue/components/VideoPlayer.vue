<template>
    <div class="video-wrapper">
        <div id="videoHolder">
            <div id="hpVideoFull">
                <!-- start video controller -->
                <div id="vgalController">
                    <div id="vgalDragger"><img src="./assets/trans30x30.png" /></div>
                    <div id="vgalHandleVal" class="vgalEx fadeAnimation"></div>
                    <div id="vgalHandle"    class="vgalEx fadeAnimation"><img src="./assets/jogEdge.png" /></div>
                    <div id="vgalTotalVal"  class="vgalEx fadeAnimation">0.00</div>
                    <div id="vgalTotal"     class="vgalEx fadeAnimation"><img src="./assets/jogEdgeHor.png" /></div>
                    <div id="vgalPalyPauseIcon">
                        <div class="vgalLine"></div>
                        <div class="vgalLine"></div>
                        <div class="vgalLine"></div>
                    </div>
                    <canvas id="vgalRingCanvas" width="270" height="270"></canvas>
                </div>
                <!-- end video controller -->

                <video id="video1" class="" preload="auto" style="position:relative; width: 100%;" :muted="isMuted"></video>
            </div>
            
        </div>
        <div v-if="playing" class="controls">
            <button @click.prevent.stop="closeTriggerHandler" id="closeIntro" class="close-btn"></button>
            <div id="hpVideoSoundControl" :class="[isMuted ? 'hpVideoMuteBtn' : 'hpVideoSoundBtn']" @click="isMuted=!isMuted"></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import '../../js/jquery-video-controller.js'
export default {
    props: ['vidurl'],
    data() {
        return {
            playing:false,
            isMuted: false
        }
    },
    mounted() {
        console.log('video player created');
        this.init();
      
    },
    methods: {
        init() {
            $("#video1").videoController();
            $("#video1").data('videoController').updateUI();
            // $("#video1").data('videoController').playVideoByURL(this.vidurl);
            // this.playing = true;
            $("#video1").data('videoController').setControlsActive(true);  
        },
    }
}
</script>
<style lang="stylus">
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
        float right
        top initial
        left initial
        border-radius 22.5px
        width 42px
        height @width
        box-sizing border-box
        margin-left 10px
    #hpVideoSoundControl
        width 45px
        height 45px
        float left
        z-index 130
        background-position center center
        background-repeat no-repeat
        cursor pointer
        &.hpVideoMuteBtn
            background-image url(assets/btnHpVideoSoundOff.png)
        &.hpVideoSoundBtn
            background-image url(assets/btnHpVideoSoundOn.png)

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

// .bgPlay
//     background-image url(images/videoPlay.png)

// .bgPause
//     background-image url(images/videoPause.png)

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