// ..............Practice diagonal loop check
var array = [[1,2,'X',4,5],[6,'X',8,9,10],['X',12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

var countWin = 3;

var checkDiagonalLR = function(playerChosen) {
  var count = 0;
  var length = array.length;

  // Run Bottom Half diagonal Top Left to Bottom Right (incl middle)
  for (var rowStart = 0; rowStart < length; rowStart++) {
    for (var row = rowStart, col = 0; row < length && col < length; row++, col++) {
      if (array[row][col] === playerChosen) {
        count++;
      } else {
        count = 0;
      }
      if (count === countWin) {
        var msg = "StartXY: "+rowStart+","+(col-(countWin-1))+" EndXY: "+row+","+col;
        return msg;
      }
    }
  }

  // Run Top Half diagonal Top Left to Bottom Right (excl middle)
  for (var colStart = 1; colStart < length; colStart++) {
    for (var col = colStart, row = 0; col < length && row < length; col++, row++) {
      if (array[row][col] === playerChosen) {
        count++;
      } else {
        count = 0;
      }
      if (count === countWin) {
        var msg = "StartXY: "+(row-(countWin-1))+","+colStart+" EndXY: "+row+","+col;
        return msg;
      }
    }
  }
};


var checkDiagonalRL = function(playerChosen) {
  var count = 0;
  var length = array.length;

  // Run Bottom half diagonal Top Right to Botom Left (incl middle)
  for (var rowStart = 0; rowStart < length; rowStart++) {
    for (var row = rowStart, col = length; row < length && col > 0; row++, col--) {
      if (array[row][col] === playerChosen) {
        count++;
      } else {
        count = 0;
      }
      if (count === countWin) {
        var msg = "StartXY: "+(rowStart+1)+","+(col+countWin-1)+" EndXY: "+row+","+col;
        return msg;
      }
    }
  }

  // Run Top half diagonal Top Right to Botom Left (excl middle)
  for (var colStart = (length-2); colStart >= 0; colStart-- ) {
    for (var col = colStart, row = 0; col >= 0 && row < length; col--, row++) {
      if (array[row][col] === playerChosen) {
        count++;
      } else {
        count = 0;
      }
      if (count === countWin) {
        var msg = "StartXY: "+(colStart-countWin+1)+","+colStart+" EndXY: "+row+","+col;
        return msg;
      }
    }
  }

};
