var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  var readyState = request.readyState;
  // console.log( readyState );
  if (readyState !== 4) {
    console.log("loading...");
    return false;
  }
  var resultsAsString = request.responseText;
  var resultsAsObject = JSON.parse(resultsAsString);
};

request.open("GET", "http://omdbapi.com?t=Satantango");
request.send();

window.onload = function() {

  var btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    var movie = new XMLHttpRequest();
    var data = JSON.parse(movie.responseText);
    var poster = data["Poster"]

    $("#Poster").attr("src", poster)
    console.log(data["Title"]);
    console.log(data["Poster"]);

    // Find the value of the input
    // Make an XMLHttpRequest asking for information about a particular movie
    // Once the data comes back
    // Represent the movie on the page
    // At least, just the image
    // Creating elements - appending them
  });
};
