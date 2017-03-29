﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MIS | Make It Simple</title>
     <link rel="icon" href="./favicon.ico" type="image/png" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./dist/css/aos.css">
    <link rel="stylesheet" href="./dist/css/style.css">
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-24075100-2', 'auto');
    ga('send', 'pageview');

    </script>
    
</head>
<body class="root">
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
            <a href="#top" class="logo"><img src="./dist/img/logo_makeitsimple.svg"></a>
        </div>
    </header>
    <div class="wrap">
         <!--
                Top Intro Section with intro animation and intro video
                // LOADED WITH VUE**
            -->
        <intro-section></intro-section>
        <div id="rest" class="rest-of-page" style="display:block;">
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
                    <h2 class="flip-title pb-bigger">
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
                                    <a href="pages.html#More_with_less">
                                        <img src="./dist/img/slides/mis-m.png" alt="More with less">
                                    </a>
                                    <div class="minitxt">More with less</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Agility_is_in_our_nature">
                                        <img src="./dist/img/slides/mis-a.png" alt="Agility is in our nature">
                                    </a>
                                    <div class="minitxt">Agility is in our nature</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Key_to_satisfied_patients"> 
                                        <img src="./dist/img/slides/mis-k.png" alt="Key to satisfied patients">
                                    </a>
                                    <div class="minitxt">Key to satisfied patients</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Easy_with_every_product">
                                        <img src="./dist/img/slides/mis-e.png" alt="Easy with every product">
                                    </a>
                                    <div class="minitxt">Easy with every product</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Innovation_leading_the_way">
                                        <img src="./dist/img/slides/mis-i.png" alt="Innovation leading the way">
                                    </a>
                                    <div class="minitxt">Innovation leading the way</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Technology_taken_to_the_limits"> 
                                        <img src="./dist/img/slides/mis-t.png" alt="Technology taken to the limits">
                                    </a>
                                    <div class="minitxt">Technology taken to the limits</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Service_in_every_step_of_the_process"> 
                                        <img src="./dist/img/slides/mis-s.png" alt="Service in every step of the process">
                                    </a>
                                    <div class="minitxt">Service in every step of the process</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Integrity_unwavering"> 
                                        <img src="./dist/img/slides/mis-i2.png" alt="Integrity unwavering">
                                    </a>
                                    <div class="minitxt">Integrity unwavering</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Many_years_of_experience_and_expertise"> 
                                        <img src="./dist/img/slides/mis-m2.png" alt="Many years of experience and expertise">
                                    </a>
                                    <div class="minitxt">Many years of experience and expertise</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Preferred_choice_of_dentists_worldwide"> 
                                        <img src="./dist/img/slides/mis-p.png" alt="Preferred choice of dentists worldwide">
                                    </a>                                
                                    <div class="minitxt">Preferred choice of dentists worldwide</div>
                                </div>

                                <div class="swiper-slide">
                                    <a href="pages.html#Long_and_short_term_qualitative_research"> 
                                        <img src="./dist/img/slides/mis-l.png" alt="Long & short term qualitative research">
                                    </a>
                                    <div class="minitxt">Long & short term qualitative research</div>
                                </div>
                                <div class="swiper-slide">
                                    <a href="pages.html#Everything_the_dentist_needs"> 
                                        <img src="./dist/img/slides/mis-e2.png" alt="Everything the dentist needs">
                                    </a>
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
                            <a target="_blank" href="http://www.vconcept.com">VCONCEPT Minisite<span>></span></a>
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
                            <p class="minitxt">MIS is deeply committed to our core values of quality, service, agility and innovation, integrity and caring; reflected in every step of our work process and supported by over 300 dedicated MIS employees. MIS products are distributed in over 65 countries worldwide through a well-established global distribution network.</p>
                            <a target="_blank" href="http://www.mis-implants.com/MIS-Info/ContactUs.aspx" class="link pt-med">Contact your local distributer <span> ></span></a>
                        </div>
                    </li>
                    
                </ul>

                <small class="pb-med"><span>&copy; MIS Implants Technologies Ltd.</span></small>
            </footer>
        </div>
    </div>

    <script type='text/javascript' src='http://maps.google.com/maps/api/js?key=AIzaSyDSa2Yj_l65LMWLN-ukJ_tuG96KVMLSNdE'></script>
    <script src="./dist/js/swiper.min.js"></script>
    <script src="./dist/js/script.js?<%= new Random().Next(0,10000).ToString() %>"></script>
</body>
</html>