// Focus on creating the board - the framework
var rows = 3;
var columns = 3;
var squares = rows*columns;
// Create board 'border' with lines only on certain sides
$(".board").css({
  "border": "solid white",
  "position": "relative",
  "left": "30%",
  "width": "600px",
});

// Create 9 black tiles
for (var i = 0; i< squares; i++) {
  var tileNo = i+1;
  $(".board").append('<div class=' + tileNo + '></div>');
  $(".board div").css({
  "display": "inline-block",
  "padding": "2px",
  "position": "relative",
  "background-color": "black",
  "width": "150px",
  "height": "150px",
  "border": "solid white 2px",
});
}

// Need to keep tile numbers to check for winners
// Find the center of the tile (for img later on)
// Create either X or O with click - Could wrap it above the function above - if click is odd - X else O

var $playerMoves = {
  playerOne: [], // example pushes
  playerTwo: [],
};

var $playerOne = $('<div class="playerOne">X</div>')
  .css ({
    "color": "white",
    "overflow": "hidden",
    "text-align": "center",
    "font-size": "30px",
  });
var $playerTwo = $('<div class="playerTwo">O</div>')
  .css ({
    "color": "white",
    "overflow": "hidden",
    "text-align": "center",
    "font-size": "30px",
  });

// Identify mouse clicks with tiles
var clickCount = 0;
$(".board div").on("click", function(event) {
    // Counter
    clickCount +=1;
    var tileNumber = $(this).attr("class");
    // If counter is even PlayerTwo's turn else PlayerOne
    if (clickCount === 9) {
      console.log("Try again");
    }
    else if (clickCount%2 === 0) {
      $(this).append( $playerTwo.clone() );
      $playerMoves.playerTwo.push(tileNumber);

      console.log($playerMoves.playerTwo);

    } else {
      $(this).append( $playerOne.clone() );
      $playerMoves.playerOne.push(tileNumber); // Push the class to PlayerMoves
      console.log($playerMoves.playerOne);

    }
   // Pushing clicks to the corresponding numbers.
   for (var property in winning) {
      // var checkScore = function() {
       var combo = winning[property];
       var matches = 0;
       for (var i = 0; i < combo.length; i++) {
         if ($playerMoves.playerOne.includes(combo[i])) {
         matches += 1;
         console.log(matches);
       }
     }
     if (matches === 3) {

       console.log("You win");
     }
   }
  });
// Scoring
// Winning combinations - Could be looked at further
  var winning = {
    combOne : ["1", "2", "3"],
    combTwo : ["4", "5", "6"],
    combThree : ["7", "8", "9"],
    combFour : ["1", "4", "7"],
    combFive : ["2", "5", "8"],
    combSix : ["3", "6", "9"],
    combSeven : ["1", "5", "9"],
    combEight : ["3", "5", "7"],
  };

  // If combination and player  - then winner
  // combination and playerX class per box

  // var declareWinner = function() {
  //   // If combination has player 1 class in each div
    // if ( winning[] && ".playerOne" ) {
    //   console.log("You win");
    // } else if (clickCount === squares) {
    //   console.log("Game over");
    // }
  // };


  // Find the middle of the tile - for images
  //   var midY = $(this).position().top += ( $(this).width()/2);
  //   var midX = $(this).position().left += ( $(this).width()/2);
