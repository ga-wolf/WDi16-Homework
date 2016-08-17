
// Set Cat parameters
var cat = document.querySelector('.mainCat');
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.top = "400px";
cat.style.width = "200px";
var newLeft;
var oldLeft;
var walkingLeft;
var walkingRight;
// Cat walks right
var catwalkRight = function() {
   oldLeft = parseInt(cat.style.left);
   newLeft = oldLeft + 20;
  cat.style.left = newLeft + 'px';
  if (newLeft === ((window.innerWidth) - 200)){
    cat.style.transform = "scale(-1,1)";
     walkingLeft =  setInterval(catwalkLeft, 50);
     clearInterval(walking);
     clearInterval(walkingRight);
   }
};
// Cat spins, then walks back and then moon walks
var catwalkLeft = function() {
  oldLeft = parseInt(cat.style.left);
  newLeft= oldLeft - 20;
  cat.style.left = newLeft + 'px';
  if (newLeft === 460 ){
    cat.style.transform = "scale(1,1)";
 }
};
var walking = setInterval(catwalkRight, 50);

// Horse to run across right to left
var horse = document.querySelector(".horse");
horse.style.right = "0px";
horse.style.top = "270px";
horse.style.position = "absolute";
horse.style.transform = "scale(-1,1)";
horse.style.width = "350px";
horse.style.visibility = "hidden";

function timerHorse() {
var timerID = null;
var triggerHorse = function(){
var cachedLeft = parseFloat(horse.style.right);
if ( cachedLeft >= 2000) {
    window.clearInterval( timerID );
    return false;
}
horse.style.visibility = "visible";
var horseLeft = cachedLeft + 50;
horse.style.right = horseLeft + "px";
console.log("horse moved");
};
timerID = window.setInterval(triggerHorse, 50);
}
setInterval(timerHorse,29800);

// Cue the wolf choir
var wolf =
document.querySelector('.wolf');
var wolfTwo =
document.querySelector('.wolfTwo');
var wolfThree =
document.querySelector('.wolfThree');
var wolfFour =
document.querySelector('.wolfFour');
wolf.style.visibility = "hidden";
wolfTwo.style.visibility = "hidden";
wolfThree.style.visibility = "hidden";
wolfFour.style.visibility = "hidden";
wolf.style.position = "absolute";
wolfTwo.style.position = "absolute";
wolfThree.style.position = "absolute";
wolfFour.style.position = "absolute";
wolf.style.width = "160px";
wolfTwo.style.width = "130px";
wolfThree.style.width = "160px";
wolfFour.style.width = "130px";
wolf.style.transform = "scale(-1,1)";
wolfTwo.style.transform = "scale(-1,1)";
wolf.style.left = "460px";
wolf.style.top = "380px";
wolfTwo.style.left = "500px";
wolfTwo.style.top = "410px";
wolfThree.style.left = "620px";
wolfThree.style.top = "380px";
wolfFour.style.left = "660px";
wolfFour.style.top = "410px";

function timerWolf(){
    wolf.style.visibility="visible";
    wolfTwo.style.visibility="visible";

}
setTimeout(timerWolf,30500);
clearTimeout(timerWolf);

function timerWolfTwo(){
  wolfThree.style.visibility="visible";
  wolfFour.style.visibility="visible";
}
setTimeout(timerWolfTwo,30055);
clearTimeout(timerWolfTwo);

// Cue dancing badger
var badger =
document.querySelector('.badger');
badger.style.visibility = "hidden";
badger.style.position = "absolute";
badger.style.width = "120px";
function timerBadger(){
    badger.style.visibility="visible";
    badger.style.left = "110px";
    badger.style.top = "220px";
}
setTimeout(timerBadger,4000);

// Cue the drums
var drums =
document.querySelector('.drums');
drums.style.visibility = "hidden";
drums.style.position = "absolute";
drums.style.width = "160px";
function timerDrums(){
    drums.style.visibility="visible";
    drums.style.left = "290px";
    drums.style.top = "400px";
}
setTimeout(timerDrums,18000);

// Cue the marching band
var band =
document.querySelector('.band');
band.style.visibility = "hidden";
band.style.position = "absolute";
band.style.width = "360px";
band.style.left = "600px";
band.style.top = "130px";

// function timerBand(){
//     band.style.visibility="visible";
// }
// setTimeout(timerBand,30700);

setTimeout(function(timerBand) {
    band.style.visibility="visible";
  var interval = setInterval(timerBand, 20);
    band.style.transform = "scale(-1,1)";
    clearInterval(interval);
}, 30700);

// Cue the patient running across screen
var patient = document.querySelector(".patient");
patient.style.left = "0px";
patient.style.top = "610px";
patient.style.position = "absolute";
patient.style.width = "100px";
patient.style.visibility = "hidden";
patient.style.obacity = "0.3";

function timerPatient() {

var triggerPatient = function(){
var cachedPosition = parseFloat(patient.style.left);
// var cachedSize = parseFloat(patient.style.width);
if ( cachedPosition >= 2000) {
    window.clearInterval( timerID );
    return false;
}
patient.style.visibility = "visible";
var patientLeft = cachedPosition + 5;
patient.style.left = patientLeft + "px";
// patient.style.width = patientLeft + "px";
};
timerID = window.setInterval(triggerPatient, 50);
}
setTimeout(timerPatient,5000);
var timerID = null;

// Timer for background
var background = document.querySelector('.background');
background.style.visibility = "hidden";
// background.style.position = "absolute";
function timerBackground(){
    background.style.visibility="visible";    background.style.width = "100%";
    background.border.shadow = "50px";
}
setTimeout(timerBackground,8500);

// Parrot fly across screen
var parrot = document.querySelector(".parrot");
parrot.style.right = "0px";
parrot.style.top = "20px";
parrot.style.position = "absolute";
parrot.style.transform = "scale(-1,1)";
parrot.style.width = "200px";
parrot.style.visibility = "hidden";

function timerParrot() {
var timerID = null;
var triggerParrot = function(){
var cachedLeft = parseFloat(parrot.style.right);
if ( cachedLeft >= 2000) {
    window.clearInterval( timerID );
    return false;
}
parrot.style.visibility = "visible";
var parrotLeft = cachedLeft + 10;
parrot.style.right = parrotLeft + "px";
console.log("parrot moved");
};
timerID = window.setInterval(triggerParrot, 50);
}
setInterval(timerParrot,20000);

// var parrot =
// document.querySelector('.parrot');
// parrot.style.visibility = "hidden";
// parrot.style.position = "absolute";
// parrot.style.width = "160px";
// function timerParrot(){
//     parrot.style.visibility="visible";
//     parrot.style.left = "280px";
//     parrot.style.top = "90px";
// }
// setInterval(timerParrot,40000);
// setTimeout(timerParrot,60000);

// Cue crazy as a coconut
var coconut = document.querySelector(".coconut");
coconut.style.right = "150px";
coconut.style.top = "0px";
coconut.style.position = "absolute";
coconut.style.width = "150px";
coconut.style.visibility = "hidden";

function timerCoconut() {
var timerID = null;
var triggerCoconut = function(){
var cachedTop = parseFloat(coconut.style.top);
if ( cachedTop >= 500) {
    window.clearInterval( timerID );
    return false;
}
coconut.style.visibility = "visible";
var coconutLeft = cachedTop + 50;
coconut.style.top = coconutLeft + "px";
console.log("parrot moved");
};
timerID = window.setInterval(triggerCoconut, 50);
}
setTimeout(timerCoconut,49000);

// Cue false teeth
var teeth = document.querySelector(".teeth");
teeth.style.right = "0px";
teeth.style.top = "0px";
teeth.style.position = "absolute";
teeth.style.width = "150px";
teeth.style.visibility = "hidden";

function timerTeeth() {
var timerID = null;
var triggerTeeth = function(){
var cachedTop = parseFloat(teeth.style.top);
if ( cachedTop >= 470) {
    window.clearInterval( timerID );
    return false;
}
teeth.style.visibility = "visible";
var teethTop = cachedTop + 50;
teeth.style.top = teethTop + "px";
console.log("parrot moved");
};
timerID = window.setInterval(triggerTeeth, 50);
}
setTimeout(timerTeeth,68000);

// Cue the violins
var violin =
document.querySelector('.violin');
violin.style.visibility = "hidden";
violin.style.position = "absolute";
violin.style.width = "160px";
function timerViolin(){
    violin.style.visibility="visible";
    violin.style.left = "790px";
    violin.style.top = "400px";
}
setTimeout(timerViolin,112000);

// Cue the rocket
var rocket = document.querySelector(".rocket");
rocket.style.left = "345px";
rocket.style.bottom = "20px";
rocket.style.opacity = ".5";
rocket.style.position = "absolute";
rocket.style.transform = "scale(-1,1)";
rocket.style.width = "200px";
rocket.style.visibility = "hidden";

function timerRocket() {
var timerID = null;
var triggerRocket = function(){
var cachedTop = parseFloat(rocket.style.bottom);
if ( cachedTop >= 4000) {
    window.clearInterval( timerID );
    return false;
}
rocket.style.visibility = "visible";
var rocketTop = cachedTop + 15;
rocket.style.bottom = rocketTop + "px";
console.log("parrot moved");
};
timerID = window.setInterval(triggerRocket, 50);
}
setTimeout(timerRocket,85000);

// Cue the cowboy
var cowboy = document.querySelector(".cowboy");
cowboy.style.left = "0px";
cowboy.style.top = "470px";
cowboy.style.position = "absolute";
cowboy.style.width = "150px";
cowboy.style.visibility = "hidden";

function timerCowboy() {

var triggerCowboy = function(){
var cachedPosition = parseFloat(cowboy.style.left);
// var cachedSize = parseFloat(cowboy.style.width);
if ( cachedPosition >= 2000) {
    window.clearInterval( timerID );
    return false;
}
cowboy.style.visibility = "visible";
var cowboyLeft = cachedPosition + 25;
cowboy.style.left = cowboyLeft + "px";
// cowboy.style.width = patientLeft + "px";
};
timerID = window.setInterval(triggerCowboy, 50);
}
setTimeout(timerCowboy,92000);
