
// Credit - Code inspiration borrowed from "Google Maps JavaScript API Tutorial" by Traversy Media - https://www.youtube.com/watch?v=Zxf1mnP5zcw
// Initialize and add the map and create complex markers to indicate attractions of island
function initMap() {
    //Create map options to add general map of area, add zoom and center
    var options = {
        zoom: 6,
        center: { lat: 40.1209, lng: 9.0129 },
    };
    //Create the map and include options
    var map = new google.maps.Map(document.getElementById("map"), options);

    //Create event listener for click on map to make function active
    google.maps.event.addListener(map, "click", function (event) {
        //Include marker for extracting coordinates (latitude and longitude of attractions)
        addMarker({ coords: event.latLng });
    });

    //Create array of markers for attractions, store coordinates data and content to display lokation and title of place
    var markers = [
        {
            coords: { lat: 40.1085, lng: 9.6893 },
            content: "<p>Top 10 beaches: Cala Goloritze Beach<p>",
        },
        {
            coords: { lat: 40.8947, lng: 9.6146 },
            content: "<p>Top 10 beaches: Porto Istana Beach<p>",
        },
        {
            coords: { lat: 41.0891, lng: 9.5659 },
            content: "<p>Top 10 beaches: Spiaggia del Principe<p>",
        },
        {
            coords: { lat: 39.1161, lng: 9.5194 },
            content: "<p>Top 10 beaches: Spiaggia di Porto Giunco<p>",
        },
        {
            coords: { lat: 38.8841, lng: 8.864 },
            content: "<p>Top 10 beaches: Su Giudeu Beach <p>",
        },
        {
            coords: { lat: 40.9655, lng: 8.2095 },
            content: "<p>Top 10 beaches: Spiaggia La Pelosa<p>",
        },
        {
            coords: { lat: 38.8946, lng: 8.8131 },
            content: "<p>Top 10 beaches: Tuerredda Beach<p>",
        },
        {
            coords: { lat: 39.876, lng: 8.6109 },
            content: "<p>Top 10 beaches: Santa Giusta Beach<p>",
        },
        {
            coords: { lat: 40.8347, lng: 9.6858 },
            content: "<p>Top 10 beaches: Cala Brandinchi<p>",
        },
        {
            coords: { lat: 39.1325, lng: 9.5571 },
            content: "<p>Top 10 beaches: Punta Molentis Beach<p>",
        },

        {
            coords: { lat: 39.1296, lng: 9.4653 },
            content: "<p>Top 10 hotels: Falkensteiner Resort Capo Boi<p>",
        },
        {
            coords: { lat: 40.5505, lng: 8.3181 },
            content: "<p>Top 10 hotels: Villa Las Tronas Hotel & Spa<p>",
        },
        {
            coords: { lat: 41.1514, lng: 9.5274 },
            content: "<p>Top 10 hotels: Colonna Resort<p>",
        },
        {
            coords: { lat: 40.9291, lng: 8.802 },
            content: "<p>Top 10 hotels: Casteldoria Beach Resort<p>",
        },
        {
            coords: { lat: 38.8962, lng: 8.8682 },
            content: "<p>Top 10 hotels: Hotel Chia Laguna<p>",
        },
        {
            coords: { lat: 39.013, lng: 9.0014 },
            content: "<p>Top 10 beaches: Forte Village Resort<p>",
        },
        {
            coords: { lat: 40.8219, lng: 9.6762 },
            content: "<p>Top 10 hotels: Paradise Resort & Spa<p>",
        },
        {
            coords: { lat: 41.1693, lng: 9.4187 },
            content: "<p>Top 10 hotels: Hotel Capo di Orso Thalasso & SPA<p>",
        },
        {
            coords: { lat: 40.3726, lng: 9.7193 },
            content: "<p>Top 10 hotels: Club Hotel Marina Beach<p>",
        },
        {
            coords: { lat: 39.1132, lng: 9.4997 },
            content: "<p>Top 10 hotels: Hotel Santo Stefano Clubviaggi<p>",
        },
        {
            coords: { lat: 39.2238, lng: 9.1217 },
            content: "<p>Top 10 attractions: Cagliari - capital<p>",
        },
        {
            coords: { lat: 39.0374, lng: 8.4184 },
            content: "<p>Top 10 attractions: Sant Antioco Island<p>",
        },
        {
            coords: { lat: 39.8733, lng: 8.4397 },
            content: "<p>Top 10 attractions: Tharros<p>",
        },
        {
            coords: { lat: 41.2166, lng: 9.4047 },
            content: "<p>Top 10 attractions: La Madallena<p>",
        },
        {
            coords: { lat: 39.9062, lng: 8.5884 },
            content: "<p>Top 10 attractions: Oristano<p>",
        },
        {
            coords: { lat: 40.9137, lng: 8.7086 },
            content: "<p>Top 10 attractions: Castelsardo<p>",
        },
        {
            coords: { lat: 40.3, lng: 9.6833 },
            content: "<p>Top 10 attractions: Gulf of Orosei<p>",
        },
        {
            coords: { lat: 40.2055, lng: 9.3484 },
            content: "<p>Top 10 attractions: Orgosolo<p>",
        },
        {
            coords: { lat: 40.9236, lng: 9.4964 },
            content: "<p>Top 10 attractions: Costa Smeralda<p>",
        },
        {
            coords: { lat: 40.1852, lng: 9.5014 },
            content: "<p>Top 10 attractions: Gorropu Gorge<p>",
        },
        {
            coords: { lat: 40.9243, lng: 9.4992 },
            content: "<p>Top 10 restaurants: Dolceacqua - Cucina Ligure & Sarda<p>",
        },
        {
            coords: { lat: 41.1156, lng: 9.5279 },
            content: "<p>Top 10 restaurants: I Frati Rossi<p>",
        },
        {
            coords: { lat: 40.5568, lng: 8.314 },
            content: "<p>Top 10 restaurants: Ristorante Al Tuguri<p>",
        },
        {
            coords: { lat: 40.924, lng: 9.5034 },
            content: "<p>Top 10 restaurants: Antica Trattoria<p>",
        },
        {
            coords: { lat: 39.2133, lng: 9.1158 },
            content: "<p>Top 10 restaurants: Ristorante Dal Corsaro<p>",
        },
        {
            coords: { lat: 41.0518, lng: 9.446 },
            content: "<p>Top 10 restaurants: Ristorante Il Fuoco Sacro<p>",
        },
        {
            coords: { lat: 40.6156, lng: 8.288 },
            content: "<p>Top 10 restaurants: Agriturismo Barbagia<p>",
        },
        {
            coords: { lat: 39.2867, lng: 9.498 },
            content: "<p>Top 10 restaurants: Agriturismo la Sorgente<p>",
        },
        {
            coords: { lat: 39.3181, lng: 9.532 },
            content: "<p>Top 10 restaurants: Agriturismo Il Nuraghe<p>",
        },
        {
            coords: { lat: 40.6247, lng: 9.6974 },
            content: "<p>Top 10 restaurants: Agriturismo su Vrau<p>",
        },
    ];

    //Loop through the markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    //Add function and check content, add event listener for display content
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener("click", function () {
                infoWindow.open(map, marker);
            });
        }
    }
}

/*
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 40.1209, lng: 9.0129 },
  });
  // Create an array of alphabetical characters used to label the markers
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
// Create an object to display locations on the map, add latitude and longitude of attractions 
const locations = [
  { lat: 38.8841, lng: 8.8640 }, // "Su Giudeu Beach"
  { lat: 40.1085, lng: 9.6893 }, // "Cala Goloritze Beach"
  { lat: 40.8947, lng: 9.6146 }, // "Porto Istana Beach"
  { lat: 41.0891, lng: 9.5659 }, // "Spiaggia del Principe"
  { lat: 39.1161, lng: 9.5194 }, // "Spiaggia di Porto Giunco"
  { lat: 40.9655, lng: 8.2095 }, // "Spiaggia La Pelosa"
  { lat: 38.8946, lng: 8.8131 }, // "Tuerredda Beach"
  { lat: 39.8760, lng: 8.6109 }, // "Santa Giusta Beach"
  { lat: 40.8347, lng: 9.6858 }, // "Cala Brandinchi"
  { lat: 39.1325, lng: 9.5571 }, // "Punta Molentis Beach"

  { lat: 39.1296, lng: 9.4653 }, // "Falkensteiner Resort Capo Boi"
  { lat: 40.5505, lng: 8.3181 }, // "Villa Las Tronas Hotel & Spa"
  { lat: 41.1514, lng: 9.5274 }, // "Colonna Resort"
  { lat: 40.9291, lng: 8.8020 }, // "Casteldoria Beach Resort"
  { lat: 38.8962, lng: 8.8682 }, // "Hotel Chia Laguna"
  { lat: 39.0130, lng: 9.0014 }, //"Forte Village Resort"
  { lat: 40.8219, lng: 9.6762 }, // "Paradise Resort & Spa"
  { lat: 41.1693, lng: 9.4187 }, // "Hotel Capo d'Orso Thalasso & SPA"
  { lat: 40.3726, lng: 9.7193 }, // "Club Hotel Marina Beach"
  { lat: 39.1132, lng: 9.4997 }, // "Hotel Santo Stefano Clubviaggi"

  { lat: 39.2238, lng: 9.1217 }, // "Cagliari capital"
  { lat: 39.0374, lng: 8.4184 }, // "Sant'Antioco Island"
  { lat: 39.8733, lng: 8.4397 }, // "Tharros"
  { lat: 41.2166, lng: 9.4047 }, // "La Madallena"
  { lat: 39.9062, lng: 8.5884 }, // "Oristano"
  { lat: 40.9137, lng: 8.7086 }, // "Castelsardo"
  { lat: 40.3000, lng: 9.6833 }, // "Gulf of Orosei"
  { lat: 40.2055, lng: 9.3484 }, // "Orgosolo"
  { lat: 40.9236, lng: 9.4964 }, // "Costa Smeralda"
  { lat: 40.1852, lng: 9.5014 }, // "Gorropu Gorge"

  { lat: 40.9243, lng: 9.4992 }, // "Dolceacqua - Cucina Ligure & Sarda"
  { lat: 41.1156, lng: 9.5279 }, // "I Frati Rossi"
  { lat: 40.5568, lng: 8.3140 }, // "Ristorante Al Tuguri"
  { lat: 40.9240, lng: 9.5034 }, // "Antica Trattoria"
  { lat: 39.2133, lng: 9.1158 }, // "Ristorante Dal Corsaro"
  { lat: 41.0518, lng: 9.446 }, // "Ristorante Il Fuoco Sacro"
  { lat: 40.6156, lng: 8.288 }, // "Agriturismo Barbagia"
  { lat: 39.2867, lng: 9.4980 }, // "Agriturismo la Sorgente"
  { lat: 39.3181, lng: 9.5320 }, // "Agriturismo Il Nuraghe"
  { lat: 40.6247, lng: 9.6974 }, // "Agriturismo su Vrau"
];
*/