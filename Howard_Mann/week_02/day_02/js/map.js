console.log("Google maps api");

// See Google Maps APIs documentation https://developers.google.com/maps/documentation/javascript/markers

var marker;

function initMap() {
  var coordinates = {lat: 45.5045422, lng:-73.5778428 };
  var image = {
   url: "images/fav.png",
   size: new google.maps.Size(60,60),
   origin: new google.maps.Point(0,0),
   anchor: new google.maps.Point(0,60),
  }

  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: coordinates,
      zoom: 3
  });

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP,
    title: 'Montreal'
  });

}

function toggleBounce() {
  if (marker.getAnimation() !== null ) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
