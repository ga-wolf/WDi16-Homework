var $width = $(".squares").width();
var $squares = $(".squares");
$squares.css({
  "height": $width + "px",
}).mouseover(function(){
  $(this).fadeOut( 300 );
  $(this).fadeIn( 300 );
});
// fadein and fadeout not working properly with hover but works well with mouseover.

var TicTacToe = {

  PlayerOne: [],
  PlayerTwo: [],

  // Sorting out Input:
  Input: function(){
    var count = 0;
    var ClickEvent = function () {
      count ++;
      console.log(count);
      if (count % 2 === 0) {
        $(this).css({"background": "url('images/agentSmith.jpg')", "background-size": "cover"});
        TicTacToe.PlayerTwo.push($(this).html());
        console.log(TicTacToe.PlayerTwo);

      } else {
        $(this).css({"background": "url('images/neo.jpg')", "background-size": "cover"});
        TicTacToe.PlayerOne.push($(this).html());
        console.log(TicTacToe.PlayerOne);

      }
      TicTacToe.WinTicTacToe();

    };
    $squares.one("click", ClickEvent);

  },

  WinOptions: {
      WinOne: ['A', 'B', 'C'],
      WinTwo: ['A', 'D', 'G'],
      WinThree: ['G', 'H', 'I'],
      WinFour: ['C', 'F', 'I'],
      WinFive: ['B', 'E', 'H'],
      WinSix: ['D', 'E', 'F'],
      WinSeven: ['A', 'E', 'I'],
      WinEight: ['C', 'E', 'G']
  },

  WinTicTacToe: function(){

    var WinOptions = this.WinOptions;
    var PlayerOne = this.PlayerOne;
    var PlayerTwo = this.PlayerTwo;

    var CheckOne = function(element) {
      return PlayerOne.includes(element);
    };
    var CheckTwo = function(element) {
      return PlayerTwo.includes(element);
    };

    for (var key in WinOptions) {
      var EachWinOptions = WinOptions[key];

      if (EachWinOptions.every(CheckOne)) {
        console.log("PlayerOne has won");
        console.log(EachWinOptions);
        for (var i = 0; i < EachWinOptions.length; i++) {
          var currentDivOne = EachWinOptions[i];
          $( "#" + currentDivOne ).css({
            "border": "8px groove #00cd00"
          });
          $squares.off("click", TicTacToe.Input.ClickEvent);
        }
      }

      if (EachWinOptions.every(CheckTwo)) {
        console.log("PlayerTwo has Won");

        for (var j = 0; j < EachWinOptions.length; j++) {
          var currentDivTwo = EachWinOptions[j];
          $( "#" + currentDivTwo ).css({
            "border": "8px groove #00cd00"
          });
          $squares.off("click", TicTacToe.Input.ClickEvent);
        }
      }
    }
  },

};
TicTacToe.Input();
// TicTacToe.WinTicTacToe();
