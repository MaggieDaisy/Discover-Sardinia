// Initialize and add the map and create complex markers to indicate attractions of island
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 40.1209, lng: 9.0129 },
  });
  // Add markers locations of attractions to the map
  const markers = attractions.map((attraction, i) => {
    return new google.maps.Marker({
      position: attraction,
      map: map
    });
  });
  // Add a marker clusterer to show the markers
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
// Create an object to display locations on the map, add latitude and longitude of attractions 
const attractions = [
  { lat: 38.8841, lng: 8.8640, title: "Su Giudeu Beach" }, // "
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