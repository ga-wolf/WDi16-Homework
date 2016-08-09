console.log("Tic tat noooooooo!");
$("document").ready(function(){
//var gameState = [ "", "", "", "", "", "", "", "", "" ];
var playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//winning combos
var winningCombo = [[0, 1, 2], [0, 4, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8], [2, 4, 6],
[3, 4, 5], [6, 7, 8]];

var player ="";
var noOfMoves = 1;

var whosTurn = function(){
	noOfMoves += 1;
	if (noOfMoves%2===0) {
		player = playerOneMoves;
	} else {
		player = playerTwoMoves;
	}
};

// var changePlayerOne = function(){
// 	$(this).html("<img src=http://www.placecage.com/c/100/100>");
// };

var changePlayerTwo = function(){
	$(this).html("0");
};

//create an thing a give a cell a class of the player and thus the image
$(".cell").one("click", function(event){
	if (noOfMoves%2 === 0) {
		$(this).setAttribute("class", "badger");
	}
});


$(".cell").one("click", function(event) {
	whosTurn();
	var positionInArray = $(this).data("position");
	var value = $(this).data("value");
	player[positionInArray] = value;
	checkWinner();
});

var checkWinner = function(){
//Checks all scores for possible wins
	for (var i = 0; i < winningCombo.length; i++) {
		//console.log(winningCombo[i]);
		var currentWinCombo = winningCombo[i];
		//console.log(currentWinCombo);

		if ( playerOneMoves[currentWinCombo[0]] + playerOneMoves[currentWinCombo[1]] + 	playerOneMoves[currentWinCombo[2]] === 15 ) {
			console.log("Player one is the winner");
		}

		if ( playerTwoMoves[currentWinCombo[0]] + playerTwoMoves[currentWinCombo[1]] + 	playerTwoMoves[currentWinCombo[2]] === 15 ) {
			console.log("Player two is the winner");
		}
		else if (noOfMoves === 9) {
			console.log("You are both losers");
		}
	}
};

});
