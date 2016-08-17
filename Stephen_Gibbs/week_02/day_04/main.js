console.log("hi hi hi");

var kitty = document.querySelector('.kitty');
var kitty2 = document.querySelector('.kitty2');
var endCat =document.querySelector('.endcat');
kitty.style.position = "fixed";
kitty.style.top = "150px";
kitty.style.left = "0px";
kitty2.style.position = "fixed";
kitty2.style.bottom="0px";
kitty2.style.right ="0px";
endCat.style.position = "fixed";
endCat.style.left = "900px";
endCat.style.borderRadius = "50%";

//kitty.style.transform= "scaleX(-1)";
var timerID = null;


// create a function that will be used as a callback
var moveKitty = function (){
  var cachedLeft = parseFloat(kitty.style.left);
  if (cachedLeft>1200) {
    // kitty.style.transform="scaleX(-1)";  //new
    newLeft = 1210;
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
timerID=window.setInterval(moveKitty, 50);
console.log(timerID);
