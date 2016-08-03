// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

console.log("Testicles");
var body = document.querySelector("body");
body.style.fontFamily = ("Arial");

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

var nick = document.querySelector('#nickname');
nick.innerHTML = "The Fox";

var fav = document.querySelector('#favorites');
fav.innerHTML = "myself";

var home = document.querySelector('#hometown');
home.innerHTML = "Syndey";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var listItems = document.querySelectorAll('li');


for (var i = 0; i<listItems.length; i++) {
	var currentItem = listItems[i];
	currentItem.setAttribute("class", "Listitem");
	currentItem.style.color = "red";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newImage = document.createElement("img");

newImage.setAttribute("src", "fox.png");
//newImage.src="fox.png";
newImage.style.width = "200px";


document.body.appendChild( newImage ); //adding it to page
