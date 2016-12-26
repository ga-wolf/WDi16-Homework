// Write a program that can calculate the sum of the first n elements of the following sequences:
//
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// For example:
//
// s1(4) = 0
// s2(4) = 10


var sum1 = function (n) {
  if (n%2 === 0) {
    console.log("s1(" + n + ") = 0");
  } else {
    console.log("s1(" + n + ") = 1");
  }
  //return n % 2 === 0 ? 0 : 1; // Ternary operation
};

sum1(4);

var sum2 = function (n) {
  var sum = 0;
  for (var i=1; i<=n; i+=1) {
    sum += i;
    sum2 = (n * (n+1) /2);
  }
  console.log("s2(" + n + ") = " + sum);
  console.log(sum2);

};

sum2(4);
