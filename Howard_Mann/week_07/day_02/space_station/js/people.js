console.log("ISS");
// Cache important elements
var $number = $('p#number');
var $names = $('ul#names');
var peopleArr;

// Display api data
var displaySpacePeople = function(response) {
  console.log(response);
  var number = response["number"];
  peopleArr = response["people"];
  $number.text("People: " + number);

  for (var i = 0; i < peopleArr.length; i++) {
    var $newLi = $('<li></li>');
    $newLi.text(peopleArr[i]["name"]);
    $names.append($newLi);
  }
};

// Fetch api data
var fetchSpacePeople = function(){
  console.log("Fetch space people");
  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    type: "GET",
    dataType: "JSONP"
  }).done(function(response){
    displaySpacePeople(response);
  });
};

// Event listener load api data
$(document).ready(function(){

  fetchSpacePeople();

});
