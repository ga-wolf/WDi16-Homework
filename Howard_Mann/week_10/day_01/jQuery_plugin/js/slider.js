(function($){
  // Select slider window div and call slider function
  $.fn.slider = function(interval) {
    var $window = this;
    var $container = $window.children();
    var $img = $container.find('img');
    var counterImg = 0;

    // Set CSS properties of selected window and child container and images
    $window.css({'overflow':'hidden'});
    $container.css({
      'display':'block',
      'width': "3000px"
    });
    $img.css({
      'float':'left'
    });

    // Callback to reset image slider carousel when last img reached
    var resetSlider = function() {
      if (counterImg < ($img.length-2)) {
        counterImg += 1;
      } else {
        $container.css({"marginLeft": '0px'});
        counterImg = 0;
      }
    };

    // jQuery animate method to shift container marginLeft
    var animateSlider = function() {
      var $img_single = $img.eq(counterImg);
      var $img_width = $img_single.width() + "px";
      $container.animate({'marginLeft':'-='+$img_width},'slow', resetSlider);
    };

    // Trigger animation
    window.setInterval(animateSlider, interval);
  };

})(jQuery);
