var kitty = document.querySelector('.kitty');
var kitty2 = document.querySelector('.kitty2');
var endCat = document.querySelector('.endcat');
kitty.style.position = "fixed";
kitty.style.top = "150px";
kitty.style.left = "0px";
kitty2.style.position = "fixed";
kitty2.style.bottom = "0px";
kitty2.style.right = "0px";
kitty2.style.borderRadius = "20%";

endCat.style.position = "fixed";
endCat.style.left = "900px";
endCat.style.borderRadius = "50%";

//kitty.style.transform= "scaleX(-1)";
var timerID = null;
var forward = true;
var moveKitty = function() {
    if (forward && kitty.style.left === "1200px") {
        forward = false;
        console.log("forward is false");
        // return false;
        kitty.style.transform= "scaleX(-1)";
    } else if (!forward && kitty.style.left === "200px") {
        forward = true;
        console.log("forward is true");
        kitty.style.transform= "scaleX(1)";

    }
    var cachedLeft = parseFloat(kitty.style.left);
    var newLeft = cachedLeft;

    if (forward === true) {

        newLeft = newLeft + 4;
        kitty.style.left = newLeft + "px";
        console.log("heading forwards");
        // return false;

    } else if (forward === false) {
        newLeft = newLeft - 4;
        kitty.style.left = newLeft + "px";
        console.log("heading backwards");
        return false;

    }
};

timerID = window.setInterval(moveKitty, 40);
console.log(timerID);
