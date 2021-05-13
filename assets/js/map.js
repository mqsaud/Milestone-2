let map;

// Coordinate values
// Nature and gardens
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
            lat: 51.84264,
            lng: -8.48589
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
   { 
   latlng: {lat:51.83209 , 
	        lng:-9.35462 
	       },
    // Gougane barra National Forest Park
    content:`<h4 class="info-name">Gougane Barra</h4>
    <h5 class="cat">National Forest Park</h5>
    <h6 class="rating">Rating:4.9 ***** </h6>`
 },
 { 
   latlng: {lat:51.76367 , 
	        lng:-9.59365 
	       },
    // Pooleen Wood
    content:`<h4 class="info-name">Pooleen Wood</h4>
    <h5 class="cat">Nature Preserve</h5>
    <h6 class="rating">Rating:4.9 ***** </h6>`
 },
 { 
   latlng: {lat:51.50658 , 
	       lng:-9.30748 
	       },
    // Lough Hyne Forest
    content:`<h4 class="info-name">Lough Hyne Forest</h4>
    <h5 class="cat">National Froset</h5>
    <h6 class="rating">Rating:4.9 ***** </h6>`
 },
 { 
   latlng: {lat:51.91726 , 
	        lng:-8.066244
	       },
    //   Baile na Martra 
    content:`<h4 class="info-name">Baile na Martra</h4>
    <h5 class="cat">National Forest</h5>
    <h6 class="rating">Rating:5 ***** </h6>`
 },
 { 
   latlng: {lat:51.95534 , 
	        lng: -7.85253
	       },
    // The College Garden
    content:`<h4 class="info-name">The College Garden</h4>
    <h5 class="cat">Garden</h5>
    <h6 class="rating">Rating:4.7 ***** </h6>`
 },
 { 
   latlng: {lat:52.21937 , 
	       lng: -8.58082
	       },
    // Doneraile Wildlife Park
    content:`<h4 class="info-name">Doneraile Wildlife Park</h4>
    <h5 class="cat">Park</h5>
    <h6 class="rating">Rating:4.8 ***** </h6>`
 },
 { 
   latlng: {lat:51.926445 , 
	       lng: -8.96385
	       },
    // Tiny Feet Fairy Garden
    content:`<h4 class="info-name">Tiny Feet Fairy Garden</h4>
    <h5 class="cat">Park</h5>
    <h6 class="rating">Rating:4.9 ***** </h6>`
 },
]

// Beaches
let beachLocations = [
    { 
   latlng: {lat:51.56771 , 
	        lng:-8.99698
	       },
    // Owenahincha Beach
    content:`<h4 class="info-name">Owenahincha Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.59673 , 
	       lng: -8.86595
	       },
    // Inchydoney Beach
    content:`<h4 class="info-name">Inchydoney Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.7 ***** </h6>`
 },
 { 
   latlng: {lat:51.69575 , 
	        lng: -8.51299
	       },
    // kinsale Beach
    content:`<h4 class="info-name">Kinsale Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.85921 , 
	       lng: -8.00197
	        },
    // Garryvoe Beach
    content:`<h4 class="info-name"Garryvoe Beach></h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:51.93442 , 
	       lng: -7.85941
	       },
    //Youghal Beach 
    content:`<h4 class="info-name">Youghal Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.77521 , 
	        lng:-8.31119 
	       },
    // Fountainstown Beach
    content:`<h4 class="info-name">Fountainstown Beach</h4>
    <h5 class="cat">Bach</h5>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:51.46940 , 
	        lng:-9.77693 
	       },
    // Barley Cove Beach
    content:`<h4 class="info-name">Barley Cove Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.8 ***** </h6>`
 },
 { 
   latlng: {lat:51.90764 , 
	        lng:-7.89982
	    },
    // Pilmore Strand
    content:`<h4 class="info-name">Pilmore Strand</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.8 ***** </h6>`
 },
 { 
   latlng: {lat:51.92541 , 
	        lng:-7.87266 
	        },
    // Redbarn Beach
    content:`<h4 class="info-name">Redbarn Beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.94063 , 
	        lng: -7.84383
	        },
    // Front strand Beach
    content:`<h4 class="info-name">Front Strand beach</h4>
    <h5 class="cat">Beach</h5>
    <h6 class="rating">Rating:4.7 ***** </h6>`
 },

]



function initMap(myLocations) {
    let coordinates = {
        lat: 51.83894,
        lng: -9.16518
    };
    if(window.screen.width < 768){
        var level = 7;
    }
    else if(window.screen.width < 1200 ) 
         {level = 8;}
    else{
        level = 10;
    }     
    map = new google.maps.Map(document.getElementById("map"), {
        zoom :level,
        center: coordinates,
        disableDefaultUI: true
    });
     console.log(level);

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


document.getElementById("beaches").addEventListener("click", () => {
    initMap(beachLocations);
});
