// Credit - Code inspiration borrowed from "Google Maps JavaScript API Tutorial" by Traversy Media
// - https://www.youtube.com/watch?v=Zxf1mnP5zcw

// Initialize and add the map and create complex markers to indicate attractions of the island
function initMap() {
    //Create map options to add general map of area, add zoom and center
    const options = {
        zoom: 6,
        center: { lat: 40.1209, lng: 9.0129 },
    };
    //Create the map and include options
    const map = new google.maps.Map(document.getElementById("map"), options);

    //Create an array of markers for attractions, store coordinates data and content 
    //to display location and title of the place
    const markers = [
        {
            coordinates: { lat: 40.1085, lng: 9.6893 },
            content: "<p>Top 10 beaches: Cala Goloritze Beach<p>",
        },
        {
            coordinates: { lat: 40.8947, lng: 9.6146 },
            content: "<p>Top 10 beaches: Porto Istana Beach<p>",
        },
        {
            coordinates: { lat: 41.0891, lng: 9.5659 },
            content: "<p>Top 10 beaches: Spiaggia del Principe<p>",
        },
        {
            coordinates: { lat: 39.1161, lng: 9.5194 },
            content: "<p>Top 10 beaches: Spiaggia di Porto Giunco<p>",
        },
        {
            coordinates: { lat: 38.8841, lng: 8.864 },
            content: "<p>Top 10 beaches: Su Giudeu Beach <p>",
        },
        {
            coordinates: { lat: 40.9655, lng: 8.2095 },
            content: "<p>Top 10 beaches: Spiaggia La Pelosa<p>",
        },
        {
            coordinates: { lat: 38.8946, lng: 8.8131 },
            content: "<p>Top 10 beaches: Tuerredda Beach<p>",
        },
        {
            coordinates: { lat: 39.876, lng: 8.6109 },
            content: "<p>Top 10 beaches: Santa Giusta Beach<p>",
        },
        {
            coordinates: { lat: 40.8347, lng: 9.6858 },
            content: "<p>Top 10 beaches: Cala Brandinchi<p>",
        },
        {
            coordinates: { lat: 39.1325, lng: 9.5571 },
            content: "<p>Top 10 beaches: Punta Molentis Beach<p>",
        },

        {
            coordinates: { lat: 39.1296, lng: 9.4653 },
            content: "<p>Top 10 hotels: Falkensteiner Resort Capo Boi<p>",
        },
        {
            coordinates: { lat: 40.5505, lng: 8.3181 },
            content: "<p>Top 10 hotels: Villa Las Tronas Hotel & Spa<p>",
        },
        {
            coordinates: { lat: 41.1514, lng: 9.5274 },
            content: "<p>Top 10 hotels: Colonna Resort<p>",
        },
        {
            coordinates: { lat: 40.9291, lng: 8.802 },
            content: "<p>Top 10 hotels: Casteldoria Beach Resort<p>",
        },
        {
            coordinates: { lat: 38.8962, lng: 8.8682 },
            content: "<p>Top 10 hotels: Hotel Chia Laguna<p>",
        },
        {
            coordinates: { lat: 39.013, lng: 9.0014 },
            content: "<p>Top 10 hotels: Forte Village Resort<p>",
        },
        {
            coordinates: { lat: 40.8219, lng: 9.6762 },
            content: "<p>Top 10 hotels: Paradise Resort & Spa<p>",
        },
        {
            coordinates: { lat: 41.1693, lng: 9.4187 },
            content: "<p>Top 10 hotels: Hotel Capo di Orso Thalasso & SPA<p>",
        },
        {
            coordinates: { lat: 40.3726, lng: 9.7193 },
            content: "<p>Top 10 hotels: Club Hotel Marina Beach<p>",
        },
        {
            coordinates: { lat: 39.1132, lng: 9.4997 },
            content: "<p>Top 10 hotels: Hotel Santo Stefano Clubviaggi<p>",
        },
        {
            coordinates: { lat: 39.2238, lng: 9.1217 },
            content: "<p>Top 10 attractions: Cagliari - capital<p>",
        },
        {
            coordinates: { lat: 39.0374, lng: 8.4184 },
            content: "<p>Top 10 attractions: Sant Antioco Island<p>",
        },
        {
            coordinates: { lat: 39.8733, lng: 8.4397 },
            content: "<p>Top 10 attractions: Tharros<p>",
        },
        {
            coordinates: { lat: 41.2166, lng: 9.4047 },
            content: "<p>Top 10 attractions: La Madallena<p>",
        },
        {
            coordinates: { lat: 39.9062, lng: 8.5884 },
            content: "<p>Top 10 attractions: Oristano<p>",
        },
        {
            coordinates: { lat: 40.9137, lng: 8.7086 },
            content: "<p>Top 10 attractions: Castelsardo<p>",
        },
        {
            coordinates: { lat: 40.3, lng: 9.6833 },
            content: "<p>Top 10 attractions: Gulf of Orosei<p>",
        },
        {
            coordinates: { lat: 40.2055, lng: 9.3484 },
            content: "<p>Top 10 attractions: Orgosolo<p>",
        },
        {
            coordinates: { lat: 40.9236, lng: 9.4964 },
            content: "<p>Top 10 attractions: Costa Smeralda<p>",
        },
        {
            coordinates: { lat: 40.1852, lng: 9.5014 },
            content: "<p>Top 10 attractions: Gorropu Gorge<p>",
        },
        {
            coordinates: { lat: 40.9243, lng: 9.4992 },
            content: "<p>Top 10 restaurants: Dolceacqua - Cucina Ligure & Sarda<p>",
        },
        {
            coordinates: { lat: 41.1156, lng: 9.5279 },
            content: "<p>Top 10 restaurants: I Frati Rossi<p>",
        },
        {
            coordinates: { lat: 40.5568, lng: 8.314 },
            content: "<p>Top 10 restaurants: Ristorante Al Tuguri<p>",
        },
        {
            coordinates: { lat: 40.924, lng: 9.5034 },
            content: "<p>Top 10 restaurants: Antica Trattoria<p>",
        },
        {
            coordinates: { lat: 39.2133, lng: 9.1158 },
            content: "<p>Top 10 restaurants: Ristorante Dal Corsaro<p>",
        },
        {
            coordinates: { lat: 41.0518, lng: 9.446 },
            content: "<p>Top 10 restaurants: Ristorante Il Fuoco Sacro<p>",
        },
        {
            coordinates: { lat: 40.6156, lng: 8.288 },
            content: "<p>Top 10 restaurants: Agriturismo Barbagia<p>",
        },
        {
            coordinates: { lat: 39.2867, lng: 9.498 },
            content: "<p>Top 10 restaurants: Agriturismo la Sorgente<p>",
        },
        {
            coordinates: { lat: 39.3181, lng: 9.532 },
            content: "<p>Top 10 restaurants: Agriturismo Il Nuraghe<p>",
        },
        {
            coordinates: { lat: 40.6247, lng: 9.6974 },
            content: "<p>Top 10 restaurants: Agriturismo su Vrau<p>",
        },
    ];

    //Loop through the markers
    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    //Add function and check content
    function addMarker(properties) {
        let marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map,
        });

        if (properties.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: properties.content,
            });
            //Create event listener for click on map to make function active and dispaly content
            marker.addListener("click", function () {
                infoWindow.open(map, marker);
            });
        }
    }
}