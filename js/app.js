var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('submissionItem')
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

$(document).ready(function () {
  $('.submissionItem').click(function () {
    modal.style.display = "block";
    var bg = $(this).find(".submissionItemBackground").css("background-image");
    $("#modalPic").css("background-image", bg)
  });
});

$(document).ready(() => {
  if ($('myModal').length) {
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
  }
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log("hello");
var map, infowindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 21.3882887,
      lng: -157.9885406
    },
    zoom: 10,
    mapTypeId: "satellite",
  });

  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
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

function toggleDiv() {
  let otherPage = document.getElementById('otherPage');
  let container = document.getElementById('mainContent');
  container.style.display = 'none';
  $("")
  console.log(container)
  otherPage.style.display = 'block';
}


//open and close mobile menu
var menuCount = 0;
$('#openMenu').on('click', () => {
  menuCount++;
  console.log(menuCount);
  if ($('.activeMenu').length) {
    console.log('closing menu');
    $('#openMenu').removeClass('activeMenu');
    $('#openMenu').addClass('inactiveMenu');

    $('#pageContainer').removeClass('activeGrid');
    $('#pageContainer').addClass('inactiveGrid');
  } else {
    console.log('opening menu');
    $('#openMenu').addClass('activeMenu');
    $('#openMenu').removeClass('inactiveMenu');

    $('#pageContainer').addClass('activeGrid');
    $('#pageContainer').removeClass('inactiveGrid');
  }
}); 