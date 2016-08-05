console.log("Cat animation hw");

// Get element

var cat = document.querySelector(".cat");
cat.style.width = "20%";
cat.style.position = "fixed";
cat.style.left = "0%";

// Declare timerID variable for future callback
var timerID;

// Create goForward callback function
var goForward = function() {
  var cachedLeft = parseInt(cat.style.left); // Cache value

  // If rule reached assign timerID to new function
  if (cachedLeft >= 80) {
      console.log("Reached rule");
      window.clearInterval(timerID);
      cat.style.transform = "scaleX(-1)";
      timerID = window.setInterval(goBack,50);
  }

  // Create and assign new value
  var newLeft = cachedLeft + 1 + "%";
  cat.style.left = newLeft;

};

// Assign value of window.setInterval(callback, ms) to timerID
timerID = window.setInterval(goForward, 50);

// Create goBack callback function
var goBack = function() {
  var cachedLeft = parseInt(cat.style.left); // Cache value

  // If rule reached assign timerID to new function
  if (cachedLeft == 0) {
      console.log("Reached rule");
      cat.style.transform = "scaleX(1)";
      window.clearInterval(timerID);

      timerID = window.setInterval(goForward,50);
  }

  // Create and assign new value
  var newLeft = cachedLeft - 1 + "%";
  cat.style.left = newLeft;

};


var Mario = function() {
  button.remove();
  var audioTheme = document.querySelector(".theme");
  var audioJump = document.querySelector(".jump");
  var audioCoin = document.querySelector(".coin");
  var audioPower = document.querySelector(".power");
  var audioFinish = document.querySelector(".finish");
  audioTheme.play();


  // Style background clouds
  document.body.style.background = "url(http://s10.postimg.org/679m6l1sp/cloud_sm.png)";
  document.body.style.backgroundColor = "#6096FF";
  document.body.style.backgroundRepeat = "repeat-x";
  document.body.style.backgroundPositionX = "0px";

  // Style ground
  var container = document.querySelector(".container");
  container.style.backgroundImage = "url(http://wallpaperswa.com/thumbnails/detail/20130724/nintendo%20retro%20super%20mario%20retro%20games_wallpaperswa.com_37.jpg)";
  container.style.backgroundRepeat = "repeat-x";
  container.style.width = "100%";
  container.style.height = "330px";
  container.style.position = "absolute";
  container.style.bottom = "0px";
  container.style.backgroundPositionX = "0px";

  // Create new Super Mario header
  var h1 = document.createElement("h1");
  h1.innerHTML = "SUPER CATMARIO"
  h1.style.fontFamily = "Russo One";
  h1.style.color = "chartreuse";
  h1.style.border = "1px solid ghostwhite";
  h1.style.padding = "10px";
  h1.style.fontSize = "50px";
  h1.style.position = "absolute";
  h1.style.top = "40%";
  h1.style.left = "40%";

  document.body.appendChild(h1);

  // Style cat and set transition duration
  var catImg = document.querySelector(".cat");
  catImg.style.width = "200px"
  catImg.style.position = "fixed";
  catImg.style.left = "0%";
  catImg.style.bottom = "0%";
  catImg.style.transitionDuration = "0.1s";

  // Create callback function for onkey

  var checkKey = function(e) {

    // Store cached position and cloud image variables
    var cachedLeft = parseInt(catImg.style.left);
    var cachedBottom = parseInt(catImg.style.bottom);
    var cachedCloud = parseInt(document.body.style.backgroundPositionX);
    var cachedGround = parseInt(container.style.backgroundPositionX);

    // Set image of cat gif walking each time key is pressed
    catImg.setAttribute("src","http://www.anniemation.com/clip_art/images/cat-walk.gif");

    if (e.keyCode === 37) {
      // Cat move left
      console.log("left arrow");
      var newLeft = Math.max(cachedLeft-1,0);
      catImg.style.left = newLeft+"%";
      catImg.style.transform = "scaleX(-1)";

      // Background move right
      var newCloud = cachedCloud+5;
      var newGround = cachedGround+30;
      document.body.style.backgroundPositionX = newCloud + "px";
      container.style.backgroundPositionX = newGround + "px";
    }
    else if (e.keyCode === 39) {
      // Cat move right
      console.log("right arrow");
      var newLeft = Math.min(cachedLeft+1,90);
      catImg.style.left = newLeft+"%";
      catImg.style.transform = "scaleX(1)";


      // Background cloud move left
      var newCloud = cachedCloud-5;
      var newGround = cachedGround-30;
      document.body.style.backgroundPositionX = newCloud + "px";
      container.style.backgroundPositionX = newGround + "px";
    }
    else if (e.keyCode === 32) {
      // Cat jump
      console.log("space bar");
      var oldBottom = parseInt(catImg.style.bottom);
      var newBottom = Math.max(cachedBottom+30,0);
      var oldWidth = parseInt(catImg.style.width);

      catImg.style.transitionDuration = "0.5s";
      catImg.style.bottom = newBottom+"%";
      audioJump.play();

      if (Math.floor(Math.random()*100)%4===0) {
        setTimeout(function() {
          audioCoin.play();
        },350);
      }

      if (Math.floor(Math.random()*100)%10===0) {
        setTimeout(function() {
          audioPower.play();
          var newWidth = oldWidth+250;
          catImg.style.width = newWidth+"px";
        },350);
      }

      if(oldWidth > 1000) {
        catImg.setAttribute("src","http://blog.gitter.im/content/images/2015/03/dancing_badgers.gif");
        document.onkeydown = null;
        document.onkeyup = null;
        audioFinish.play();
        audioTheme.pause();
        document.body.style.background = "chartreuse";
        h1.innerHTML = "BADGER TIME";
        h1.style.color = "hotpink";

        return false;
      }


      // While jump disable onkey and set timer to come back down and then enable onkey
      document.onkeydown = null;
      setTimeout(function() {
        catImg.style.bottom = oldBottom+"%";
      },500);
      setTimeout(function() {
        document.onkeydown = checkKey;
      },600);
    }


  };

  // Callback function when pressing keyboard
  document.onkeydown = checkKey;

  // When not pressing use static image
  // document.onkeyup = function(){
  //   catImg.setAttribute("src","images/catStatic.png");
  // };

};

var button = document.querySelector("button");
var coin = document.querySelector(".coin");

button.addEventListener("click", function(){
  console.log("clicked");
  coin.play();
  Mario();
});
