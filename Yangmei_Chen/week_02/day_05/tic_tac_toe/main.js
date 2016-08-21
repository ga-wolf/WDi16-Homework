var TicTacToe = {


  PlayerOne: ['D', 'I', 'F'],
  PlayerTwo: ['G', 'E', 'C', 'D'],

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
        return;
      }

      if (EachWinOptions.every(CheckTwo)) {
        console.log("PlayerTwo has Won");
        return;
      }
    }
  },

};
TicTacToe.WinTicTacToe();
