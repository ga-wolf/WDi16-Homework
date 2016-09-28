// Create an object called 'grains'. This will store all our grains-related methods.


var grains = {

  // Use Underscore's _.range method to create an array with 64 elements (starting with 1), each one representing a square on the chess board.

  // When two parameters are passed into the _.range method, the range is created from argument 1 (inclusive) to argument 2 (exclusive).
  range: _.range(1,65),

  square: function(square) {
    // Number of grains on any single square
    return Math.pow(2, square-1);
  },

  eachSquare: function() {
    // Our range helpfully gives us both the number representing each square (ie, squares 1, 2, 3 etc through to 64) and the number of times we want to perform the calculation (the length of the array range: 64).

    // For each element in the range, perform an operation (call grains.square, passing in the i'th value of the element in range) and push the result to an array.
    var results = [];
    // Number of grains on every square
    _.each(grains.range, function(i) {
      var grain = grains.square(i);
      results.push("Square " + i + ": " + grain + "<br>");
    });
    return results;
  },

  // _.reduce is equivilent to the .reduce and .inject methods in Ruby. For each element in grains.range array, take the value of 'sum' (which is given an initial value of 0) and add to that the number of grains on this square. Return this total back to the reduce method, which will be the new value of 'sum'. Repeat until all elements in the array have been passed in to the _.reduce method. The _.reduce method returns the final value of 'sum'
  total: function() {
    // Total number of grains on the chessboard
    return _.reduce(grains.range, function(sum, num) {
      return sum + grains.square(num);
    }, 0);
  }
};

$(document).ready(function() {

  $("#one").on("click", function() {
    var val = $("#number").val();
    var result = grains.square(val);
    $("#result").text(result);
  });

  $("#eachSquare").on("click", function() {
    var result = grains.eachSquare();
    $("#result").html(result);
  });

  $("#total").on("click", function() {
    var result = grains.total();
    $("#result").text(result);
  });

});
