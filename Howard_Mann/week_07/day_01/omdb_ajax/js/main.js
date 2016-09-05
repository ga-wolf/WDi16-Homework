console.log("AJAX HW");

$(document).ready(function() {
  var $search = $('.search');
  var $btn = $('button');
  var $title = $('.title');
  var $poster = $('.poster');
  var $output = $('.output');
  var $status = $('.status');
  var result;

  $status.hide();
  $output.hide();

  var request = new XMLHttpRequest();

  var searchOMDB = function(value) {
    var url = "http://omdbapi.com?t=" + value;
    request.open("GET", url);
    request.send();
    request.onreadystatechange = function() {
      console.log("Readystate: " + request.readyState);
      if (request.readyState === 4) {
        result = JSON.parse(request.responseText);
        if (result["Response"] === "True") {
          $status.hide();
          $title.html(result["Title"]);
          if (result["Poster"] === "N/A") {
            $poster.attr("src", "http://fillmurray.com/150/200");
          } else {
            $poster.attr("src", result["Poster"]);
          }
          $output.fadeIn("slow");
        } else {
          $status.html("No results found");
        }
      };
    };
  };

  $btn.on('click', function() {
    var value = $search.val();
    searchOMDB(value);
    console.log("click");
    console.log("Readystate: " + request.readyState);
    $status.html("...loading");
    $status.fadeIn();
    $output.hide();
  });

});
