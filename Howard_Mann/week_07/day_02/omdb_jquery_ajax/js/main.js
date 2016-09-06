console.log("OMDB search database");

// Cache JavaScript elements

var displayMovie = function(response) {
  var $title = $('h2#title');
  var $poster = $('img#poster');
  var $plot = $('p#plot');

  $title.text(response["Title"]);
  $poster.attr("src",response["Poster"]);
  $plot.text(response["Plot"]);

};

var ajaxRequest = function(argument) {
  var baseUrl = "http://omdbapi.com?";
  $.ajax({
    url: baseUrl,
    type: "GET",
    dataType: "JSON",
    data: {
      t: argument
    }
  }).done(function(response){
    displayMovie(response);
  });

};

$(document).ready(function(){
  // Cache DOM-related elements in document ready
  var $form = $('form');
  var $search = $('input#search');


  // Add event listener on form for submit action
  $form.on('submit', function(e){
    // Prevent default submit
    e.preventDefault();
    var searchResult = $search.val();
    // If search field empty return false and stop running function; otherwise pass into callback
    if (searchResult === "") {
      console.log("No value");
      return false;
    }
    console.log(searchResult);
    ajaxRequest(searchResult);
  });

});
