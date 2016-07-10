function drawMarker(map,lat,lng){
      
      var image = 'img/locationMarker.png';
      var locationMarker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        icon: image,
        draggable: true,
        // animation: google.maps.Animation.DROP
      });

      // locationMarker.addListener('click', toggleBounce);

      // function toggleBounce() {
      //   if (locationMarker.getAnimation() !== null) {
      //     locationMarker.setAnimation(null);
      //   } else {
      //     locationMarker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }
    }