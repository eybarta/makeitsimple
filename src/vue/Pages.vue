<template>
        <div class="pages-wrap">

        <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <swiper-slide v-for="slide in slides" 
                        :hash="slide.hash"
                        :introBg="slide.introBg"
                        :infoblock="slide.infoblock"
                        :outblock="slide.outblock"
                        :infoblock2="slide.infoblock2"
                        :track-by="slide.hash"
                         ></swiper-slide>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                 <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
        </div>
        <footer>

            <ul class="centered">
                <li>
                    <h6>Mission & Vision</h6>
                    <p class="minitxt">
                        MIS Vision:<br>
                        To be the preferred choice of dentists worldwide by offering simple, creative and comprehensive solutions, and to become the largest global dental implant producer.
                    </p>
                    <div class="minitxt">
                        MIS Values:
                        <ul>
                            <li>- Quality</li>
                            <li>- Service</li>
                            <li>- Agility & Innovation</li>
                            <li>- Integrity & Caring</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h6>About Us</h6>
                    <p class="minitxt">Established in 1995, MIS Implants Technologies Ltd. is at the forefront of development and production of advanced products and solutions aimed to simplify implant dentistry. With our cutting edge facilities, MIS offers a complete range of premium quality dental implants, superstructures, tools and kits, regenerative solutions and digital dentistry. Distributed in over 65 countries, MIS provides unparalleled service to our customers.</p>

                    <a href="http://www.mis-implants.com" class="link pt-med">www.mis-implants.com</a>
                </li>
                <li>
                    <h6>Contact Us</h6>
                    <p class="minitxt">MIS is deeply committed to our core values of quality, service, agility and innovation, integrity and caring; reflected in every step of our work process and supported by over 300 dedicated MIS employees. MIS products are distributed in over 60 countries worldwide through a well-established global distribution network.</p>
                    <a href="http://www.mis-implants.com" class="link pt-med">Contact your local distributer</a>
                    
                </li>
                
            </ul>

            <small class="pt-bigger pb-min">© MIS Corporation. All Rights Reserved.</small>
        </footer>
    </div>
</template>
<script>
import { PageSlides } from '../js/pages-data';
import SwiperSlide from './SwiperSlide.vue';
export default {
    data() {
        return {
            slides: PageSlides
        }
    },
    components: {
        SwiperSlide
    }
}
</script>
<style lang="stylus">
</style>
