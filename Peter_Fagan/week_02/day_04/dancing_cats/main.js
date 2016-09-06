// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.


var walkingCat = document.querySelector("#luke_cat");
walkingCat.style.left = "0px";
walkingCat.style.top = "350px";

var duel = document.querySelector("#duel");
duel.style.display = "none";
duel.style.left = "350px";
duel.style.top = "350px";

var audio1 = new Audio("audio/Binary_Sunset.mp3");
var audio2 = new Audio("audio/imperial_march.mp3");

var body = document.querySelector("body");
body.style.backgroundImage = "url(images/tatooine_sunset.jpg)";
body.style.backgroundSize = "cover";
body.style.height = "100vh";
body.style.width = "100vw";

var maxWidth = window.innerWidth -296;
var halfway = maxWidth/2;

var timerID = null;
var walkRight = null;
var audioStarted = false;
var hasDanced = false;

var catWalk = function () {
  hasDanced = false;
  if (audioStarted === false) {
    audio1.play();
    audio2.pause();
    audio2.currentTime=0;
    audioStarted = true;
  }
  var startWalk = parseFloat(walkingCat.style.left);
  if (startWalk >= maxWidth) {
    audio1.pause();
    audio1.currentTime=0;
    audio2.play();
    walkingCat.style.transform = "scaleX(-1)";
    walkingCat.setAttribute("src", "images/Darth_Cat.gif");
    body.style.backgroundImage = "url(images/deathstar-hangar.jpg)";
    window.clearInterval(timerID);
    timerID = window.setInterval(walkBack, 100);
    return false;
    }
  var walking = startWalk +5;
  walkingCat.style.left = walking + "px";
};

var walkBack = function() {
var returnTrip = parseFloat(walkingCat.style.left);
var walkingBack = returnTrip -5;
  walkingCat.style.left = walkingBack + "px";
  if ((returnTrip <= halfway) && (hasDanced === false)) {
      walkingCat.style.display = "none";
      audio2.pause();
      duel.style.display = "inline-block";
      window.setTimeout(function () {
        // walkingCat.style.display = "block";
        // audio2.play();
        duel.style.display = "none";
        hasDanced = true;
      }, 5000);
  }

  if (returnTrip <= 0) {
    clearInterval(timerID);
    audioStarted = false;
    walkingCat.style.display = "block";
    walkingCat.style.transform = "scaleX(+1)";
    walkingCat.setAttribute("src", "images/luke_cat.gif");
    body.style.backgroundImage = "url(images/tatooine_sunset.jpg)";
    timerID = window.setInterval(catWalk, 100);
  }


};
timerID = window.setInterval (catWalk, 100);
