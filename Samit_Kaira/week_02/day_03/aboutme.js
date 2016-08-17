// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
var x = document.querySelector("body");
x.style.fontFamily="Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
var y = document.querySelector("#nickname");
y.innerHTML="Samwise";


var z = document.querySelector("#favorites");
z.innerHTML="chocolate";

var a = document.querySelector("#hometown");
a.innerHTML="Sydney";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var listItems = document.querySelectorAll("ul li"); //listItems is an array

for (var i = 0; i < listItems.length; i+=1){
  var itemList = listItems[i];
      itemList.setAttribute("class","listitem");
      console.log(itemList);
      itemList.style.color="red";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var newImg = document.createElement("img");
var newImgSrc = newImg.setAttribute("src","http://fillmurray.com/200/200");

newImg.appendChild(newImgSrc);
document.body.appendChild(newImg);
