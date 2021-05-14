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
// Historic Locations

let historicLocations = [
    
{ 
   latlng: {lat:51.92950 , 
	        lng:-8.57102 
	       },
    // Blarney Castle
    content:`<h4 class="info-name">Blarney Castle</h4>
    <h5 class="cat">Castle</h5>
    <h6 class="web"><a href="https://www.blarneycastle.ie" target="_blank" alt="Blarney Castle">Website</a></h6>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
{ 
   latlng: {lat:51.69727 , 
	        lng: -8.49894
	       },
    // Charles Fort
    content:`<h4 class="info-name">Charles Fort</h4>
    <h5 class="cat">Castle</h5>
    <h6 class="web"><a href="https://heritageireland.ie/places-to-visit/charles-fort-national-monument" target="_blank alt="Charles Fort">Website</a>/</h6>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
{ 
   latlng: {lat:51.85148 , 
	        lng:-8.29361 
	       },
    // Cobh Cathedral
    content:`<h4 class="info-name">St. Colman's Cathedral</h4>
    <h5 class="cat">Church</h5>
    <h6 class="web"><a href="https://cobhcathedralparish.ie/" target="_blank" alt="Cobh Cathedral">Website</a></h6>
    <h6 class="rating">Rating:4.7 ***** </h6>`
 },
 
{ 
   latlng: {lat:51.89615 , 
	        lng:-8.47782 
	       },
    // Elizabeth Fort
    content:`<h4 class="info-name">Elizabeth Fort</h4>
    <h5 class="cat">Historical Landmark</h5>
    <h6 class="web"><a href="https://www.corkcity.ie/en/elizabeth-fort/" target="_blank" alt="Elizabeth Fort">Website</a></h6>
    <h6 class="rating">Rating:4.3 **** </h6>`
 },
 
{ 
   latlng: {lat:52.13416 , 
	        lng:-8.63914 
	       },
    // Mallow Castle
    content:`<h4 class="info-name">Mallow Castle</h4>
    <h5 class="cat">Castle</h5>
    <h6 class="web"><a href="https://www.mallow.ie/things-to-do" target="_blank" alt="mallow Castle">Mallow Castle</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
{ 
   latlng: {lat:51.56469 , 
	        lng:-9.08736 
	       },
    //Drombeg Stone Circle 
    content:`<h4 class="info-name">Drombeg Stone Circle</h4>
    <h5 class="cat">Historical Place</h5>
    <h6 class="web"><a href="https://www.archaeology.ie/monument-of-the-month/archive/drombeg-stone-circle-and-fulacht-fiadh-co-cork" target="_blank" alt="Drombeg Stone Circle">Website</a></h6>
    <h6 class="rating">Rating:4.6 *****</h6>`
 },
 

{ 
   latlng: {lat:51.76423 , 
	        lng:-8.97554 
	       },
    // Kinneigh round Towet
    content:`<h4 class="info-name">Kinneigh Round Tower</h4>
    <h5 class="cat">Historical Landmark</h5>
    <h6 class="web"><a href="https://www.discoverireland.ie/cork/kinneigh-round-tower" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:5 ***** </h6>`
 },
 

{ 
   latlng: {lat:51.63913 , 
	        lng:-10.04571
	       },
    // Allihies Copper Mine Museum
    content:`<h4 class="info-name">Allihies Copper Mine Museum</h4>
    <h5 class="cat">Museum</h5>
    <h6 class="web"><a href="http://www.acmm.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating: </h6>`
 },
 

{ 
   latlng: {lat:51.48377 , 
	        lng:-9.37303 
	       },
    // Baltimore Castle
    content:`<h4 class="info-name">Baltimore Castle</h4>
    <h5 class="cat">Historic Landmark</h5>
    <h6 class="web"><a href="https://www.baltimorecastle.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.3 **** </h6>`
 },
 

{ 
   latlng: {lat:52.16481 , 
	        lng:-8.90264 
	       },
    // Kantruk Castle
    content:`<h4 class="info-name">Kantruk Castle</h4>
    <h5 class="cat">Castle</h5>
    <h6 class="web"><a href="https://www.antaisce.org/properties/kanturk-castle" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
]

// Restaurants

let restaurantLocations = [

{ 
   latlng: {lat:51.62166 , 
	        lng:-8.88623
	       },
    // The Whale's Tail Restaurant
    content:`<h4 class="info-name">The Whale's Tail </h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="https://thewhalestail.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:51.48467 , 
	        lng:-9.36105
	       },
    // Glebe Garden
    content:`<h4 class="info-name">glebe Garden</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="https://www.glebegardens.com/restaurant" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.68169 , 
	        lng:-9.45455 
	       },
    // The Brick Oven
    content:`<h4 class="info-name">The Brick Oven</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="http://www.thebrickovenbantry.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.4 **** </h6>`
 },
 { 
   latlng: {lat:51.94060 , 
	        lng:-7.84574 
	       },
    // Clancy’s Bar & Restaurant
    content:`<h4 class="info-name">Clancy’s Bar & Restaurant</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="https://www.clancysyoughal.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating: </h6>`
 },
 { 
   latlng: {lat:51.89745 , 
	        lng:-8.47152 
	       },
    // Bombay Palace
    content:`<h4 class="info-name">Bombay Palace</h4>
    <h5 class="cat">Reataurant</h5>
    <h6 class="web"><a href="http://bombaypalace.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.2 **** </h6>`
 },
 { 
   latlng: {lat:51.94272 , 
	        lng:-7.99249
	       },
    // The Old Thatch Bar & Restaurant
    content:`<h4 class="info-name">The Old Thatch Bar & Restaurant</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="http://theoldthatch.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },{ 
   latlng: {lat:51.66812 , 
	        lng:-8.59599
	       },
    // Wild Restaurant
    content:`<h4 class="info-name">Wild Resturant</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="https://www.wildrestaurantcork.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:5.0 ***** </h6>`
 },
 { 
   latlng: {lat:51.70686 , 
	        lng:-8.522298
	       },
    // Hamlets Street Food & Gastro Garden
    content:`<h4 class="info-name">Hamlets Street Food & Gastro Garden</h4>
    <h5 class="cat">Restaurant</h5>
    <h6 class="web"><a href="https://www.hamletsofkinsale.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.2 **** </h6>`
 },
 { 
   latlng: {lat:51.89892 , 
	        lng:-8.46412 
	       },
    // Dockland
    content:`<h4 class="info-name">Dockland</h4>
    <h5 class="cat">restaurant</h5>
    <h6 class="web"><a href="https://www.dockland.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:51.89764 , 
	        lng:-8.56870 
	       },
    // The Anglers
    content:`<h4 class="info-name">The Anglers</h4>
    <h5 class="cat">Restaurant </h5>
    <h6 class="web"><a href="https://theanglers.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.2 </h6>`
 },
]

// Hotels
let hotelsLocations= [
    { 
   latlng: {lat:51.90146 , 
	        lng:-8.46768 
	       },
    // Metropole Hote
    content:`<h4 class="info-name">Metropole Hote</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.themetropolehotel.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.3 **** </h6>`
 },
 { 
   latlng: {lat:51.90291 , 
	        lng:-8.47443 
	       },
    // Maldron Hotel Cork
    content:`<h4 class="info-name">Maldron Hotel Cork</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.maldronhotelshandoncorkcity.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.1 **** </h6>`
 },
 { 
   latlng: {lat:51.89396 , 
	        lng:-8.5-847
	       },
    // The Kingsley Hotel
    content:`<h4 class="info-name">The Kingsley Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.thekingsley.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:51.90440 , 
	        lng:-8.42348 
	       },
    // Clayton Hotel Silver Springs
    content:`<h4 class="info-name">Clayton Hotel Silver Springs</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.claytonhotelsilversprings.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.0 **** </h6>`
 },
 { 
   latlng: {lat:51.89614 , 
	        lng:-8.48487 
	       },
    // The River Lee Hotel
    content:`<h4 class="info-name">The River Lee Hotel</h4>
    <h5 class="cat">hotel</h5>
    <h6 class="web"><a href="https://www.doylecollection.com/hotels/the-river-lee-hotel" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.93275 , 
	        lng:-8.56735 
	       },
    // Blarney Castle Hotel
    content:`<h4 class="info-name">Blarney Castle Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.blarneycastlehotel.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.4 </h6>`
 },
 { 
   latlng: {lat:52.13873 , 
	        lng:-8.27485
	       },
    // The Square Townhouse
    content:`<h4 class="info-name">The Square Townhouse</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="http://stayinfermoy.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.8 </h6>`
 },
{ 
   latlng: {lat:51.48496 , 
	        lng:-9.36257
	       },
    // Casey's of Baltimore Hotel
    content:`<h4 class="info-name">Casey's of Baltimore Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.caseysofbaltimore.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.6 ***** </h6>`
 },
 { 
   latlng: {lat:51.91594 , 
	        lng:-8.17862 
	       },
    // Midleton Park Hotel
    content:`<h4 class="info-name">Midleton Park Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.midletonpark.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.1 **** </h6>`
 },
 { 
   latlng: {lat:51.85078  , 
	        lng:-8.33185
	       },
    // The Bosun
    content:`<h4 class="info-name">The Bosun</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.thebosun.ie" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.4 **** </h6>`
 },
 { 
   latlng: {lat:51.85332, 
	        lng:-8.48646
	       },
    // Cork International Hotel
    content:`<h4 class="info-name">Cork International Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.corkinternationalairporthotel.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.4 **** </h6>`
 },
 { 
   latlng: {lat:51.90578 , 
	        lng:-8.95862 
	       },
    // Castle Hotel
    content:`<h4 class="info-name">Castle Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.castlehotel.ie" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.5 ***** </h6>`
 },
 { 
   latlng: {lat:52.18815 , 
	        lng:-8.65772
	       },
    // Springfort Hall
    content:`<h4 class="info-name">Springfort Hall</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.springfort-hall.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.3 </h6>`
 },
 { 
   latlng: {lat:51.69430 , 
	        lng:-9.44127
	       },
    // Seafort Luxury Hideaway
    content:`<h4 class="info-name">Seafort Luxury Hideaway</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.seafort.ie/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.8 *****</h6>`
 },
 { 
   latlng: {lat:51.70763 , 
	        lng:-8.52666
	       },
    // Friars Lodge
    content:`<h4 class="info-name">Friars Lodge</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://friars-lodge.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.6 **** </h6>`
 },
 { 
   latlng: {lat:51.62385 , 
	        lng:-8.88543
	       },
    // The Clonakilty Hotel
    content:`<h4 class="info-name">The Clonakilty Hotel</h4>
    <h5 class="cat">Hotel</h5>
    <h6 class="web"><a href="https://www.theclonakilty.com/" target="_blank" alt="">Website</a></h6>
    <h6 class="rating">Rating:4.1 </h6>`
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

document.getElementById("sites").addEventListener("click", () => {
    initMap(historicLocations);
});

document.getElementById("restaurants").addEventListener("click", () => {
    initMap(restaurantLocations);
});

document.getElementById("hotels").addEventListener("click", () => {
    initMap(hotelsLocations);
});