console.log("ISS location");
// Cache important elements
var $latitude = $('div#latitude span');
var $longitude = $('div#longitude span');
var latitude;
var longitude;
// Declare google map variable in global scope
var map;
// Custom icon for marker
var issImg = "https://a.fsdn.com/sd/topics/iss_64.png";

// Display api information
var displaySpaceLocation = function(response) {
  latitude = response["iss_position"]["latitude"];
  longitude = response["iss_position"]["longitude"];
  $latitude.text(latitude.toFixed(2));
  $longitude.text(longitude.toFixed(2));
  // Custom google add marker callback (see below)
  addGoogleMarker(latitude,longitude);
};

// Fetch api information
var fetchSpaceLocation = function() {
  $.ajax({
    url: "http://api.open-notify.org/iss-now.json",
    type: "GET",
    dataType: "JSONP"
  }).done(function(response){
    displaySpaceLocation(response);
  });
}

// Event listener, setInterval
$(document).ready(function(){
  window.setInterval(fetchSpaceLocation,1000);
});

// Google Map api setup
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 0, lng: 0},
    mapTypeId: 'satellite'
  });
};
initMap();

// Google map custom addmarker callback
var addGoogleMarker = function(latitude,longitude){
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    icon: issImg,
    map: map
  });
  map.setCenter({lat: latitude, lng: longitude});
};
