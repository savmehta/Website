//google map ali
function initMap() {
  let paris = {lat:48.851211 , lng: 2.306281};
  let et = {lat: 48.8584, lng: 2.2945};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: paris
  });

  // these set different markers you want to show on your map
  let markerbb = new google.maps.Marker({
    position: et,
    map: map,
    
  });

}