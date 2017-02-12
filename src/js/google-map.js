export function initMap() {
            var latlng = new google.maps.LatLng(32.919945,  35.290146);
            var draggable = true;
            var myOptions = {
                zoom: 13,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#fff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#fff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#fff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }],
                draggable: draggable,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                scrollwheel: false
            };
            var map = new google.maps.Map(document.getElementById("google-map-area-57a583ea6e019"), myOptions);
            var marker = new google.maps.Marker({
                position: latlng,
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(41.153332,	20.168331), // ALBANIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(40.069099,	45.038189), // ARMENIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker3 = new google.maps.Marker({
                position: new google.maps.LatLng(-38.416097,	-63.616672),    // ARGENTINA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker4 = new google.maps.Marker({
                position: new google.maps.LatLng(47.516231,	14.550072), // AUSTRIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker5 = new google.maps.Marker({
                position: new google.maps.LatLng(-25.274398, 133.775136),   // AUSTRALIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker6 = new google.maps.Marker({
                position: new google.maps.LatLng(40.143105,	47.576927), // AZERBAIJAN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker7 = new google.maps.Marker({
                position: new google.maps.LatLng(50.503887,	4.469936),  // BELGIUM
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker8 = new google.maps.Marker({
                position: new google.maps.LatLng(42.733883, 25.48583),  // BULGARIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker9 = new google.maps.Marker({
                position: new google.maps.LatLng(53.709807,	27.953389),  // BELARUS
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker10 = new google.maps.Marker({
                position: new google.maps.LatLng(56.130366,	-106.346771),  // CANADA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker11 = new google.maps.Marker({
                position: new google.maps.LatLng(-35.675147, -71.542969),  // CHILE
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker12 = new google.maps.Marker({
                position: new google.maps.LatLng(35.86166, 104.195397),  // CHINA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker13 = new google.maps.Marker({
                position: new google.maps.LatLng(4.570868, -74.297333),  // COLOMBIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker14 = new google.maps.Marker({
                position: new google.maps.LatLng(9.748917, -83.753428),  // COSTA RICA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker15 = new google.maps.Marker({
                position: new google.maps.LatLng(35.126413,	33.429859),  // CYPRUS
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker16 = new google.maps.Marker({
                position: new google.maps.LatLng(51.165691,	10.451526),  // GERMANY
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker17 = new google.maps.Marker({
                position: new google.maps.LatLng(18.735693, -70.162651),  // DOMINICAN REPUBLIC
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker18 = new google.maps.Marker({
                position: new google.maps.LatLng(-1.831239, -78.183406),  // ECUADOR
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker19 = new google.maps.Marker({
                position: new google.maps.LatLng(58.595272,	25.013607),  // ESTONIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker20 = new google.maps.Marker({
                position: new google.maps.LatLng(40.463667,	-3.74922),  // SPAIN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker21 = new google.maps.Marker({
                position: new google.maps.LatLng(61.92411,	25.748151),  // FINLAND
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker22 = new google.maps.Marker({
                position: new google.maps.LatLng(46.227638,	2.213749),  // FRANCE
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker23 = new google.maps.Marker({
                position: new google.maps.LatLng(42.315407,	43.356892),  // GEORGIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker24 = new google.maps.Marker({
                position: new google.maps.LatLng(39.074208,	21.824312),  // GREECE
                icon: "dist/img/mis-pin.png",
                map: map
            });
            
            var marker25 = new google.maps.Marker({
                position: new google.maps.LatLng(15.783471,	-90.230759),  // GUATEMALA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker26 = new google.maps.Marker({
                position: new google.maps.LatLng(22.396428,	114.109497),  // HONG KONG
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker27 = new google.maps.Marker({
                position: new google.maps.LatLng(15.199999,	-86.241905),  // HONDURAS
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker28 = new google.maps.Marker({
                position: new google.maps.LatLng(45.1, 15.2),  // CROATIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker29 = new google.maps.Marker({
                position: new google.maps.LatLng(47.162494,	19.503304),  // HUNGARY
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker30 = new google.maps.Marker({
                position: new google.maps.LatLng(-0.789275,	113.921327),  // INDONESIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker31 = new google.maps.Marker({
                position: new google.maps.LatLng(31.046051,	34.851612),  // ISRAEL
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker32 = new google.maps.Marker({
                position: new google.maps.LatLng(20.593684,	78.96288),  // INDIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker33 = new google.maps.Marker({
                position: new google.maps.LatLng(41.87194,	12.56738),  // ITALY
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker34 = new google.maps.Marker({
                position: new google.maps.LatLng(36.204824,	138.252924),  // JAPAN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker35 = new google.maps.Marker({
                position: new google.maps.LatLng(41.20438, 74.766098),  // KYRGYZSTAN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker36 = new google.maps.Marker({
                position: new google.maps.LatLng(35.907757,	127.766922),  // KOREA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker37 = new google.maps.Marker({
                position: new google.maps.LatLng(48.019573,	66.923684),  // KAZAKHSTAN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker38 = new google.maps.Marker({
                position: new google.maps.LatLng(55.169438,	23.881275),  // LITHUANIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker39 = new google.maps.Marker({
                position: new google.maps.LatLng(56.879635,	24.603189),  // LATVIA
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker40 = new google.maps.Marker({
                position: new google.maps.LatLng(41.608635,	21.745275),  // MACEDONIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker41 = new google.maps.Marker({
                position: new google.maps.LatLng(23.634501,	-102.552784),  // MEXICO
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker42 = new google.maps.Marker({
                position: new google.maps.LatLng(4.210484,	101.975766),  // MALAYSIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker43 = new google.maps.Marker({
                position: new google.maps.LatLng(12.865416,	-85.207229),  // NICARAGUA
                icon: "dist/img/mis-pin.png",
                map: map
            });

             var marker44 = new google.maps.Marker({
                position: new google.maps.LatLng(52.132633, 5.291266),  // NETHERLANDS
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker45 = new google.maps.Marker({
                position: new google.maps.LatLng(8.537981,	-80.782127),  // PANAMA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker46 = new google.maps.Marker({
                position: new google.maps.LatLng(-9.189967,	-75.015152),  // PERU
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker47 = new google.maps.Marker({
                position: new google.maps.LatLng(12.879721,	121.774017),  // PHILIPPINES
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker48 = new google.maps.Marker({
                position: new google.maps.LatLng(51.919438,	19.145136),  // POLAND
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker49 = new google.maps.Marker({
                position: new google.maps.LatLng(39.399872,	-8.224454),  // PORTUGAL
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker50 = new google.maps.Marker({
                position: new google.maps.LatLng(-23.442503, -58.443832),  // PARAGUAY
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker51 = new google.maps.Marker({
                position: new google.maps.LatLng(45.943161,	24.96676),  // ROMANIA
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker52 = new google.maps.Marker({
                position: new google.maps.LatLng(44.016521,	21.005859),  // SERBIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker53 = new google.maps.Marker({
                position: new google.maps.LatLng(61.52401, 105.318756),  // RUSSIA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker54 = new google.maps.Marker({
                position: new google.maps.LatLng(60.128161,	18.643501),  // SWEDEN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker55 = new google.maps.Marker({
                position: new google.maps.LatLng(1.352083,	103.819836),  // SINGAPORE
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker56 = new google.maps.Marker({
                position: new google.maps.LatLng(13.794185,	-88.89653),  // EL SALVADOR
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker57 = new google.maps.Marker({
                position: new google.maps.LatLng(-26.522503, 31.465866),  // SWAZILAND
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker58 = new google.maps.Marker({
                position: new google.maps.LatLng(15.870032,	100.992541),  // THAILAND
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker59 = new google.maps.Marker({
                position: new google.maps.LatLng(38.963745,	35.243322),  // TURKEY
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker60 = new google.maps.Marker({
                position: new google.maps.LatLng(23.69781,	120.960515),  // TAIWAN
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker61 = new google.maps.Marker({
                position: new google.maps.LatLng(48.379433,	31.16558),  // UKRAINE
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker62 = new google.maps.Marker({
                position: new google.maps.LatLng(55.378051,	-3.435973),  // UNITED KINGDOM
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker63 = new google.maps.Marker({
                position: new google.maps.LatLng(37.09024,	-95.712891),  // UNITED STATES
                icon: "dist/img/mis-pin.png",
                map: map
            });

            var marker64 = new google.maps.Marker({
                position: new google.maps.LatLng(6.42375, -66.58973),  // VENEZUELA
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker65 = new google.maps.Marker({
                position: new google.maps.LatLng(14.058324,	108.277199),  // VIETNAM
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker66 = new google.maps.Marker({
                position: new google.maps.LatLng(42.602636,	20.902977),  // KOSOVO
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker67 = new google.maps.Marker({
                position: new google.maps.LatLng(-30.559482, 22.937506),  // SOUTH AFRICA
                icon: "dist/img/mis-pin.png",
                map: map
            });
        }