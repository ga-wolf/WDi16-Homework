var body = document.querySelector("body");
body.style.backgroundImage= 'url(race2.png)';

var cat1 = document.querySelector('#cat1');
// give a start point
cat1.style.position = "fixed";
cat1.style.top = "240px";
cat1.style.left = "0px";
cat1.style.height = "200px";
// set up a variable for timer
var timerId = null;
// create a function for call back

var moveCat1 = function(){
	var currentLeft = parseFloat(cat1.style.left);
	cat1.style.transform = "scaleX(-1)";
	if (currentLeft >= 1100) {			//STOPPING IT
		window.clearInterval(timerId);
		timerId = window.setInterval(moveCat1Back, 100);
	}
	var newLeft = currentLeft + 8;
	cat1.style.left = newLeft + "px";
};

var moveCat1Back = function(){
	var currentLeft = parseFloat(cat1.style.left);
	cat1.style.transform = "scaleX(1)";
	if (currentLeft <= 0) {			//STOPPING IT
		window.clearInterval();
		//timerId = window.setInterval(moveCat1,500); //continual movement remove to stop
	}
	var newLeft = currentLeft - 10;
	cat1.style.left = newLeft + "px";
};

timerId = window.setInterval( moveCat1, 100);
console.log(timerId);

 //end of cat 1

var cat2 = document.querySelector('#cat2');
// give a start point
cat2.style.position = "fixed";
cat2.style.top = "0px";
cat2.style.left = "0px";
cat2.style.height = "200px";
// set up a variable for timer
var timerId1 = null;
// create a function for call back

var moveCat2 = function(){
	var currentLeft = parseFloat(cat2.style.left);
	cat2.style.transform = "scaleX(-1)";
	if (currentLeft >= 1100) {			//STOPPING IT
		window.clearInterval(timerId1);
		timerId1 = window.setInterval(moveCat2Back, 100);
	}
	var newLeft = currentLeft + 6	;
	cat2.style.left = newLeft + "px";
};

var moveCat2Back = function(){
	var currentLeft = parseFloat(cat2.style.left);
	cat2.style.transform = "scaleX(1)";
	if (currentLeft <= 0) {			//STOPPING IT
		window.clearInterval();
		//window.setInterval(moveCat2,500); //continual movement remove to stop
	}
	var newLeft = currentLeft - 17;
	cat2.style.left = newLeft + "px";
};

timerId1 = window.setInterval( moveCat2, 100);
console.log(timerId1);

//end of cat 2

var cat3 = document.querySelector('#cat3');
// give a start point
cat3.style.position = "fixed";
cat3.style.top = "500px";
cat3.style.left = "0px";
cat3.style.height = "180px";
// set up a variable for timer
var timerId2 = null;
// create a function for call back

var moveCat3 = function(){
	var currentLeft = parseFloat(cat3.style.left);
	cat3.style.transform = "scaleX(1)";
	if (currentLeft >= 1100) {			//STOPPING IT
		window.clearInterval(timerId2);
		timerId2 = window.setInterval(moveCat3Back, 100);
	}
	var newLeft = currentLeft + 9;
	cat3.style.left = newLeft + "px";
};

var moveCat3Back = function(){
	var currentLeft = parseFloat(cat3.style.left);
	cat3.style.transform = "scaleX(-1)";
	if (currentLeft <= 0) {			//STOPPING IT
		window.clearInterval();
		//window.setInterval(moveCat2,500); //continual movement remove to stop
	}
	var newLeft = currentLeft - 8;
	cat3.style.left = newLeft + "px";
};
timerId2 = window.setInterval( moveCat3, 100);


//badger
var badg = document.querySelector('#badg');
// give a start point
badg.style.position = "fixed";
badg.style.top = "100px";
badg.style.left = "100px";
badg.style.height = "10px";
// set up a variable for timer

//clearTimeout(myVar);

var bigBadg = function(){
	var currentHeight = parseFloat(badg.style.height);
	var newHeight = currentHeight + 20;
	badg.style.height = newHeight + "px";
	window.setInterval(bigBadg, 300);
	};

window.setTimeout(bigBadg, 23000);
