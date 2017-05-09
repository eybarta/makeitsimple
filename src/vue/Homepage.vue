<template>
    <main>
        <header class="loading">
            <button id="toggle" class="toggler"></button>
            <div class="contain">
                <ul class="nav">
                    <li><a href="#top">Home</a></li>
                    <li><a href="#why">Why simple</a></li>
                    <li><a href="#make">Make It simple</a></li>
                    <li><a href="#faq">Frequently Asked Questions</a></li>
                    <li><a href="#more">Simply More information</a></li>
                </ul>
                <a href="#top" class="logo"><img src="/dist/img/logo_makeitsimple.svg"></a>
            </div>
        </header>
        <div class="wrap">
            <!--
                    Top Intro Section with intro animation and intro video
                    // LOADED WITH VUE**
                -->
            <intro-section></intro-section>
            <div id="rest" class="rest-of-page">
                <div class="preview-section" id="why">
                    <div class="center">
                        <img id="bigGraphic" class="big_graphic" src="dist/img/intro_graphic.jpg" alt="MIS Implants">
                        <div class="infobox">
                            <div class="info-title">
                                <h2 class="mb-big">Why Simple?</h2>
                                <p class="sub-title txt">Simplification is a strategic imperative for MIS. We believe that this is the key to unlocking innovation and positioning ourselves for future success in an increasingly complex world.</p>
                            </div>
                            <div class="item-group group-3">
                                <div class="item">
                                    <img src="dist/img/circle-simplify.png" alt="Simplify">
                                    <p class="minitxt">
                                        <strong>Our mission</strong> is to simplify implant dentistry. It is built into everything we do at MIS from research to engineering to product education.
                                    </p>
                                </div>
                                <div class="item">
                                    <img src="dist/img/circle-implant.png" alt="Implant">
                                    <p class="minitxt">
                                        <strong>To offer creative</strong> and comprehensive solutions to dental practitioners who are looking to simplify their practice and provide a better service to their patients.
                                    </p>
                                </div>
                                <div class="item">
                                    <img src="dist/img/circle-multi-implants.png" alt="Multi Implants">
                                    <p class="minitxt">
                                        <strong>To become the largest</strong> global dental implants manufacturer by making it simple for everyone, everywhere to use, enjoy and benefit from our products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="make" class="">
                    <div class="mis-slider pb-bigger center-mobile">
                        <h2 class="flip-title pb-bigger" id="makeitsimple">
                            <span class="title-right"><span>MIS, Make It Simple</span></span>
                            <span class="subtxt subtitle-left">Because simplicity is as simple as you make it.</span>
                        </h2>

                        <!--
                        // SLIDER >> MAKE IT SIMPLE
                        -->
                        <div class="swiper-control">
                            <div class="swiper-container mis-swiper-container">
                                <!-- Additional required wrapper -->
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/More_with_less">
                                            <img src="/dist/img/slides/mis-m.png" alt="More with less">
                                        </router-link>
                                        <div class="minitxt">More with less</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Agility_is_in_our_nature">
                                            <img src="/dist/img/slides/mis-a.png" alt="Agility is in our nature">
                                        </router-link>
                                        <div class="minitxt">Agility is in our nature</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Key_to_satisfied_patients"> 
                                            <img src="/dist/img/slides/mis-k.png" alt="Key to satisfied patients">
                                        </router-link>
                                        <div class="minitxt">Key to satisfied patients</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Easy_with_every_product">
                                            <img src="/dist/img/slides/mis-e.png" alt="Easy with every product">
                                        </router-link>
                                        <div class="minitxt">Easy with every product</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Innovation_leading_the_way">
                                            <img src="/dist/img/slides/mis-i.png" alt="Innovation leading the way">
                                        </router-link>
                                        <div class="minitxt">Innovation leading the way</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Technology_taken_to_the_limits"> 
                                            <img src="/dist/img/slides/mis-t.png" alt="Technology taken to the limits">
                                        </router-link>
                                        <div class="minitxt">Technology taken to the limits</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Service_in_every_step_of_the_process"> 
                                            <img src="/dist/img/slides/mis-s.png" alt="Service in every step of the process">
                                        </router-link>
                                        <div class="minitxt">Service in every step of the process</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Integrity_unwavering"> 
                                            <img src="/dist/img/slides/mis-i2.png" alt="Integrity unwavering">
                                        </router-link>
                                        <div class="minitxt">Integrity unwavering</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Many_years_of_experience_and_expertise"> 
                                            <img src="/dist/img/slides/mis-m2.png" alt="Many years of experience and expertise">
                                        </router-link>
                                        <div class="minitxt">Many years of experience and expertise</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Preferred_choice_of_dentists_worldwide"> 
                                            <img src="/dist/img/slides/mis-p.png" alt="Preferred choice of dentists worldwide">
                                        </router-link>          
                                        <div class="minitxt">Preferred choice of dentists worldwide</div>
                                    </div>

                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Long_and_short_term_qualitative_research"> 
                                            <img src="/dist/img/slides/mis-l.png" alt="Long & short term qualitative research">
                                        </router-link>
                                        <div class="minitxt">Long & short term qualitative research</div>
                                    </div>
                                    <div class="swiper-slide">
                                        <router-link to="Default.aspx/Everything_the_dentist_needs"> 
                                            <img src="/dist/img/slides/mis-e2.png" alt="Everything the dentist needs">
                                        </router-link>
                                        <div class="minitxt">Everything the dentist needs</div>
                                    </div>
                                </div>
                            </div>
                            <!-- If we need navigation buttons -->
                                <div class="swiper-button-prev mis-prev"></div>
                                <div class="swiper-button-next mis-next"></div>
                                <!-- If we need pagination -->
                                <div class="swiper-pagination mis-swiper-pagination"></div>
                        </div>
                    </div>
                    <!--
                        Video slider with gradient background
                        // LOADED WITH VUE**
                    -->
                    <video-slider></video-slider>
                </div>
                <!--
                    FAQ block
                    // LOADED WITH VUE**
                -->
                <faq></faq>
                
                <div class="google-map-wrapper" id="gmap">
                    <div class="google-map" id="google-map-area-57a583ea6e019" style="width:100%; height:800px;">
                        &nbsp;
                    </div>
                    <h4>Double click to open each country</h4>
                </div>
                <div class="info-block gutter-both center info-hp" id="more">
                    <h2 id="infoTitle" class="mb-max tcenter">SIMPLY MORE INFORMATION</h2>
                    <ul class="group-4">
                        <li>
                            <div class="img-wrap">
                                <img src="dist/img/prints.svg" alt="Printing Catalog">
                            </div>
                            <div class="out-links">
                                <a target="_blank" id="conicalLink" href="http://www.mis-implants.com/Media/Printed-Materials/Products.aspx?#37484">Conical Con. Catalog <span>></span></a>
                                <a target="_blank" id="internalLink" href="http://www.mis-implants.com/Media/Printed-Materials/Products.aspx?#2560">Internal Hex. Catalog <span>></span></a>
                            </div>
                        </li>
                        <li class="m0 pl2">
                            <div class="img-wrap">
                                <img src="dist/img/implants.svg" alt="MIS Implants">
                            </div>
                            <div class="out-links">
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants.aspx">Our Implants <span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants/v3.aspx">V3 Implant <span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants/c1.aspx">C1 Implant <span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Products/Implants/seven.aspx">SEVEN Implant <span>></span></a>
                            </div>
                        </li>
                        <li>
                            <div class="img-wrap">
                                <img src="dist/img/www.svg" alt="Mis Main Website">
                            </div>
                            <div class="out-links">
                                <a target="_blank" href="http://www.mis-implants.com">MIS Main Website<span>></span></a>
                                <a target="_blank" href="http://v3-implant.com">V3 Minisite<span>></span></a>
                                
                            </div>

                        </li>
                        <li>
                            <div class="img-wrap">
                                <img src="dist/img/eye.svg" alt="Printed Materials">
                            </div>
                            <div class="out-links">
                                <a target="_blank" href="http://www.mis-implants.com/Media/Printed-Materials/Products.aspx">Printed Materials<span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Media/Image-Gallery/Products.aspx">Image Gallery<span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Media/Movies/Products.aspx">Videos<span>></span></a>
                                <a target="_blank" href="http://www.mis-implants.com/Media/Movies/Lectures.aspx">Lectures<span>></span></a>
                            </div>
                        </li>
                    </ul>
                </div>
                
               
            </div>
        </div>
    </main>
</template>

<script>
// COMPONENTS
import IntroSection from './components/IntroSection.vue'
import Faq from './components/Faq.vue'
import VideoSlider from './components/VideoSlider.vue'

import $ from 'jquery'

import { initIntroAnimation } from '../js/intro-animation'
// import { initIntroVideo } from '../js/intro-video'
import { initSwiper } from '../js/swiper'
import { initMap } from '../js/google-map';
import { initScrollNav } from '../js/scroll-nav'
import { storageAvailable } from '../js/utils'





export default {
    props: ['country'],
    data() {
        return {
            desktop: $(window).width()>1023,
            titletxt: "SIMPLY MORE INFORMATION"
            
        }
    },
    components: {
        IntroSection,
        Faq,
        VideoSlider
    },
    mounted() {
        console.log('hp created');
        $("header").css({'visibility': 'hidden'});
        if ($("#rest").is(":visible")) initSwiper();
        initMap();
        this.bindEvents();
        if (!!this.desktop && !this.isMozillaOrIE) {
            initIntroAnimation();
        }
        else {
            $("#bigGraphic").attr('src', 'dist/img/mobile-intro-graphic.jpg');

            // fix pdf links for mobile on index page
            $("#conicalLink").attr('href', 'http://www.mis-implants.com/upload/PDF/Products/MIS_Conical_Connection_Catalog_2017_(MC-PCCSE)_Rev3.pdf')
            $("#internalLink").attr('href', 'http://www.mis-implants.com/upload/PDF/Products/MIS_Internal_Hex_Catalog_2016_(MC-CIH06)_Rev13.pdf')
        }
        this.$nextTick(function() {
            initScrollNav();
            if (storageAvailable('localStorage')) {
                localStorage.removeItem('pageIndex');
            }

        })
    },
    methods: {
        bindEvents() {
            $(window).on('resize.title', this.titleTextHandler)
            this.titleTextHandler();
        },
        titleTextHandler() {
            let isDevice = $(window).width()<640;
            $("#infoTitle").html(isDevice ? _.replace(this.titletxt, /\s/g, '<br>') : this.titletxt)
            if (isDevice) {
                $("#infoTitle").addClass('breaked')
            }
            else {
                $("#infoTitle").removeClass('breaked')
                
            }


        }
    },
    computed: {
        isMozillaOrIE() {
            let ua = window.navigator.userAgent;
            return (/firefox/gi.test(ua) || "ActiveXObject" in window);   
        }
    }
}
</script>
<style lang="stylus">
</style>
