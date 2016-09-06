$("img.catRight").css({
  position : "fixed",
  bottom:0,
  right:-300,
});

$("img.cat").css({
  position: "fixed",
  top: 0,
  left: 0,
});

$("img.dog").css({
  position: "fixed",
  bottom:0,
  right:-500,
});


var animatecat = function () {
  $(".cat").animate({
    left: "100%",
    top:"40%"
  }, 2000, function () {

    $(".catRight").animate({
      left: "-30%"
    }, 3000, function () {
      $(".dog").animate({
        left:"-40%"
      },5000, function(){
      
        animatecat();
      });

  });
});
};
  animatecat();



  // $(".cat").animate({
  //   left: "100%",
  //   top: "40%"
  // }, 7000 ,function()
  // $(".catRight").animate ({
  //   right:"100%"
  // },3000 )
