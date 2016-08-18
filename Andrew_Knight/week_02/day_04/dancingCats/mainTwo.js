var cat = document.querySelector(".mainCat");
cat.style.left = "0px";
cat.style.position = "absolute";
cat.style.top = "100px";

var moveCat = function() {
console.log("Cat moved");
var cachedLeft = parseFloat( catt.style.left);
if ( cachedLeft <= ((window.innerWidth)-200)) {
    window.clearInterval(timerID );
    return false;
}

};
