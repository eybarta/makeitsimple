<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MIS | Make It Simple</title>
     <link rel="icon" href="favicon2.ico" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<link rel="stylesheet" href="./dist/css/aos.css">-->
    <link rel="stylesheet" href="/dist/css/style.css">
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-24075100-2', 'auto');
    ga('send', 'pageview');

    </script>
    <script>
        localStorage.setItem('cc', "<%=cc %>");
    </script>
</head>
<body class="root">
    <div id="simple"></div>
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
    <script type='text/javascript' src='http://maps.google.com/maps/api/js?key=AIzaSyDSa2Yj_l65LMWLN-ukJ_tuG96KVMLSNdE'></script>
    <script src="/dist/js/swiper.min.js"></script>
    <script src="/dist/js/script.js?<%= new Random().Next(0,10000).ToString() %>"></script>
    
</body>
</html>