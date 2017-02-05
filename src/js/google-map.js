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
                position: new google.maps.LatLng(-33.8810, 151.2145),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8530, 151.2390),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker3 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8650, 151.1820),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker4 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8461344, 151.2864056),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker5 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8839491, 151.1450614),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker6 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8985798, 151.2009228),
                icon: "dist/img/mis-pin.png",
                map: map
            });
            var marker7 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.8396477, 151.1707442),
                icon: "dist/img/mis-pin.png",
                map: map
            });
        }