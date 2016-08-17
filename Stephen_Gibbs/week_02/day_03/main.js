// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newScript = document.createElement("script");
var scriptText = document.createTextNode("");
newScript.appendChild(scriptText);
document.body.appendChild(newScript);

var toChange= document.querySelector('body');
toChange.style.fontFamily = "Arial, sans-serif";


//added text to space inbetween span and also to one span id
var toChangeA = document.querySelector("#nickname");
toChangeA.setAttribute("id", "gibbsy");
toChangeA.innerText = "gibbsy";

var toChangeB = document.querySelector("#favorites");
toChangeB.innerText = "strawberry";

var toChangeC = document.querySelector("#hometown");
toChangeC.innerText = "hobart";


var toChangeD = document.querySelectorAll('li');
for (var i=0; i<toChangeD.length; i +=1) {
toChangeD[i].setAttribute("class", "listitem");
}

var toChangeE = document.querySelectorAll('.listitem');
for (var i=0; i<toChangeE.length; i+=1){
  console.log(toChangeE[i]);
  toChangeE[i].style.color = "red";
}

var newImage = document.createElement("img");
var newImageText = document.createTextNode("http://placecage.com/c/200/200")
newImage.appendChild (newImageText);
document.body.appendChild (newImage);
newImage.setAttribute("src", "http://placecage.com/c/200/200");
