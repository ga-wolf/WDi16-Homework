var ticTacToe =[1,2,3,4,5,6,7,8,9];
var playerOne = [];
var playerTwo =[];
var count = 0;


var winner = function(){


};

$(document).ready(function() {

  $("td").on("click", function() {
    count += 1;
    var id = $(this).attr("id");
    console.log($(this));
    $(this).html("X");
  });

});


---------------------

var ticTacToe =[1,2,3,4,5,6,7,8,9];
var playerOne = [];
var playerTwo =[];
var count = 0;


var winner = function(){


};

$(document).ready(function() {

  var count = 1;
  // var firstPLayer = function(){
  //
  //   if(count%2 !== 0){
  //     count++;
  var move = function(player, tileNumber) {
    if (player === "playerOne") {
      playerOne.push(tileNumber);
      // add 'tileNumber' to the array of playerOne's moves.
      // add the avatar for playerOne to the square with id 'tileNumber'
    } else {
      // add 'tileNumber' to the array of playerTwo's moves.
      // add the avatar for playerTwo to the square with id 'tileNumber'
    }
    // $(this).css({"background":"url(https://usercontent2.hubstatic.com/7406807_f260.jpg)","background-size":"cover"});
  };

  $("td").on("click", function() {
    var id = $(this).attr("id");
    //check to see if playerOne.includes(id) or playerTwo.includes(id)
    // if it does, don't let them move there,
    // otherwise, run the code below:
    if (count % 2 !== 0) {
      var playerTurn = "playerOne";
    } else {
      var playerTurn = "playerTwo";
    }
    move(playerTurn, id);
  });
    // }
  // };
});
