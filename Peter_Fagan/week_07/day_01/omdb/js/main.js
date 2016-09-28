var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  var readyState = request.readyState;
  if ( readyState !== 4 ) {
    return false;
  }
  var resultsAsString = request.responseText;
  var resultsAsObject = JSON.parse(resultsAsString);
  
  document.body.appendChild(document.createElement('img')).setAttribute('src', resultsAsObject.Poster);
};

window.onload = function () {

  var btn = document.querySelector("button");

  btn.addEventListener("click", function() {

    var search = document.getElementById("search").value;
    var searchUrl = "http://omdbapi.com?t=" + search;

    request.open( "GET", searchUrl);
    request.send();
  });
};
