<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MIS | Make It Simple</title>
     <link rel="icon" href="favicon2.ico" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<link rel="stylesheet" href="./dist/css/aos.css">-->
    <link rel="stylesheet" href="/dist/css/style.css?<%= new Random().Next(0,10000).ToString() %>">
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
    <!--<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>-->
</head>
<body class="root">
    <div id="simple"></div>
    <script type='text/javascript' src='http://maps.google.com/maps/api/js?key=AIzaSyDSa2Yj_l65LMWLN-ukJ_tuG96KVMLSNdE'></script>
    <script src="/dist/js/swiper.min.js"></script>
    <script src="/dist/js/script.js?<%= new Random().Next(0,10000).ToString() %>"></script>
    
</body>
</html>