var cat1 = document.getElementById('cat1');
var samba1 = document.getElementById('samba1');
var samba2 = document.getElementById('samba2');
var samba3 = document.getElementById('samba3');
var samba4 = document.getElementById('samba4');
var samba5 = document.getElementById('samba5');
var wdi = document.getElementById('wdi');
var baby = document.getElementById('cat-walk');

//-----------SIZES---------//
//samba1.height = 40;
// samba1.whidt = 40;

// ------------- GIF LOCATIONS------------
cat1.style.left = "0px";
cat1.style.position = "absolute";
cat1.style.top = "0px";
// samba1.style.top = "0px";
// samba2.style.left = "0px";
// samba3.style.right = "0px";
// samba4.style.bottom = "100px";
// samba5.style.
// wdi.style.
// baby.style.

// --------------- //------------------


// var timerID = null;
// var moveCat = function() {
//
//     var cachedLeft = parseFloat(cat1.style.left);
//     if (cachedLeft >= 1000) {
//         window.clearInterval(timerID);
//         return false;
//     }
//
//     var newTop = cachedLeft + 1;
//
//     cat1.style.left = newTop + "px";
//     if (cachedLeft) {}
// };
//
// var walkBack = function() {
//
//     newTop = newTop - 10;
//     cat1.style.left = newTop + 'px';
//     if (parseInt(cat1.style.left) === 0) {
//
//
//     }
// };
//
//
// timerID = window.setInterval(moveCat, 10);
// console.log(timerID);
//////------------- cat cat cat dawm cat
var moveLeft = +10;

var move = function() {

    var x = window.innerWidth;
    var y = window.innerHeight;

    cat1.style.left = parseInt(cat1.style.left) + moveLeft + 'px';
    if (parseInt(cat1.style.left) <= 0) {
        moveLeft = +10;
        catPace++;
        cat1.style.webkitTransform = 'scaleX(+1)';
    } else if (parseInt(cat1.style.left) >= (x - 270)) {
        cat1.style.webkitTransform = 'scaleX(-1)';
        moveLeft = -10;
    }
    if (catPace === 4) {
        console.log("catPace is 6");
        cat1.src = "./images/samba1.gif";
        var samba = document.createElement("AUDIO");
        samba.src = './sound/samba.mp3';
        samba.play();
        document.body.style.backgroundImage = "url('./images/bebe.gif')";
        clearInterval(walkStart);
        dancers();
        /////////// ?????
        // setTimeout(walkStart, 3000);
        // setTimeout(dancers, 3500);

    }

};
var catPace = 0;
/////----------- animation


var walkStart = setInterval(move, 10);

var dancers = function() {

    wdi16 = document.createElement('img');
    wdi16.id = "wdi16";
    wdi16.src = "./Images/wdi16.gif";
    console.log("dancers called");
    samba2 = document.createElement('img');
    samba2.id = "samba2";
    samba2.src = "./Images/samba2.gif";

    samba3 = document.createElement('img');
    samba3.id = "samba3";
    samba3.src = "./Images/samba3.gif";

    samba4 = document.createElement('img');
    samba4.id = "samba4";
    samba4.src = "./Images/samba4.gif";

    samba5 = document.createElement('img');
    samba5.id = "samba5";
    samba5.src = "./Images/samba5.gif";


    document.body.appendChild(samba2);
    document.body.appendChild(samba3);
    document.body.appendChild(samba4);
    document.body.appendChild(samba5);
    document.body.appendChild(wdi16);

    wdi16.style.left = "800px";
    samba1.style.top = "0px";
    samba2.style.left = "0px";
    samba3.style.right = "0px";
    samba4.style.bottom = "1000px";
    samba5.style.left = "1000px";


};

var randomX;
var randomY;
// var dancers = function() {
//     setInterval(moverandom, 30);
// };


///// NOT MINE AT ALL
var moverandom = function() {

    var x = window.innerWidth;
    var y = window.innerHeight;
    randomX = (Math.floor((Math.random() * 100) + -50));
    randomY = ((Math.floor((Math.random() * 100) + -50)));
    spinme = spinme + spinme;
    samba1.style.webkitTransform = "rotate(" + spinme + "deg)";

    catWalk.style.left = parseInt(cat1.style.left) + randomX + 'px';
    if (parseInt(catWalk.style.left) < 0) {
        cat1.style.left = '0px';
        cat1.style.webkitTransform = 'scaleX(+1)';
    } else if (parseInt(cat1.style.left) >= (x)) {
        cat1.style.webkitTransform = 'scaleX(-1)';
        cat1.style.left = '0px';
    }
};
