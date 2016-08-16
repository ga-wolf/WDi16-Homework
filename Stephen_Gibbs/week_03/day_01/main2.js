// ARCHIVE WED 10 AUG 11AM

// create array of nine positions
// input will be buttons
// input will be consecutive so once an X is input then next return will be a O.
// input will be pushed into array position
// run loops that will compare conditions:
// so pos 1, 2 and 3 ( or 4, 5 and 6;  or 7, 8, 9) same character then
// log you have won - you have made a row!
// so pos 1, 4 and 7 ( or 2, 5, 8; or 3, 6, 9) same character then
// log you have won - you have made a column!
// so 1, 5, 9 or 4, 5, 7 - log you have won - you have 3 in a diagonal
// loop runs from start of game and finishes at 9 turns - logs "draw" if there are
// not 3 in a row after 9 turns and then game ends
// remove redundancy in code after it is working

// introduce error handling - you can unlick only your turn and not choices from before;
// introduce selector if X then next must be 0.


var board = {
  p1: null,
  p2: null,
  p3: null,
  p4: null,
  p5: null,
  p6: null,
  p7: null,
  p8: null,
  p9: null

};

var startPlayer = 0;
var secondPlayer = 0;

var tokenOne = "X";
var tokenTwo = "O";
var tokenThree = '<img src="clinton.jpg" style="height:170px;width:170px;">';
var tokenFour = '<img src="trump3.png" style="height:170px;width:170px;">';
var tokenFive;
var tokenSix;


var count = 0;
var whoseTurn;
// var startToken = tokenThree;
var startToken = tokenOne;
var endToken = tokenTwo;
var choice = 1;
console.log("CHOICE INITIAL");

document.querySelector("select").addEventListener("change",function() {
  choice = parseInt( this.value );

  console.log(choice);
  if (choice === 1) {
    startToken = tokenOne;
    endToken = tokenTwo;
  }
  else if (choice === 2){
    startToken = tokenThree;
    endToken = tokenFour;
  }
  else if (choice ===3) {
    startToken = tokenFive;
    endToken = tokenSix;
  }
});

console.log("CHOICE AFTER EVENT");


var turnCheck = function () {
count++;
console.log("times pressed equals " + count);
if (count%2===0) {
 whoseTurn = endToken;
} else whoseTurn = startToken;
};

document.getElementById("reset").onclick = function() {
board.p1 = null;
topRow1.innerText = "One";
board.p2 = null;
topRow2.innerText = "Two";
board.p3 = null;
topRow3.innerText = "Three";
board.p4 = null;
secondRow4.innerText = "Four";
board.p5 = null;
secondRow5.innerText = "Five";
board.p6 = null;
secondRow6.innerText = "Six";
board.p7 = null;
thirdRow7.innerText = "Seven";
board.p8 = null;
thirdRow8.innerText = "Eight";
board.p9 = null;
thirdRow9.innerText = "Nine";
count = 0;
whoseTurn = null;
$("p1").remove();
};

//ALTERNATIVE RESET OPTIONS FOR COMMENT
// document.querySelector("p1").innerHTML = "";   - one solution

// var blurb = document.getElementsByTagName("p1")[0]; - second solution = tag name returns an array and you need to select first element of array in order to call a method on an element.
// blurb.parentNode.removeChild(blurb);

// var parent = document.querySelector("body"); - third solution
// var child = document.querySelectorAll("p1");
// parent.removeChild(child[0]);



document.getElementById("topRow1").onclick = function() {
turnCheck();
board.p1 = whoseTurn;
topRow1.innerHTML=whoseTurn;
console.log("square one is " + board.p1);
gameCheck();
};

document.getElementById("topRow2").onclick = function() {
turnCheck();
board.p2 = whoseTurn;
topRow2.innerHTML=whoseTurn;
console.log("square two is " + board.p2);
gameCheck();
};

document.getElementById("topRow3").onclick = function() {
turnCheck();
board.p3 = whoseTurn;
topRow3.innerHTML=whoseTurn;
console.log("square three is " + board.p3);
gameCheck();
};

document.getElementById("secondRow4").onclick = function() {
turnCheck();
board.p4 = whoseTurn;
secondRow4.innerHTML=whoseTurn;
console.log("square four is " + board.p4);
gameCheck();
};

document.getElementById("secondRow5").onclick = function() {
turnCheck();
board.p5 = whoseTurn;
secondRow5.innerHTML=whoseTurn;
console.log("square five is " + board.p5);
gameCheck();
};

document.getElementById("secondRow6").onclick = function() {
turnCheck();
board.p6 = whoseTurn;
secondRow6.innerHTML=whoseTurn;
console.log("square six is " + board.p6);
gameCheck();
};

document.getElementById("thirdRow7").onclick = function() {
turnCheck();
board.p7 = whoseTurn;
thirdRow7.innerHTML=whoseTurn;
console.log("square seven is " + board.p7);
gameCheck();
};

document.getElementById("thirdRow8").onclick = function() {
turnCheck();
board.p8 = whoseTurn;
thirdRow8.innerHTML=whoseTurn;
console.log("square eight is " + board.p8);
gameCheck();
};

document.getElementById("thirdRow9").onclick = function() {
turnCheck();
board.p9 = whoseTurn;
thirdRow9.innerHTML=whoseTurn;
console.log("square nine is " + board.p9);
gameCheck();
};


//
// document.getElementById("imageTest").onclick = function() {
// // turnCheck();
// // board.p9 = whoseTurn;
// document.getElementById("imageTest").src = '"trump3.png" style= "height:170px;width:170px;"';
// // imageTest.innerHTML= '<img src="trump3.png" style="height:170px;width:170px;">';
// imageTest.innerHTML= '<img src="clinton.jpg" style="height:170px;width:170px;">';
// //console.log("square nine is " + board.p9);
// // gameCheck();
// };
//





// check rows then columns then diagonals - use threequals and && for or
// need first condition does not equal null as each p starts as a null otherwise
// they all equal each other

var gameCheck = function(){
if (board.p1!==null&&board.p1===board.p2&&board.p2===board.p3) {
  console.log("You have three in a row.  You won!");
  rowMessage();
  if (board.p1===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }

} else if (board.p4!==null&&board.p4===board.p5&&board.p5===board.p6) {
  console.log("You have three in a row.  You won!");
  rowMessage();
  if (board.p4===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
} else if (board.p7!==null&&board.p7===board.p8&&board.p8===board.p9) {
  console.log("You have three in a row.  You won!");
  rowMessage();
  if (board.p7===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
}

else if (board.p1!==null&&board.p1===board.p4&&board.p4===board.p7) {
  console.log("You have three in a column.  You won");
  columnMessage();
  if (board.p1===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }


} else if (board.p2!==null&&board.p2===board.p5&&board.p5===board.p8) {
  console.log("You have three in a column.  You won");
  columnMessage();
  if (board.p2===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
}
else if (board.p3!==null&&board.p3===board.p6&&board.p6===board.p9) {
  console.log("You have three in a column.  You won");
  columnMessage();
  if (board.p3===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
}
else if (board.p1!==null&board.p1===board.p5&&board.p5===board.p9) {
  console.log("You have three diagonally.  You won!");
  diagonalMessage();
  if (board.p1===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
}
else if (board.p3!==null&board.p3===board.p5&&board.p5===board.p7) {
  console.log("You have three diagonally.  You won!");
  diagonalMessage();
  if (board.p3===startToken) {
    startPlayer++;
    console.log("startplayerscore is " +startPlayer);
  } else {
    secondPlayer++;
    console.log("secondplayerscore is" +  secondPlayer);
  }
} else if (count===9) {
  console.log("Draw");
  drawMessage();
}
 else {
  console.log("game is still on");
}};

rowMessage = function(){
var createRowMessage = document.createElement("p1");                        // Create a <p> node
var textRowMessage = document.createTextNode("You have won - three in a row!");    // Create a text node
createRowMessage.appendChild(textRowMessage);                                           // Append the text to <p>
document.body.appendChild(createRowMessage);
};

columnMessage = function(){
var createColumnMessage = document.createElement("p1");                        // Create a <p> node
var textColumnMessage = document.createTextNode("You have won - three in a column!");    // Create a text node
createColumnMessage.appendChild(textColumnMessage);                                           // Append the text to <p>
document.body.appendChild(createColumnMessage);
};

diagonalMessage = function(){
var createDiagonalMessage = document.createElement("p1");                        // Create a <p> node
var textDiagonalMessage = document.createTextNode("You have three diagonally! - You won!");    // Create a text node
createDiagonalMessage.appendChild(textDiagonalMessage);                                           // Append the text to <p>
document.body.appendChild(createDiagonalMessage);
};

drawMessage = function(){
var createDrawMessage = document.createElement("p1");                        // Create a <p> node
var textDrawMessage = document.createTextNode("No glory but a hard earned draw!");    // Create a text node
createDrawMessage.appendChild(textDrawMessage);                                           // Append the text to <p>
document.body.appendChild(createDrawMessage);
};
