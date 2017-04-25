<template>
    <div>
        <router-view></router-view>
        <footer class="pt-bigger center-mobile">
                <ul>
                    <li>
                        <h6>Mission & Vision</h6>
                        <div>   
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
                        </div>
                    </li>
                    <li>
                        <h6>About Us</h6>
                        <div>
                            <p class="minitxt">Established in 1995, MIS Implants Technologies Ltd. is at the forefront of development and production of advanced products and solutions aimed to simplify implant dentistry. With our cutting edge facilities, MIS offers a complete range of premium quality dental implants, superstructures, tools and kits, regenerative solutions and digital dentistry. Distributed in over 65 countries, MIS provides unparalleled service to our customers.</p>
                            <a target="_blank" href="http://www.mis-implants.com" class="link pt-med">www.mis-implants.com<span>></span></a>
                        </div>
                    </li>
                    <li>
                        <h6>Contact Us</h6>
                        <div>
                            <p class="minitxt">MIS is deeply committed to our core values of quality, service, agility and innovation, integrity and caring; reflected in every step of our work process and supported by over 300 dedicated MIS employees. MIS products are distributed in over 60 countries worldwide through a well-established global distribution network.</p>
                            <a target="_blank" :href="btnLink" class="link pt-med" v-html="btnLabel"></a>
                        </div>
                    </li>
                    
                </ul>

                <small class="pb-med"><span>© MIS Corporation. All Rights Reserved.</span></small>
            </footer>
    </div>
</template>
<script>    
import { countrylist } from '../js/country-list'
export default {
    data() {
        return {
            country: null
        }
    },
    fetch: {
        country() {
            return !!localStorage.getItem('cc') ? `https://restcountries.eu/rest/v2/alpha/${localStorage.getItem('cc')}` : false;
        }
    },
    computed: {
        btnLabel() {
            let fulfilled = (!!this.country && this.country.fulfilled) || null;
            if (!!fulfilled) {
                    return 'Contact our distributor in ' + this.country.value.name + '  <span> ></span>';
            } else {
                return 'Contact your local distributor' + '  <span> ></span>';;
            }
        },
        btnLink() {
            let fulfilled = (!!this.country && this.country.fulfilled) || null;
            let vm = this;
            let link = 'http://www.mis-implants.com/MIS-Info/ContactUs.aspx';
            if (!!fulfilled) {
                let countryObj = _.find(countrylist, obj => { return obj.country.toLowerCase()===vm.country.value.name.toLowerCase() })

                if (!!countryObj) {
                    link = countryObj.link;
                }
            }
            return link;
        },
    }
}
</script>

