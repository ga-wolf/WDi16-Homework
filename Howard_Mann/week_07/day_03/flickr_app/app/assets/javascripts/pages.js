console.log("Our Flickr App");

// Create important variables and cached jQuery variables used multiple times
var baseFlickrURL = "https://api.flickr.com/services/rest/"; // Base Flickr URL
var API_KEY = "3ab66c44737420e50ceaee170f6eb074"; // API Keys
var pageNumber = 1; // Set initial page number as 1 for api page request
var $container;
var $error;
var $buttonPrev;
var $buttonNext;

// Create callback to generates image URL (because Flickr API suck)
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
var generateImageURL = function(currentPhoto) {
  var url = "https://farm";
  url += currentPhoto.farm;
  url += ".staticflickr.com/";
  url += currentPhoto.server;
  url += "/";
  url += currentPhoto.id;
  url += "_";
  url += currentPhoto.secret;
  url += "_q.jpg";
  return url;
};

// Create callback to displays one image from image URL
var displayPhoto = function(url) {
  var $img = $("<img>");
  $img.attr("src", url);
  $img.appendTo($container).hide();
  // fadeIn once image has loaded
  $img.load(function(){
    $(this).fadeIn("slow");
  });
};

// Create callback to display one image
var displayPage = function(data) {
  var page = data["photos"]["page"];
  var pages = data["photos"]["pages"];
  var pageMsg = "Page: " + page + " of "+ pages;

  $('#page').text(pageMsg);   // append page message
  // Rules to show nextpage button
  if (pages > 1) {
    $buttonNext.fadeIn();
  }
  if (page === pages) {
    $buttonNext.fadeOut();
  }
};

// Create callback to take loop through all images as they come through and pass through to callback above to display single image
var handleSearchData = function(data){
  var arrOfPhotos = data["photos"]["photo"];

  if (arrOfPhotos.length > 0) {
    for (var i = 0; i < arrOfPhotos.length; i++) {
      var currentPhoto = arrOfPhotos[i];
      var imageURL = generateImageURL( currentPhoto );
      displayPhoto(imageURL);
    }
    displayPage(data);
    $container.fadeIn("slow");
  } else {
    $error.text("No photos found");
  }
};

// Search Flickr via api fetch request
var searchFlickr = function(term){
  $error.empty(); // Clear any error messages

  // jQuery AJAX call to fetch desired JSON data
  $.ajax({
    url: baseFlickrURL,
    type: "GET",
    //HM note: data is the equivalent of url search params i.e. baseFlickrURL+ 'method=flickr.photos.search'+'api_key=...' etc.'
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: term, // From input submit value
      format: "json",
      page: pageNumber, // Variable will change based on next and prev page button event listener
      per_page: 50,
      nojsoncallback: true  // Specific callback to Flickr API, disable
    }
  }).done(function(data){
    handleSearchData(data); // Upon success response to callback above
  });
};

$(document).ready(function(){
  // Assign values to jQuery selectors
  $error = $('#error');
  $container = $('#container');
  $buttonPrev = $("button#prev-page");
  $buttonNext = $("button#next-page");


  var searchTerm; // Set within global scope of documentReady
  // Form validation to check valid search input
  $('input[type="submit"]').on('click',function(e){
    searchTerm = $("input#searchFlickr").val();
    e.preventDefault();
    $('img').remove();
    if (searchTerm === "") {
      $error.text("Enter search above");
      return false;
    } else {
      pageNumber = 1; // Reset pageNumber url to 1 with new search
      $buttonPrev.fadeOut();
      searchFlickr(searchTerm);
    }
  });

  // Next page button event listener, call AJAX fetch request with new page Number variable
  $('button#next-page').on('click',function(){
    $buttonPrev.fadeIn();
    $('img').remove();
    console.log("Next page clicked");
    // Iterate page url paramater
    pageNumber += 1;
    searchFlickr(searchTerm);
    $('img').remove();
  });

  // Prev page button even listener, similar to next page above
  $('button#prev-page').on('click',function(){
    console.log("Prev page clicked");
    $('img').remove();
    // Iterate page url paramater
    if (pageNumber > 1) {
      pageNumber -= 1;
      searchFlickr(searchTerm);
      $('img').remove();
    }
    if (pageNumber === 1) {
      $buttonPrev.fadeOut();
    }
  });

  // Infinite scroll event listener. Triggers ajax fetch request when at close to bottom of page. HM note: Important to set as low as possible otherwise user may keep triggering
  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var pxFromBottom = documentHeight - scrollTop - windowHeight;

    // Call new ajax request with new pageNumber params
    if (pxFromBottom < 5) {
      pageNumber+=1;
      searchFlickr(searchTerm);
    }
  });
});
