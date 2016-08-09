console.log("C4 game");

var Game = {
  newBoard: function(n) {
    // Creates a new board of n x n filled with marker '.'
    this.board = this.board || Array(n);
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = Array(n).fill('.');
    }
    // Reset game finish as false and selected player as undefined
    this.finish = false;
    this.lastPlayer = 'undefined';
    console.log("newBoard created: "+n+" by "+n);
  },
  winCount: function(n) {
    this.countWin = n;
    console.log("Game of connect "+n);
  },
  addMark: function(playerChosen,row,col) {
    if (playerChosen === this.lastPlayer) {
      console.log("Not your turn");
    }
    else if (this.board[row][col] === '.') {
      this.board[row][col] = playerChosen;
      this["lastPlayer"] = playerChosen;
      console.log("Player: "+playerChosen+" addMark to row: "+row+", col: "+col);
    } else {
      console.log("Already marked. Try again.");
    }
  },
  checkRows: function(playerChosen) {
    for (var row = 0; row < this.board.length; row++) {
      var count = 0;
      for (var col = 0; col < this.board.length; col++) {
        if (this.board[row][col] === playerChosen){
          count++;
        } else {
          count = 0;
        }
        if (count === this.countWin) {
          console.log("checkRow true on row: "+row);
          this["finish"] = true;
          return true;
        }
      }
    }
  },
  checkCols: function(playerChosen) {
    for (var col = 0; col < this.board.length; col++) {
      var count = 0;
      for (var row = 0; row < this.board.length; row++) {
        if (this.board[row][col] === playerChosen){
          count++;
        } else {
          count = 0;
        }
        if (count === this.countWin) {
          console.log("checkCol true on col "+col);
          this["finish"] = true;
          return true;
        }
      }
    }
  },
  checkDiagLR: function(playerChosen) {
    var count = 0;
    var length = this.board.length;
    var maxLength = length - this.countWin + 1;
    // Run Bottom Half diagonal Top Left to Bottom Right (incl middle)
    for (var rowStart = 0; rowStart < maxLength; rowStart++) {
      for (var row = rowStart, col = 0; row < length && col < length; row++, col++) {
        if (this.board[row][col] === playerChosen) {
          count++;
        } else {
          count = 0;
        }
        // HM: This is not working
        if (count === this.countWin) {
          var msg = "checkDiagLR true on StartXY: "+rowStart+","+(col-(this.countWin-1))+" EndXY: "+row+","+col;
          console.log(msg);
          this["finish"] = true;
          return true;
        }
      }
    }
    // Run Top Half diagonal Top Left to Bottom Right (excl middle)
    for (var colStart = 1; colStart < maxLength; colStart++) {
      for (var col = colStart, row = 0; col < length && row < length; col++, row++) {
        if (this.board[row][col] === playerChosen) {
          count++;
        } else {
          count = 0;
        }
        if (count === this.countWin) {
          var msg = "CheckDiagLR true on StartXY: "+(row-(this.countWin-1))+","+colStart+" EndXY: "+row+","+col;
          console.log(msg);
          this["finish"] = true;
          return true;
        }
      }
    }
  },
  checkDiagRL: function(playerChosen) {
    var count = 0;
    var length = this.board.length;
    var maxLength = length - this.countWin + 1;
    // Run Bottom half diagonal Top Right to Botom Left (incl middle)
    for (var rowStart = 0; rowStart < maxLength; rowStart++) {
      for (var row = rowStart, col = (length-1); row < length && col >= 0; row++, col--) {
        if (this.board[row][col] === playerChosen) {
          count++;
        } else {
          count = 0;
        }
        if (count === this.countWin) {
          var msg = "StartXY: "+(rowStart)+","+(col+this.countWin-1)+" EndXY: "+row+","+col;
          console.log(msg);
          this["finish"] = true;
          return true;
        }
      }
    }
    // Run Top half diagonal Top Right to Botom Left (excl middle)
    for (var colStart = (length-2); colStart > maxLength; colStart-- ) {
      for (var col = colStart, row = 0; col >= 0 && row <= colStart; col--, row++) {
        if (this.board[row][col] === playerChosen) {
          count++;
        } else {
          count = 0;
        }
        if (count === this.countWin) {
          var msg = "StartXY: "+(colStart-this.countWin+1)+","+colStart+" EndXY: "+row+","+col;
          console.log(msg);
          this["finish"] = true;
          return true;
        }
      }
    }
  },
  isEmpty: function(){
    var check = true;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i].includes('.')){
        return false;
      }
    }
    return check;
  },
  checkAll: function(playerChosen){
    this.checkRows(playerChosen);
    this.checkCols(playerChosen);
    this.checkDiagLR(playerChosen);
    this.checkDiagRL(playerChosen);
    if (!this.finish && this.isEmpty()) {
      console.log("Draw game no winner");
    }
  }
};



// jQuery..................
$(document).ready(function(){
  // Cache html select tag values from game_setup page to store for Game.newBoard(n) and Game.winCount(n)
  var size;
  var winCount;
  var maxScore;

  var round = 0; // Round counter
  var player1Score = 0;
  var player2Score = 0;

  var cacheValues = function() {
    size = parseInt($(".board-size option:selected").val());
    maxScore = parseInt($(".board-round option:selected").val());
    var el = parseInt($(".board-count option:selected").val());
    if (el > size) {
      swal("Length cannot be bigger than board size");
    } else {
      winCount = el;
    }

    console.log("size: "+size+" winCount: "+winCount+" maxScore: "+maxScore);
  };
  $('select').change(cacheValues);
  cacheValues();

  // Create callback function for building new board
  var buildBoard = function() {
    Game.newBoard(size);
    Game.winCount(winCount);
    var count = 0;
    var dimension = (100 / size)+'%';
    for (var row = 0; row < size; row++) {
      for (var col = 0; col < size; col++) {
        count++;
        var $cell = $("<div class='cell' width = '"+dimension+"%' row="+"'"+row+"' col='"+col+"'>"+count+"</div>");
        $cell.css({"width": dimension, "height": dimension});
        $('.container').append($cell);
      }
    }
    $('.game-setup').css({"display":"none"});
    $('.game-play').css({"display":"block"});
    $('.title').html("C4 game - Line up "+winCount+" in a row; First to score: "+maxScore);
    $('.cell').on('click',takeMove);
    return true;
  };

  $('button.build-board').on('click',buildBoard);


  // Selecting players:
  var player;

  var hardCodePlayer = function(name) {
    player = name;
    console.log(player+" selected");
    $('#msg').html(player+" selected").removeClass().addClass(player);
  };

  // Shortcut keys: for choosing players
  $(document).on('keypress', function(event) {
    // Number 1 shortcut
    if (event.keyCode === 49) {
      hardCodePlayer('player1');
    }
    // Number 2 shortcut
    if (event.keyCode === 50) {
      hardCodePlayer('player2');
    }
    // Spacebar shortcut
    if (event.keyCode === 32) {
      if (player === 'player1') {
        hardCodePlayer('player2')
      } else if (player === 'player2') {
        hardCodePlayer('player1')
      }
    }
  });

  var buttonPlayer = function(){
    var el = $(this).attr('class');
    hardCodePlayer(el);
  };

  $('.players').on('click','button',buttonPlayer);

  // Create checkScore callback
  var checkScore = function() {
    if (Game.finish && Game.lastPlayer === 'player1') {
      player1Score++;
      console.log('player1Score:' + player1Score, 'player2Score '+player2Score);
    } else if (Game.finish && Game.lastPlayer === 'player2') {
      player2Score++;
      console.log('player1Score:' + player1Score, 'player2Score '+player2Score);
    }
    $('button.player1 span').html(player1Score);
    $('button.player2 span').html(player2Score);

    if (player1Score === maxScore || player2Score === maxScore) {
      if (player1Score > player2Score) {
        swal("player1 WINS!", "Click ok to play again!", "success");
      } else if (player1Score < player2Score) {
        swal("player2 WINS!", "Click ok to play again!", "success");
      }
      $('.sweet-alert button').on('click',function(){
        location.reload();
      });
    }
  };

  // Create callback function when cell is clicked
  var takeMove = function(){
    // Find position of click
    var el = $(this);
    var row = el.attr('row');
    var col = el.attr('col');
    // Check conditions
    if (player === undefined) {
      $('#msg').html("Please select a player");
    } else if (player === Game.lastPlayer && player !== undefined) {
      $('#msg').html("Turn taken. Press spacebar to switch players");
    } else {
      // Execute Game logic
      Game.addMark(player,row,col);
      Game.checkAll(player);
      // Display jQuery styles
      el.addClass(player);
      if (Game.finish) {
        $('#msg').html('Winner is '+player);
        if (player === 'player1') {
          $('body').css({"backgroundColor": "chartreuse"});
        } else if (player === 'player2') {
          $('body').css({"backgroundColor": "yellow"});
        }
        $('*').not('button.reset').off('click');
        $(document).not('button.reset').off('keypress');
        round++;
      }
      if (Game.isEmpty() && !Game.finish) {
        $('body').css({"background":"#d3d3d3"});
        $('#msg').html('Game draw. No points. Reset board (R)');
        $('#msg').removeClass().addClass('msg');
        $('*').not('button.reset').off('click');
        $(document).not('button.reset').off('keypress');
        round++;
      }
      checkScore();
    }
    return true;
  };



  $('.cell').on('click',takeMove,checkScore);


  var resetBoard = function() {
    $('.cell').removeClass('player1');
    $('.cell').removeClass('player2');
    Game.newBoard(size); // Store the new board in a variable
    player = undefined;
    $('.cell').on('click',takeMove);
    $('.players').on('click','button',buttonPlayer);
    $('body').css({"backgroundColor": "white"});
    $('#msg').html("Board reset. Pick who goes first").removeClass().addClass('.msg');
  };

  $('button.reset').on('click',resetBoard);

  $(document).on('keypress', function(event) {
    if (event.keyCode === 114) {
      resetBoard();
    }
  });

}); // jQuery document ready function
