console.log("hi hi hi");

var kitty = document.querySelector('.kitty');

kitty.style.position = "fixed";
kitty.style.top = "0px";
kitty.style.left = "0px";
//kitty.style.transform= "scaleX(-1)";
var timerID = null;

// create a function that will be used as a callback
var moveKitty = function (){
  var cachedLeft = parseFloat(kitty.style.left);
  if (cachedLeft>1200) {
    kitty.style.transform="scaleX(-1)";  //new
    kitty.style.left = "1200px";
    kitty.style.right ="0px";
    var cachedRight = parseFloat(kitty.style.right);
    var newRight = cachedRight + 4;   //new
    kitty.style.right = newRight + "px";  //new

    // window.clearInterval(timerID);
    // return false;
  }
  console.log(cachedLeft);
  var newLeft = cachedLeft + 4;
  console.log(newLeft);
  kitty.style.left = newLeft + "px";
};

timerID=window.setInterval(moveKitty, 100);
console.log(timerID);

//
// var kitty2 = document.querySelector('.kitty');
//
// kitty2.style.position = "fixed";
// kitty2.style.top = "150px";
// kitty2.style.left = "1200px";
// kitty.style.transform= "scaleX(-1)";
// var timerID2 = null;
//
// timerID2=window.setInterval(moveKittyBack, 100);
// console.log(timerID2);
//
//
//
// var moveKittyBack = function (){
//   var cachedRight = parseFloat(kitty.style.left);
//   if (cachedRight<=1200){
//     window.clearInterval(timerID);
//     return false;
//   }
//   console.log(cachedLeft);
//   var newLeft = cachedLeft + 4;
//   console.log(newLeft);
//   kitty.style.left = newLeft + "px";
// };
//
//
