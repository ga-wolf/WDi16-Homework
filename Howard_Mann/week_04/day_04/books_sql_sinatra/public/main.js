console.log("JavaScript");

$(document).ready(function(){
  var $title = $('.title');

  $title.on('click',function(){
    $(this).parent().find('.cover').fadeToggle(1000);
  });

});
