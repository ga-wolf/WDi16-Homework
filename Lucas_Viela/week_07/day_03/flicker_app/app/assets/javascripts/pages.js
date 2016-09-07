//Create our important variables
var baseAPI = "https://api.flickr.com/services/rest";
var API_KEY = "2f5ac274ecfac5a455f38745704ad084";
var counter = 1;
var $next;
var $prev;

var generateImageURL = function(data) {
  var url = "http://farm";
  url += data.farm;
  url += ".staticflickr.com/";
  url += data.server;
  url += "/";
  url += data.id;
  url += "_";
  url += data.secret;
  url += "_q.jpg";
  return url;

};

var displayPhoto = function(url) {
  var $img = $("<img>");
  $img.attr("src", url);
  $(".container").append($img);
};

var handleSearchData = function(data) {
  var arrOfPhotos = data.photos.photo;
  for (var i = 0; i < arrOfPhotos.length; i++) {
    var currentPhoto = arrOfPhotos[i];
    var imageURL = generateImageURL(currentPhoto);
    displayPhoto(imageURL);
  }
};

var searchFlickr = function(term) {
  $.ajax({
    url: baseAPI,
    type: "GET",
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: term,
      format: "json",
      nojsoncallback: true,
      page: counter,
      per_page: 5

    }
    // }).done(handleSearchData);
  }).done(function(data) {
    console.log(data);
    handleSearchData(data);
  })

};

$(document).ready(function() {

  var clear = function() {
    $(".container").empty();
  };

  $("form").on("submit", function(e) {
    e.preventDefault();
    searchQuery = $("#searchFlickr").val();
    $next = $("#next");
    $prev = $("#prev");



    if (searchQuery.length === 0) {
      $("#searchFlickr").css({
        border: "1px solid red"
      });
      return false;
    }
    searchFlickr(searchQuery);
    clear();

    //Pagination

    $prev.on("click", function() {
      if (counter === 1) {
        //do nothing
      } else {
        counter--;
        clear();
        searchFlickr(searchQuery);
      }


    });
    $next.on("click", function() {
      counter++;
      clear();
      searchFlickr(searchQuery);

    });

  });




});
