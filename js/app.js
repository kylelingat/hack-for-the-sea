
console.log("hello");
var map, infowindow;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 21.3882887,
            lng: -157.9885406
          },
          zoom: 10,
          mapTypeId : "satellite",
        });

        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

  //onclick openMenu
  //change grid class to activemenu/grid or inactivemenu/grid
