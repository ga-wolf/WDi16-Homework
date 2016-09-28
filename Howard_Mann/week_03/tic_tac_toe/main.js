console.log('Tic Tac Toe Game');
// JavaScript Logic..................................

// Create empty board array
var board = {
  A: [1,2,3],
  B: [4,5,6],
  C: [7,8,9]
};

var boardKeys = Object.keys(board);
var finish = false; // Start false, assign as true if a player wins
var draw = false; // Sarts false, assign as true if no numbers remaining and no finish outcome
var msg = '';

// Create check row method
// Logic: Start by assuming all rows have player string (var check = true). Iterate through each row, and if a value does not equal player string assign check as false. If check remains true throught he full row assign finish as true and console log message of which row won
var checkRows = function(player) {

  for (var i = 0; i < boardKeys.length; i++) {
    var letterArr = board[boardKeys[i]];
    var check = true;

    for (var j = 0; j < letterArr.length; j++) {
      if (letterArr[j] !== player) {
        check = false;
      }
    }
    if(check){
      msg += player+" wins on row "+boardKeys[i];
      console.log(msg);
      finish = true;
      return check;
    }
  }
  return check;
};

// Create check column method
// Logic: Same logic as row but fix index position and iterate through property letter value
var checkCols = function(player) {

  for (var i = 0; i < boardKeys.length; i++) {
    var check = true;

    for (var j = 0; j < boardKeys.length; j++) {
      if (board[boardKeys[j]][i] !== player) {
        check = false;
      }
    }
    if (check) {
      msg += player+" wins on column "+(i+1);
      console.log(msg);
      finish = true;
      return check;
    }

  }
  return check;
};

// Create check diagonalLR method
// Logic; similar logic as above but iterate through same index position and letter position e.g. A0, B1, C2
var checkDiagLR = function(player) {
  var check = true;

  for (var i = 0; i < boardKeys.length; i++) {
    if (board[boardKeys[i]][i] !== player) {
      check = false;
    }
  }
  if (check) {
    msg += player+" wins diagonally from left to right";
    console.log(msg);
    finish = true;
    return check;
  }
  return check;
};

// Create check diagonal2 method
// Logic: Same as diagnoalLR but go iterate index positions backwards and letter forwards e.g. A2, B1, C0
var checkDiagRL = function(player) {

  var length = boardKeys.length;
  var check = true;
  for (var i = 0; i < length; i++) {


    if (board[boardKeys[i]][length-1-i] !== player) {
      check = false;
    }
  }
  if (check) {
    msg += player+" wins diagonally from right to left";
    console.log(msg);
    finish = true;
    return check;
  }
  return check;
};

// Create count spots left function
// Logic: Iterate through all values in board's three property and value pairs. Count how many times a number occurs.I.e. if board has no numbers remaining and game has finished then it will be a draw
var countLeft = function(){
  var count = 0;
  for (var i = 0; i < boardKeys.length; i++) {
    for (var j = 0; j < board[boardKeys[i]].length; j++) {
      if (!isNaN(board[boardKeys[i]][j])) {
        count++; // Return total empty spaces remaining
      }
    }
  }
  return count;
};

// Create check draw method
// Logic: If no numbers remain on the board and the game does not finish then assign draw as true

var checkDraw = function(){
  if (finish===false && countLeft() === 0) {
    console.log("Draw, no win");
    draw = true;
  }
};

// Consolidate all row, column and diagonal checks into one method
var checkAll = function(player) {
  checkRows(player);
  checkCols(player);
  checkDiagLR(player);
  checkDiagRL(player);
  checkDraw();
};


// Create player move method and check if winner
// Logic: Player chooses a cell i.e. property and index pair (i.e. row and num) and replaces value with player name. Three key scenarios:
// 1. If player equals last player then can't move
// 2. If cell is not a number then player cant move there
// 3. Otherwise do following:
//  a) replace number value of cell wtih player String marker
//  b) run checkAll(player) method to check if game finishes
//  c) assign last player as current player name

var lastPlayer;

var move = function(player, row, num) {
  var position = board[row][num];
  if (player === lastPlayer) {
    console.log("You just went, not your turn");
  }
  else if (isNaN(position)) {
    console.log("Player "+player+" you can't move there, try again");
  } else {
    board[row][num] = player;
    console.log("Player "+player+" chose position "+row,+num);
    checkAll(player);
    lastPlayer = player;
  };
};


// jQuery..................................

$( document ).ready(function(){
console.log("Document ready");

// Set variable and event listener for latest player
var playerJQ;

var choosePlayer = function() {
  var el = $(this);
  playerJQ = el.attr("id");
  $('.picked').text(playerJQ);
  console.log(playerJQ);
  $('#message').html("Player "+playerJQ+" selected.");
};

$(".player").on('click',choosePlayer);


// Create output displaying outcome based on checkAll method
var checkWinner = function() {
  if (finish) {
    $('#winner').html("<h1>"+msg+"</h1");
    $('body').css({backgroundColor: "chartreuse"});
    displayLine();
    $('*').not('.replay').unbind('click'); // unbind all click listeners
  }
  if (draw) {
    $('#message').html("Draw no win");
    $('body').css({backgroundColor: "yellow"});
  }
};

// Creat jQuery function when each cell is clicked on
var takeMove = function() {
  var el = $(this);
  var row = el.attr("row");
  var num = el.attr("num");
  if (playerJQ === undefined) {
    $('#message').html("Please select a player above");
  } else if (playerJQ === lastPlayer) {
    msg = "You just went, not your turn";
    console.log(msg);
    $('#message').html(msg);
  } else if (isNaN(board[row][num])) {
    msg = "Player "+playerJQ+" you can't move there, try again";
    $('#message').html(msg);
  } else {
    el.text(playerJQ);
    el.css({color: "red"});
    move(playerJQ,row,num);
    checkWinner();
  }
};


//Set up event listeners for each cell with attribute row
$("div[row]").on('click', takeMove);

// jQuery CSS to show lines based on outcome
var displayLine = function() {
  if (msg.includes("row A")) {
    $('.rowLine').css({visibility:"visible"});
  } else if (msg.includes ("row B")) {
    $('.rowLine').css({visibility:"visible", top: "130px"});
  } else if (msg.includes ("row C")) {
    $('.rowLine').css({visibility:"visible", top: "195px"});
  } else if (msg.includes("column 1")) {
    $('.colLine').css({visibility:"visible", left: "41%"});
  } else if (msg.includes("column 2")) {
    $('.colLine').css({visibility:"visible", left: "52%"});
  } else if (msg.includes("column 3")) {
    $('.colLine').css({visibility:"visible", left: "62%"});
  } else if (msg.includes("left to right")) {
    $('.diagLine').css({visibility:"visible"})
  } else if (msg.includes("right to left")) {
    $('.diagLine').css({visibility:"visible", transform:"rotate(45deg)"})
  }
};

// jQuery reload page
$('.replay').on('click', function(){
  return location.reload();
});

});
