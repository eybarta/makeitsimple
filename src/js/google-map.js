import { countrylist } from './country-list'

var markers = [],
    map,
    isMobile,
    isDesktop,
    isIE,
    mapHasBeenPinned = false;

export function initMap() {
    isMobile = window.screen.width<640;
    isDesktop = window.screen.width>1024;
    isIE = "ActiveXObject" in window;
    var latlng = new google.maps.LatLng(28,	0);
    var draggable = true;
    var myOptions = {
        zoom: isMobile ? 2 : 3,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e3df"
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
    map = new google.maps.Map(document.getElementById("google-map-area-57a583ea6e019"), myOptions);

    if (!isDesktop || isIE) {
        pinupMap();
    }
}
export function pinupMap() {
    if (!mapHasBeenPinned) {
        for (var i = 0; i < countrylist.length; i++) {
            addMarkerWithTimeout(countrylist[i], i * 50)
        }   
        mapHasBeenPinned = true;
    }
}


function addMarkerWithTimeout(country, timeout) {
    timeout = (isMobile || !window.chrome) ? 0 : timeout;
    window.setTimeout(function() {
        
        var marker_data = {
            position: new google.maps.LatLng(country.latlng[0],	country.latlng[1]),
            icon: { url: "dist/img/mis-pin.svg", scaledSize: new google.maps.Size(31, 29)},
            optimized: false,
            map: map,
            title: country.title,
        }
        if (!!window.chrome) {
            marker_data.animation = google.maps.Animation.DROP
        }
        let _event = isMobile ? 'dblclick' : 'click';
        markers.push(
            new google.maps.Marker(marker_data).addListener(_event, function() {
                window.open(country.link);
            })
        );
    }, timeout);
}