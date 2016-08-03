var body = document.querySelector("body");
// console.log(body);
body.style.fontFamily ="Arial, sans-serif";

var nickName = document.querySelector("#nickname");
// console.log(nickName);
nickName.innerText = "Drunkmunky";

var favourites = document.querySelector("#favorites");
// console.log(favourites);
favourites.innerHTML = "Nothing much";

var homeTown = document.querySelector("#hometown");
homeTown.innerText = "Sydney";

var listItems = document.querySelectorAll("li");

for (var i=0; i<listItems.length; i+=1) {
  var currentItems = listItems[i];
  currentItems.setAttribute ("class", "listitem");
  currentItems.style.color = "red";
}
console.log(listItems);


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newImage = document.createElement("img");
newImage.setAttribute("src", "BanskyMonkey.jpg");
// newImage.setAttribute ("src", "http://placecage.com/c/250/250");
newImage.style.border = "5px solid dimgray";
document.body.appendChild (newImage);
