// var pos = {};

function  geoCurrentLoc(map) {

  var message = document.getElementById("message");

  if (!navigator.geolocation){
    message.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  
  function success(position) {
     var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
     };
  
  // pass the position values to draw a marker on that position
  drawMarker(map,pos.lat,pos.lng);
  
  // move the map center to current position
  map.setCenter(pos);
  
  // return pos;
  // $('#myModal').modal('show') 
  // message.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

  };

  function error() {
    message.innerHTML = "<p>Unable to retrieve your location</p>";
  };

  // navigator.geolocation.getCurrentPosition(success, error);
  
  // tracking location while mobile device's location is changed
  var watchID = null;

  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  watchID = navigator.geolocation.watchPosition(success, error, options);
  // console.log(watchID)

  $("#stopTracking").click(function(){
    if(watchID){
      navigator.geolocation.clearWatch(watchID);
    }
    watchID = null;
  });
  

}