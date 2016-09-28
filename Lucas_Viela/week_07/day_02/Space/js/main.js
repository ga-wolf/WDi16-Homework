console.log("Say hi!");

var spacePositionUrl = "http://api.open-notify.org/iss-now.json";
var peopleOnSpaceUrl = "http://api.open-notify.org/astros.json";

var $spaceContent = $(".content");

var peopleOnSpace = function() {
  $.ajax({
    dataType: "JSONP",
    url: url,
    data: data,
    success: success
  }).done(function() {
    console.log(data);
  });

};
