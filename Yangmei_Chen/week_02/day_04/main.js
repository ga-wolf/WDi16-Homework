// Create a variable to store a reference to the img.
var body = document.querySelector("body");
body.style.backgroundImage = "url(https://66.media.tumblr.com/812ec62de54876aa6f20764a5b5fd0e7/tumblr_nxsah86Yp81ukgokvo1_500.gif)";
body.style.backgroundSize = "cover";

var cat = document.querySelector("#cat1");
console.log(cat);
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
cat.style.left = "0";
cat.style.top = "0";
cat.style.width = "20px";
var timerID = null;
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
var catWalk = function (){
  var oldLeft = parseFloat(cat.style.left);
  var oldTop = parseFloat(cat.style.top);
  var oldWidth = parseFloat(cat.style.width);
  if (oldLeft >= 85) {
    window.clearInterval(timerID);
    cat.style.transform = "scaleX(-1)";
    timerIDTwo = window.setInterval(catWalkTwo, 50);
    return false;
  }
  var newLeft = oldLeft + 0.3;
  var newTop = oldTop + 0.05;
  var newWidth = oldWidth + 2;
  cat.style.left = newLeft + "%";
  cat.style.top = newTop + "%";
  cat.style.width = newWidth + "px";
};
timerID = window.setInterval(catWalk, 50);

var catWalkTwo = function(){
  var oldLeft = parseFloat(cat.style.left);
  if (oldLeft <= 20) {
    window.clearInterval(timerIDTwo);
    body.style.backgroundImage = "url(http://www.clipartandgraphics.com/images/backgrounds/colorwave2.gif)";
    body.style.backgroundSize = "cover";
    cat.style.visibility = "hidden";

    var imgOne = document.createElement("img");
    imgOne.setAttribute("src", "badger.gif");
    body.appendChild(imgOne);
    imgOne.style.width = "100px";
    imgOne.style.position = "fixed";
    imgOne.style.top = "30%";
    imgOne.style.left = "30%";
    imgOne.style.borderRadius = "15%";

    var makeFat = function(){
      var oldSize = parseFloat(imgOne.style.width);
      if (oldSize > 800) {
        window.clearInterval(timerIDThree);
      }
      var newSize = oldSize + 1 + "px";
      imgOne.style.width = newSize;
    };
    timerIDThree = window.setInterval(makeFat, 100);

    var imgTwo = document.createElement("img");
    imgTwo.setAttribute("src", "colorcat.gif");
    body.appendChild(imgTwo);
    imgTwo.style.borderRadius = "20%";

    var imgThree = document.createElement("img");
    imgThree.setAttribute("src", "giphy.gif");
    body.appendChild(imgThree);
    imgThree.style.position = "fixed";
    imgThree.style.left = "0";
    imgThree.style.bottom = "0";
    imgThree.style.width = "200px";

  }
  var newLeft = oldLeft - 0.6;
  cat.style.left = newLeft + "%";
};







//
// .img-vert {
//         -moz-transform: scaleY(-1);
//         -o-transform: scaleY(-1);
//         -webkit-transform: scaleY(-1);
//         transform: scaleY(-1);
//         filter: FlipV;
//         -ms-filter: "FlipV";
// }

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
