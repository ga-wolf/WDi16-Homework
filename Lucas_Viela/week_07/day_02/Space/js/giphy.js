$(document).ready(function() {

  var $giphy = $(".giphy");
  var $giphyContent = $(".content");
  var $giphyButton = $(".getGiphy");
  var $giphyInput = $(".input");

  var getGiphyInformation = function(term) {
    $.ajax({
      url: type: dataType: data: {

      }
    }).done(function(data) {
      console.log(data);
    })

  };

  $giphyButton.on("click", function() {
    var searchTerm = $giphyInput.val();
    getGiphyInformation(searchTerm);
  });







});
