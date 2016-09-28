var results = {

};

var accumulate = {
  squares: function(n) {
    results.squares.push(n*n);
  },

  cubes: function(n) {
    results.cubes.push(Math.pow(n, 3));
  },

  roots: function(n) {
    results.roots.push(Math.sqrt(n));
  },

};

var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
  
var accumulator = function(array) {

  for (var meth in accumulate) {
    results[meth] = [];
    each(array, accumulate[meth]);
  }
  
  return results;
};

console.log(accumulator([1,9,100]));
