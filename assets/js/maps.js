
// Initialize and add the map
function initMap() {
  // Add general location of island
  const sardinia = { lat: 40.1209, lng: 9.0129 };
  // Center map at Mediterranean area
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: sardinia,
  });
  // Marker positioned on island
  const marker = new google.maps.Marker({
    position: sardinia,
    map: map,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    beach: {
      icon: iconBase + "beach_maps.png",
    },
    hotel: {
      icon: iconBase + "hotel_maps.png",
    },
    attraction: {
      icon: iconBase + "attraction_maps.png",
    },
    restaurant: {
      icon: iconBase + "restaurant_maps.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(38.8841, 8.8640),
      type: "beach",
      content: "Su Giudeu Beach"
    },
    {
      position: new google.maps.LatLng(40.1085, 9.6893),
      type: "beach",
      content: "Cala Goloritze Beach"
    },
    {
      position: new google.maps.LatLng(40.8947, 9.6146),
      type: "beach",
      content: "Porto Istana Beach"
    },
    {
      position: new google.maps.LatLng(41.0891685, 9.565959),
      type: "beach",
      content: "Spiaggia del Principe"
    },
    {
      position: new google.maps.LatLng(39.1161, 9.5194),
      type: "beach",
      content: "Spiaggia di Porto Giunco"
    },
    {
      position: new google.maps.LatLng(40.9655, 8.2095),
      type: "beach",
      content: "Spiaggia La Pelosa"
    },
    {
      position: new google.maps.LatLng(38.8946, 8.8131),
      type: "beach",
      content: "Tuerredda Beach"
    },
    {
      position: new google.maps.LatLng(39.8760, 8.6109),
      type: "beach",
      content: "Santa Giusta Beach"
    },
    {
      position: new google.maps.LatLng(38.8841, 8.8640),
      type: "beach",
      content: "Su Giudeu Beach"
    },
    {
      position: new google.maps.LatLng(40.8347, 9.6858),
      type: "beach",
      content: "Cala Brandinchi"
    },
  ];
  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }

}
