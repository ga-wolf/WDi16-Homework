console.log("Badger $.ajax refactor version");

// Cache important elements for people
var $number = $('p#number');
var $names = $('ul#names');
var peopleArr;

// Cache important elements for location
var $latitude = $('div#latitude span');
var $longitude = $('div#longitude span');
var latitude;
var longitude;

// Cache google maps map variable and custom marker icon
var map;
var issImg = "https://a.fsdn.com/sd/topics/iss_64.png";

//'astros.json' display callback for ajax api url
var displaySpacePeople = function(response) {
  var number = response["number"];
  peopleArr = response["people"];
  $number.text("People: " + number);

  for (var i = 0; i < peopleArr.length; i++) {
    var $newLi = $('<li></li>');
    $newLi.text(peopleArr[i]["name"]);
    $names.append($newLi);
  }
  $newLi.text("Furry Fairy???");
  $names.append($newLi);
};

//'iss-now.json' display callback for ajax api url
var displaySpaceLocation = function(response) {
  latitude = response["iss_position"]["latitude"];
  longitude = response["iss_position"]["longitude"];
  $latitude.text(latitude.toFixed(2));
  $longitude.text(longitude.toFixed(2));
  // Custom google add marker callback (see below)
  addGoogleMarker(latitude, longitude);
};

// Fetch api data
// create JS object with different api url ending queries for people and location: 'astros.json' and 'iss-now.json'
var spaceData = {
  people: {
    queryURL: 'astros.json',
    displayFunc: displaySpacePeople
  },
  location: {
    queryURL: 'iss-now.json',
    displayFunc: displaySpaceLocation
  }
};

// ajax request using JS object variables above
var fetchSpaceData = function(param) {
  $.ajax({
    url: "http://api.open-notify.org/" + spaceData[param]["queryURL"],
    type: "GET",
    dataType: "JSONP"
  }).done(function(response) {
    spaceData[param]["displayFunc"](response);
  });
};

// Google Map api setup
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {
      lat: 0,
      lng: 0
    },
    mapTypeId: 'satellite'
  });
};
initMap();


// Google map custom addmarker callback
var markers = []; // Create array of markers
var addGoogleMarker = function(latitude, longitude) {
  marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude
    },
    icon: issImg,
    map: map
  });
  map.setCenter({
    lat: latitude,
    lng: longitude
  });

  // Push new marker into array and
  markers.push(marker);
  for (var i = 0; i < markers.length - 1; i++) {
    markers[i].setMap(null);
  }
};

// Event listener load api data
$(document).ready(function() {
  fetchSpaceData("people");
  window.setInterval(function() {
    fetchSpaceData("location")
  }, 1000);
});
