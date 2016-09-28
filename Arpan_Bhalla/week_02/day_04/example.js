var animateBill = function () {
  $(".animate").animate({
    left: "100%"
  }, 2000, function () {

    $(".animate").animate({
      left: "0%"
    }, 2000, function () {
      animateBill();
    });

  });
};

animateBill();
