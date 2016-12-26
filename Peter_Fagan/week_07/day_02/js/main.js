http://api.open-notify.org/astros.json

var baseAstroURL = "http://api.open-notify.org";
var $baseAstro = $(".astro");

var $baseAstroContent = $baseAstro.find(".content");

var displayAstroDetails = function(data) {
  for (var i=0; i<data.people.length; i+=1) {
    var astronaut = (data.people[i].name);
    var $newParagraph = $("<P></P>");

    $newParagraph.text(astronaut);
    $baseAstroContent.append($newParagraph);
  }
};

var getAstroDetails = function() {
  console.log("Getting Astronaut data");
  $.ajax({
    url: baseAstroURL + "/astros.json",
    type: "GET",
    dataType: "JSONP"
  }).done(displayAstroDetails);
};

$(document).ready(function() {

  getAstroDetails();

});
