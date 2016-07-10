// var pos = {};
// var path = [];
function  geoCurrentLoc(map) {

  var message = document.getElementById("message");

  if (!navigator.geolocation){
    message.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  
   // save the position history
  var path = [];

  function success(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
  // pass the position values to draw a marker on that position
  // drawMarker(map,pos.lat,pos.lng);
  
  // move the map center to current position
      map.setCenter(pos);
 
      path.push(new google.maps.LatLng(pos.lat, pos.lng));

      console.log(path);


  // Create the LatLngBounds object that will be used to fit the view to the points range
  // place the markers to the polyline's point
      // var latLngBounds = new google.maps.LatLngBounds();

      for(var i = 0; i < path.length; i++) {
        // latLngBounds.extend(path[i]);
        // Place the marker
        drawMarker(map, path[i]);
        // new google.maps.Marker({
        //   map: map,
        //   position: path[i],
        //   title: "Point " + (i + 1)
        // });
      }

    // Creates the polyline object
      var polyline = new google.maps.Polyline({
        map: map,
        path: path,
        strokeColor: '#0000FF',
        strokeOpacity: 0.7,
        strokeWeight: 1
      });

      // Fit the bounds of the generated points
      // map.fitBounds(latLngBounds);
  
  // return pos;
  // $('#myModal').modal('show') 
  // message.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    // Create the polyline's points
          // for(var i = 0; i < 5; i++) {
          //   // Create a random point using the user current position and a random generated number.
          //   // The number will be once positive and once negative using based on the parity of i
          //   // and to reduce the range the number is divided by 10
          //   path.push(
          //     new google.maps.LatLng(
          //       position.coords.latitude + (Math.random() / 10 * ((i % 2) ? 1 : -1)),
          //       position.coords.longitude + (Math.random() / 10 * ((i % 2) ? 1 : -1))
          //     )
          //   );
          // }

   

  };

  function error() {
    message.innerHTML = "<p>Unable to retrieve your location</p>";
  };

  // navigator.geolocation.getCurrentPosition(success, error);
  
  // tracking location while mobile device's location is changed
  var watchID = null;

  var options = {
    enableHighAccuracy: true,
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