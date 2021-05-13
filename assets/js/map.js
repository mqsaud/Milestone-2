let map;

// Coordinate values

let gardenLocations = [{
        latlng: {
            lat: 51.75432,
            lng: -9.56634
        },
        // Glengarriff Woods
        content: `<h4 class="info-name">Glengarriff Wood</h4>
    <h5 class="cat">Wildlife Refuge</h5> 
    <h6 class="rating">Rating: 4.8 *****   </h6>`
    },

    {
        latlng: {
            lat: 51.73118,
            lng: -8.90029
        },
        //  Glenview Garden
        content: `<h4 class="info-name">Glenview Gardens</h4>
    <h5 class="cat">Garden</h5>
    <h6 class="rating">Rating: 4.6 *****</h6>`
    },
    {
        latlng: {
            lat: 51.66806,
            lng: -9.11231
        },
        // Curraghalcky Lake
        content: `<h4 class="info-name">Curraghalcky Lake</h4>
    <h5 class="cat">Lake</h5>
    <h6 class="rating">Rating: 4.9 *****</h6>`
    },
    // { latlng: {lat:    , lng: }

    // },
    // { latlng: {lat:    , lng: }

    // },
    // { latlng: {lat:    , lng: }

    // },
    // { latlng: {lat:    , lng: }

    // },
    // { latlng: {lat:    , lng: }

    // },
]


function initMap(myLocations) {
    let coordinates = {
        lat: 51.83894,
        lng: -9.16518
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coordinates,
        disableDefaultUI: true
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    if (myLocations) {
        for (let i = 0; i < myLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: myLocations[i].latlng,
                map: map,
                animation: google.maps.Animation.DROP,
            });
           // Create info window

            const infowindow = new google.maps.InfoWindow({
                content: myLocations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null; 
        }
    }

}


// Event listener for Discover Buttons.

document.getElementById("garden").addEventListener("click", () => {
    initMap(gardenLocations);
});