console.log("Tic tat noooooooo!");

//Audio background
var backgroundAudio = new Audio("audio/forest.mp3");
backgroundAudio.play();
backgroundAudio.loop = true;
backgroundAudio.volume = 0.4;

var clapAudio = new Audio("audio/clap.mp3");
clapAudio.volume = 0.3;

var boo = new Audio("audio/boo.mp3");

window.setTimeout(function() {
final.play();
} , 500);

//random no for audio selection
var randomAudio = function() {
	var randomNumber = Math.floor(Math.random()*(audioFiles.length));
	audioFiles[randomNumer].play();
	audioFiles.pop(audioFiles[randomNumber]);
	// Then remove the element associated with that index
	// Then play the track that was found
};

var final = new Audio("audio/Final.m4a");
var badgerIntro = new Audio("audio/Badgerintro.m4a");
var wolfIntro = new Audio("audio/WolfIntro.m4a");
var bWin = new Audio("audio/BWin.m4a");
var wWin = new Audio("audio/WWin.m4a");
var panda = new Audio("audio/PANDA.mp4");
var winner = new Audio("audio/WINNER.m4a");

var audioFiles = [
new Audio("audio/BOLD.m4a"),
new Audio("audio/CAR.m4a"),
new Audio("audio/DANCE.m4a"),
new Audio("audio/DOG.m4a"),
new Audio("audio/HUMAN.m4a"),
new Audio("audio/ITS.m4a"),
new Audio("audio/LEGS.m4a"),
new Audio("audio/LOVELY.m4a"),
new Audio("audio/PAY.m4a"),
new Audio("audio/SENTANCE.m4a"),
new Audio("audio/SHAVE.m4a"),
new Audio("audio/WHERE.m4a"),
new Audio("audio/BITE.m4a"),
new Audio("audio/FUCK.m4a"),
new Audio("audio/HAIRY.m4a"),
new Audio("audio/LAD.m4a"),
new Audio("audio/LADDER.m4a"),
new Audio("audio/NIPPLES.m4a"),
new Audio("audio/OXY.m4a"),
new Audio("audio/HOME.m4a"),
new Audio("audio/GOOD.m4a")
];


$("document").ready(function(){
//self populating arrays for players
var playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//winning combos
var winningCombo = [[0, 1, 2], [0, 4, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8], [2, 4, 6],
[3, 4, 5], [6, 7, 8]];

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
		// var randomAudio = randomAudio();
		// var audio = audioFiles[randomAudio];
		// audio.play();
			if (noOfMoves % 2 === 0) {
				$(this).addClass('badger animated zoomIn');
			}
			else if (noOfMoves % 2 !== 0) {
		 		$(this).addClass('wolf animated zoomIn');
	 		}
			if ( checkWinner() ) {
				return false;
		}
	}
});
//reset round - done
var resetRound = function(){
	noOfMoves = 1;
	gameInProgress = true;
	$(".cell").removeClass('badger wolf animated zoomIn');
	playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};
//full reset
var resetMatch = function(){
	noOfMoves = 1;
	roundNumber = 1;
	playerOneWins = 0;
	playerTwoMoves = 0;
	gameInProgress = false;
	$(".cell").removeClass('badger wolf animated zoomIn');
	$(".game1").removeClass('badger wolf');
	$(".game2").removeClass('badger wolf');
	$(".game3").removeClass('badger wolf');
	playerOneMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	playerTwoMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	gameInProgress = true;
};
//adds mini image to scoreboard, displays winner message
var roundOver = function(player) {
	gameInProgress = false;
	if (player === "Player One"){
		$(".game" + roundNumber).addClass('badger');
		playerOneWins += 1;
		if ( !endGame() ) {
				winnerMessage1();
				bWin.play();
				clapAudio.play();
		}
	} else if (player === "Player Two") {
		$(".game" + roundNumber).addClass('wolf');
		playerTwoWins += 1;
		if ( !endGame() ) {
				winnerMessage2();
				wWin.play();
				clapAudio.play();
		}
	} else if (noOfMoves === 9){
			($(".game" + roundNumber).addClass('red'));
				drawMessage();
				panda.play();
				boo.play();
	}
	roundNumber += 1;
};
//badger win message - limit of sweetAlert
var winnerMessage1 = function (){
		swal({   title: "Win",
		text: "Battered by Badger!",
		imageUrl: "Badger.png",
		showConfirmButton: true,
		confirmButtonText: "Next round?",
		closeOnConfirm: true});
	window.setTimeout(function() {
		resetRound();
	}, 3000);
};
//wolf win message - limit of sweetAlerts
var winnerMessage2 = function (){
		swal({   title: "Win",
		text: "A win for the Wolf!",
		imageUrl: "Wolf.png",
		showConfirmButton: true,
		confirmButtonText: "Next round?",
		closeOnConfirm: true});
		window.setTimeout(function() {
		resetRound();
	} , 3000);
};
//draw message - limit of sweetAlert
var drawMessage = function (){
		swal({   title: "A Draw?!",
		text: "The Panda of despire!",
		imageUrl: "Red.png",
		showConfirmButton: true});
		window.setTimeout(function() {
		resetRound();
	} , 3000);
};
//game logic derived from self populating arrays (above)
var checkWinner = function(){
	for (var i = 0; i < winningCombo.length; i++) {
		var currentWinCombo = winningCombo[i];
		if ( playerOneMoves[currentWinCombo[0]] + playerOneMoves[currentWinCombo[1]] + 	playerOneMoves[currentWinCombo[2]] === 15 ) {
			roundOver("Player One");
			return true;
		}
		if ( playerTwoMoves[currentWinCombo[0]] + playerTwoMoves[currentWinCombo[1]] + 	playerTwoMoves[currentWinCombo[2]] === 15 ) {
			roundOver("Player Two");
			return true;
		}
	}
	if (noOfMoves === 9) {
			roundOver();
			return true;
	}
};
//end messages
var endGame = function(){
	if (playerOneWins === 2) {
		swal({   title: "BADGER WINS THE MATCH!",
		text: "A black and white hero!",
		imageUrl: "Badger.png",
		showConfirmButton: true,
		confirmButtonText: "Another Match?",
		closeOnConfirm: true});
		winner.play();
		clapAudio.play();
		window.setTimeout(function() {
		resetMatch();
		} , 3000);
		return true;
	} else if (playerTwoWins === 2) {
		swal({   title: "WOLF WINS THE MATCH!",
		text: "A lone wolf no longer!",
		imageUrl: "Wolf.png",
		showConfirmButton: true});
		winner.play();
		clapAudio.play();
		window.setTimeout(function() {
		resetMatch();
		} , 3000);
		return true;
	}
	// resetMatch();
};

//END
});
