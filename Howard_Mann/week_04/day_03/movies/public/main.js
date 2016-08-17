console.log("Hello");

// Image slider inspired by willrstern GitHub

$(document).ready(function(){
  var $slider = $('.slider');
  var $poster = $('.poster');
  var number = $poster.length
  var animateSpeed = 1000;
  var interval = 2000;
  var currentPoster = 1;

  var successCallback = function() {
    if (currentPoster < (number/2)) {
      currentPoster++;
    } else {
      $slider.css({'marginLeft':'0px'});
      currentPoster = 1;
    }
  };

  var animateSlide = function() {
    $slider.animate({'marginLeft':'-='+'210px'},animateSpeed,successCallback);
  };

  setInterval(animateSlide,interval);

});
