window.onload = function() {

  var btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    // TODO: append a loading image to the page here.
    // Find the value of the input
    // Make an XMLHttpRequest asking for information about a particular movie
    var request = new XMLHttpRequest();
    var movie = $("input").val();
    var request = new XMLHttpRequest();
    var requestURL = "http://omdbapi.com?t=" + movie

    request.open("GET", requestURL)
    request.send();
    request.onreadystatechange = function() {

      var readyState = request.readyState;
      // console.log( readyState );
      if (readyState !== 4) {
        console.log("loading...");
        return false;
      } else {
        // TODO: REMOVE THE LOADING IMAGE FROM THE PAGE
        var resultsAsString = request.responseText;
        var resultsAsObject = JSON.parse(resultsAsString);
        var poster = resultsAsObject["Poster"]
        $img = $(this).attr('src');
        $('#poseter').append("<img src="+$img+" />")
        console.log(poster);
      }
    };



    // Once the data comes back
    // Represent the movie on the page
    // console.log(data["Title"]);
    // // At least, just the image
    // console.log(data["Poster"]);
    // // Creating elements - appending them
    // $("#Poster").attr("src", poster)
  });
};
