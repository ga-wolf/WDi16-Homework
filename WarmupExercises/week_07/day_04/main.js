var reverser = function(arr) {

  var reversed = [].concat(arr).reverse();

  // var reversed = [];
  // for (var i = 0; i < arr.length; i++) {
  //   reversed.unshift(arr[i]);
  // }

  return reversed;
};

var flatten = function(arr) {
  var flattened = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof(Array)) {
      for (var j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  // Hectic reduce/concat combo that achieves the same result.

  // return arr.reduce(function(result,element) {
  //   return result.concat(element);
  // }, []);

  return flattened;
};

var myArray = [1,2,3,4,5];
var nestedArray = [1,2,[3,4],5,6];
console.log(flatten(nestedArray));
console.log(reverser(myArray));
