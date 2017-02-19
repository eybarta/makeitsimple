const countrylist = [{"country":"ALBANIA","latlng":[41.153332,20.168331]},{"country":"ARMENIA","latlng":[40.069099,45.038189]},{"country":"ARGENTINA","latlng":[-38.416097,-63.616672]},{"country":"AUSTRIA","latlng":[47.516231,14.550072]},{"country":"AUSTRALIA","latlng":[-25.274398,133.775136]},{"country":"AZERBAIJAN","latlng":[40.143105,47.576927]},{"country":"BELGIUM","latlng":[50.503887,4.469936]},{"country":"BULGARIA","latlng":[42.733883,25.48583]},{"country":"BELARUS","latlng":[53.709807,27.953389]},{"country":"CANADA","latlng":[56.130366,-106.346771]},{"country":"CHILE","latlng":[-35.675147,-71.542969]},{"country":"CHINA","latlng":[35.86166,104.195397]},{"country":"COLOMBIA","latlng":[4.570868,-74.297333]},{"country":"COSTA RICA","latlng":[9.748917,-83.753428]},{"country":"CYPRUS","latlng":[35.126413,33.429859]},{"country":"GERMANY","latlng":[51.165691,10.451526]},{"country":"DOMINICAN REPUBLIC","latlng":[18.735693,-70.162651]},{"country":"ECUADOR","latlng":[-1.831239,-78.183406]},{"country":"ESTONIA","latlng":[58.595272,25.013607]},{"country":"SPAIN","latlng":[40.463667,-3.74922]},{"country":"FINLAND","latlng":[61.92411,25.748151]},{"country":"FRANCE","latlng":[46.227638,2.213749]},{"country":"GEORGIA","latlng":[42.315407,43.356892]},{"country":"GREECE","latlng":[39.074208,21.824312]},{"country":"GUATEMALA","latlng":[15.783471,-90.230759]},{"country":"HONG KONG","latlng":[22.396428,114.109497]},{"country":"HONDURAS","latlng":[15.199999,-86.241905]},{"country":"CROATIA","latlng":[45.1,15.2]},{"country":"HUNGARY","latlng":[47.162494,19.503304]},{"country":"INDONESIA","latlng":[-0.789275,113.921327]},{"country":"ISRAEL","latlng":[31.046051,34.851612]},{"country":"INDIA","latlng":[20.593684,78.96288]},{"country":"ITALY","latlng":[41.87194,12.56738]},{"country":"JAPAN","latlng":[36.204824,138.252924]},{"country":"KYRGYZSTAN","latlng":[41.20438,74.766098]},{"country":"KOREA","latlng":[35.907757,127.766922]},{"country":"KAZAKHSTAN","latlng":[48.019573,66.923684]},{"country":"LITHUANIA","latlng":[55.169438,23.881275]},{"country":"LATVIA","latlng":[56.879635,24.603189]},{"country":"MACEDONIA","latlng":[41.608635,21.745275]},{"country":"MEXICO","latlng":[23.634501,-102.552784]},{"country":"MALAYSIA","latlng":[4.210484,101.975766]},{"country":"NICARAGUA","latlng":[12.865416,-85.207229]},{"country":"NETHERLANDS","latlng":[52.132633,5.291266]},{"country":"PANAMA","latlng":[8.537981,-80.782127]},{"country":"PERU","latlng":[-9.189967,-75.015152]},{"country":"PHILIPPINES","latlng":[12.879721,121.774017]},{"country":"POLAND","latlng":[51.919438,19.145136]},{"country":"PORTUGAL","latlng":[39.399872,-8.224454]},{"country":"PARAGUAY","latlng":[-23.442503,-58.443832]},{"country":"ROMANIA","latlng":[45.943161,24.96676]},{"country":"SERBIA","latlng":[44.016521,21.005859]},{"country":"RUSSIA","latlng":[61.52401,105.318756]},{"country":"SWEDEN","latlng":[60.128161,18.643501]},{"country":"SINGAPORE","latlng":[1.352083,103.819836]},{"country":"EL SALVADOR","latlng":[13.794185,-88.89653]},{"country":"SWAZILAND","latlng":[-26.522503,31.465866]},{"country":"THAILAND","latlng":[15.870032,100.992541]},{"country":"TURKEY","latlng":[38.963745,35.243322]},{"country":"TAIWAN","latlng":[23.69781,120.960515]},{"country":"UKRAINE","latlng":[48.379433,31.16558]},{"country":"UNITED KINGDOM","latlng":[55.378051,-3.435973]},{"country":"UNITED STATES","latlng":[37.09024,-95.712891]},{"country":"VENEZUELA","latlng":[6.42375,-66.58973]},{"country":"VIETNAM","latlng":[14.058324,108.277199]},{"country":"KOSOVO","latlng":[42.602636,20.902977]},{"country":"SOUTH AFRICA","latlng":[-30.559482,22.937506]}]

var markers = []; 
var map;
export function initMap() {
    var latlng = new google.maps.LatLng(34,	110);
    var draggable = true;
    var myOptions = {
        zoom: 3,
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
    map = new google.maps.Map(document.getElementById("google-map-area-57a583ea6e019"), myOptions);

    for (var i = 0; i < countrylist.length; i++) {
        addMarkerWithTimeout(countrylist[i].latlng, i * 50)
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(position[0],	position[1]),
            icon: "dist/img/mis-pin.png",
            animation: google.maps.Animation.DROP,
            map: map,
        }));
    }, timeout);
}