console.log("Tic tat noooooooo!");
$("document").ready(function(){
//self populating arrays for players
var playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//winning combos
var winningCombo = [[0, 1, 2], [0, 4, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8], [2, 4, 6],
[3, 4, 5], [6, 7, 8]];
//Bonus stuff for later
// var playerFacts = {
// 	playerOne: {
// 		name: "",
// 		wins: 0,
// 		avatar: ""
// 	},
// 	playerTwo: {
// 		name: "",
// 		wins: 0,
// 		avatar: ""
// 	}
// };


var player ="";
var noOfMoves = 1;
var gameInProgress = true;
var roundNumber = 1;
var playerOneWins = 0;
var playerTwoWins = 0;

//player based on number of turns
var whosTurn = function(){
	noOfMoves += 1;
	if (noOfMoves%2===0) {
		player = playerOneMoves;
	} else {
		player = playerTwoMoves;
	}
};

//populate arrays
$(".cell").on("click", function(event) {
	if ($(this).hasClass("badger") || $(this).hasClass("wolf")) {
		return;
	}
	if (gameInProgress === true){
		whosTurn();
		var positionInArray = $(this).data("position");
		var value = $(this).data("value");
		player[positionInArray] = value;
		checkWinner();
		//am i duplicating here?
		if (noOfMoves%2 === 0) {
			$(this).addClass('badger');
		}
		else if (noOfMoves%2 !== 0) {
		 	$(this).addClass('wolf');
	 	}
	}
});

//reset game - done
var resetGame = function(){
	noOfMoves = 1;
	gameInProgress = true;
	$(".cell").removeClass('badger wolf');
	playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];

};

//adds mini image to scoreboard, displays winner message
var gameOver = function(player) {
	gameInProgress = false;
	if (player === "Player One"){
		$(".game" + roundNumber).addClass('badger');
		playerOneWins += 1;
		if ( !endGame() ) {
				winnerMessage1();
		}
	} else if (player === "Player Two") {
		$(".game" + roundNumber).addClass('wolf');
		playerTwoWins += 1;
		if ( !endGame() ) {
				winnerMessage2();
		}
	} else if (noOfMoves === 9){
		($(".game" + roundNumber).addClass('red'));
		drawMessage();
	}
	roundNumber += 1;
};



//badger win message - limit of sweetAlert
var winnerMessage1 = function (){
	window.setTimeout(function() {
		swal({   title: "Winner!!",
		text: "Battered by Badger!",
		imageUrl: "Badger.png",
		timer: 2000,
		showConfirmButton: false});
	window.setTimeout(function() {
		resetGame();
	} ,5000);
	});
};
//wolf win message - limit of sweetAlerts
var winnerMessage2 = function (){
	window.setTimeout(function() {
		swal({   title: "Winner!!",
		text: "A win for the Wolf!",
		imageUrl: "Wolf.png",
		timer: 2000,
		showConfirmButton: false});
		window.setTimeout(function() {
		resetGame();
		} , 4000);
	});
};
//draw message - limit of sweetAlert
var drawMessage = function (){
	window.setTimeout(function() {
		swal({   title: "A Draw?!",
		text: "The Panda of despire!",
		imageUrl: "Red.png",
		timer: 2000,
		showConfirmButton: false});
		window.setTimeout(function() {
		resetGame();
		} , 4000);
	});
};

//game logic derived from self populating arrays (above)
var checkWinner = function(){
	for (var i = 0; i < winningCombo.length; i++) {
		var currentWinCombo = winningCombo[i];
		if ( playerOneMoves[currentWinCombo[0]] + playerOneMoves[currentWinCombo[1]] + 	playerOneMoves[currentWinCombo[2]] === 15 ) {
			gameOver("Player One");
		}
		if ( playerTwoMoves[currentWinCombo[0]] + playerTwoMoves[currentWinCombo[1]] + 	playerTwoMoves[currentWinCombo[2]] === 15 ) {
			gameOver("Player Two");
		}
	}
	if (noOfMoves === 9) {
			gameOver();
	}
};

var endGame = function(){
	console.log("end game " + playerOneWins);
	if (playerOneWins === 2) {
		console.log("BADGER WINS");
		swal({   title: "BADGER WINS!",
		text: "A black and white hero!",
		imageUrl: "Badger.png",
		timer: 4000,
		showConfirmButton: false});
		return true;
	} else if (playerTwoWins === 2) {
		swal({   title: "WOLF WINS!",
		text: "A lone wolf no longer!",
		imageUrl: "Wolf.png",
		timer: 4000,
		showConfirmButton: false});
		return true;
	}
};

//END
});
