console.log("Test");

// - Add a script tag to the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
var nickname = document.querySelector("#nickname");
var favorites = document.querySelector("#favorites");
var hometown = document.querySelector("#hometown");

nickname.innerHTML = "Howie Burger";
favorites.innerHTML = "Cage Rage";
hometown.innerHTML = "Radelaide";

var list = document.querySelectorAll("ul li");
for (var i=0; i<list.length; i++) {
  list[i].classList.add("listItem");
}

// Must loop through each value in the array to assign css style value to property
var listItem = document.querySelectorAll(".listItem");
for (var i=0; i<listItem.length; i++) {
  listItem[i].style.color = "red";
}

var newImage = document.createElement('img');
newImage.setAttribute('src','http://www.placecage.com/c/300/300');
document.body.appendChild(newImage);
