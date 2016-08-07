console.log("testing once again");

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

var board = {
  p1: "x",
  p2: null,
  p3: "0",
  p4: null,
  p5: null,
  p6: null,
  p7: null,
  p8: null,
  p9: null

};


console.log(board.p1);

board.p1 = "0";

console.log(board.p1);

// var p1 = document.getElementById("topRow1");
document.getElementById("topRow1").onclick = function() {
board.p1 = "lion";
topRow1.innerText="LION";
console.log("square one is " + board.p1);
gameCheck();
};

document.getElementById("topRow2").onclick = function() {
board.p2 = "zebra";
topRow2.innerText="ZEBRA";
console.log("square two is " + board.p2);
gameCheck();
};

document.getElementById("topRow3").onclick = function() {
board.p3 = "zebra";
topRow3.innerText="ZEBRA";
console.log("square three is " + board.p3);
gameCheck();
};

document.getElementById("secondRow4").onclick = function() {
board.p4 = "lion";
secondRow4.innerText="LION";
console.log("square four is " + board.p4);
gameCheck();
};

document.getElementById("secondRow5").onclick = function() {
board.p5 = "lion";
secondRow5.innerText="LION";
console.log("square five is " + board.p5);
gameCheck();
};

document.getElementById("secondRow6").onclick = function() {
board.p6 = "lion";
secondRow6.innerText="LION";
console.log("square six is " + board.p6);
gameCheck();
};

document.getElementById("thirdRow7").onclick = function() {
board.p7 = "lion";
thirdRow7.innerText="LION";
console.log("square seven is " + board.p7);
gameCheck();
};

document.getElementById("thirdRow8").onclick = function() {
board.p8 = "zebra";
thirdRow8.innerText="ZEBRA";
console.log("square eight is " + board.p8);
gameCheck();
};

document.getElementById("thirdRow9").onclick = function() {
board.p9 = "lion";
thirdRow9.innerText="LION";
console.log("square nine is " + board.p9);
gameCheck();
};

// check rows then columns then diagonals - use threequals and && for or
// need first condition does not equal null as each p starts as a null otherwise
// they all equal each other
var gameCheck = function(){
if (board.p1!==null&&board.p1===board.p2&&board.p2===board.p3) {
  console.log("You have three in a row.  You won!");
} else if (board.p4!==null&&board.p4===board.p5&&board.p5===board.p6) {
  console.log("You have three in a row.  You won!");
} else if (board.p7!==null&&board.p7===board.p8&&board.p8===board.p9) {
  console.log("You have three in a row.  You won!");
}

// PROBLEM WITH CODE BELOW

// else if (board1.p1!==null&&board.p1===board.p4&&board.p4===board.p7) {
//   console.log("You have three in a column.  You won");
// } else if (board.p2!==null&&board.p2===board.p5&&board.p5===board.p8) {
//   console.log("You have three in a column.  You won");
// }
// else if (board.p3!==null&&board.p3===board.p6&&board.p6===board.p9) {
//   console.log("You have three in a column.  You won");
// }
else if (board.p1===board.p5&&board.p5===board.p9) {
  console.log("You have three diagonally.  You won!");
} else {
  console.log("still testing");
}};




// needs to run as continuous loop
















// start with counter = zero, on click of button then it populates p1 to p9 depending on which
// problem with counter - base it on p1 to p9
var counter;
for (i=0; i<=9; i++) {
  if (i%2===0) {
    counter = "X";
  } else {
    counter = "nought";
  console.log(counter);}
}
