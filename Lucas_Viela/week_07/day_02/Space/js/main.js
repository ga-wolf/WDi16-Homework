$(document).ready(function() {

  var $content = $(".content");
  var $logitude = $(".logitude");
  var $latitude = $(".latitude");


  var getTheSpaceInformation = function() {
    $.ajax({
      url: "http://api.open-notify.org/astros.json",
      type: "GET"
      dataType: "JSONP",

    }).done(function() {
      console.log(dataType);
    });
  };
  getTheSpaceInformation();






});
