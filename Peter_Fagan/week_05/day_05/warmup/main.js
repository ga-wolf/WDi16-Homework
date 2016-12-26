// Accumulate
//
// For example, given the collection of numbers:
//
// 1, 2, 3, 4, 5
// And the operation:
// square a number
// Your code should be able to produce a collection of the squares of the original numbers.
//
// 1, 4, 9, 16, 25
// (eg 1*1, 2*2, 3*3, 4*4, 5*5)

var myNumbers = [1,2,3,4,5];
var squared = [];

var squares = function(myNumbers) {
  for (i=0; i < myNumbers.length; i+=1) {
    var j = (myNumbers[i]*myNumbers[i]);
    squared.push (j);
  };
  return squared;
};

console.log(squares(myNumbers));
