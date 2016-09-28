// start off at square 1 = 1
// double the contents of the square and increment the square number up to maximum 64

// Write a program that shows 1) how many grains were on a particular square
//
// Example: 'Square 3: 4'.
// 2) how many grains were on each square?
// That is: 'Square 1: 1'
//
// 'Square 2: 2'
// 'Square 3: 4'
// 'Square 4: 8'
// 'Square 5: 16'
// [etc]
// 3) the total number of grains on the board
// That is: 'The total number of grains is _[????]_'
// Do this in JS (why not use Underscore to take advantage of some of its helpful, Ruby-esque methods, like _.range, _.reduce, etc?).

var grains = {
  1: 1
};
var squares = function(num) {
  _.times(num, function() {
    _.mapObject( grains, function (key, value) {
      console.log(key);
      return value +=1, key * 2;
    });
    console.log(grains);
  });
};
_.each(grains, function (key, value) {
  if (key === 1) {
    console.log("Square " + value + " has " + key + " grain on it");
  } else {
    console.log("Square " + value + " has " + key + " grains on it");
  }
});

squares(3);

// I got lost doing this...
