//## Calculator part 1
console.log("THE CALCULATOR - Part 1:");

var squareNumber = function(num) {
  var result = num*num;
  var msg = "The result of squaring the number "+num.toFixed(2)+" is "+result.toFixed(2);
  console.log(msg.toString());
  return result;
};
squareNumber(3); // => The result of squaring the number 3.00 is 9.00

var halfNumber = function(num) {
  var result = num/2;
  console.log("Half of "+num.toFixed(2)+" is "+result.toFixed(2));
  return result;
};
halfNumber(5); // => Half of 5.00 is 2.50


var percentOf = function(num, den) {
  var result = (num/den*100).toFixed(2)+"%";
  var msg = num.toFixed(2)+" is "+result+" of "+den.toFixed(2);
  console.log(msg);
  return result;
};
percentOf(2,4); // => 2.00 is 50.00% of 4.00

var areaOfCircle = function(radius) {
  var pi = Math.PI;
  var result = pi*radius*radius;
  var msg = "The area for a circle with a radius of "+radius.toFixed(1)+" is "+result.toFixed(2);
  console.log(msg.toString());
  return result;
};
areaOfCircle(2); // => The area for a circle with a radius of 2.0 is 12.57

//## Calculator part 2
console.log("\nTHE CALCULATOR - Part 2:");

var command = function(num) {
  var half = halfNumber(num);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var output = percentOf(area,squareNumber(area));
  return output;
};
console.log(command(10));

//## STRINGS DrEvil
console.log("\nSTRINGS: DrEvil");

var drEvil = function(amount) {
  var str = '';
  if (amount >= 1000000) {
    str = amount+" dollars (pinky)";
  } else {
    str = amount+" dollars";
  }
  console.log(str);
  return str;
};
drEvil(10); // => 10 dollars
drEvil(500); // => 500 dollars
drEvil(1000000); // => 1000000 dollars (pinky)
drEvil(2000000); // => 2000000 dollars (pinky)

//## STRINGS MixUp
console.log("\nSTRINGS: MixUp");

var mixUp = function(A,B) {
// Using charAt(i) string method to take first two characters (0 and 1) of string B and append to string A after slicing off first 2 characters. Shorthand array methd string[0] instead of string.charAt(0)
  var sliceA = B.charAt(0)+B.charAt(1)+A.slice(2);
  var sliceB = A[0]+A[1]+B.slice(2);
  console.log(sliceA+" "+sliceB);
};
mixUp("mix", "pod"); // => pox mid
mixUp("dog", "dinner"); // => dig donner

//## STRINGS FixStart
console.log("\nSTRINGS: FixStart");

var fixStart = function(string) {
// Use regular expression constructor to store a regular expression in a variable based on the first character of the string. Note use 'gi' argument to do find and replace all. Then pass regular expression variable into replace method ".replace(re,"*")" of the adjusted string which removes the first character "string.slice(1)".
  var re = new RegExp(string[0],'gi');
  var end = string.slice(1);
  var fixEnd = string[0]+end.replace(re,"*");
  console.log(fixEnd);
  return fixEnd;
};
fixStart('babble'); // => b*bble
fixStart('abacadabra'); // => ab*c*d*br*a
fixStart('oompaloompa'); // => o*mpal**mpa

//## STRINGS Verbing
console.log("\nSTRINGS: Verbing");

var verbing = function(string) {
  if (string.endsWith("ing")) {
    var msg = string+"ly"
    console.log(msg);
  } else if (string.length>=3) {
    var end = string[string.length-1];
    var msg = string+end+"ing";
    console.log(msg);
  }
};
verbing('swim'); // => swimming
verbing('swimming'); // => swimmingly
verbing('win'); // => winning
verbing('seeming'); // => seemingly

//## STRINGS Not Bad
console.log("\nSTRINGS: Not Bad");

var notBad = function(string) {
// Variable assign indexOf position for 'not' and 'bad' within string argument. Note: if string does not have substring 'not' and 'bad' it will return number -1
  var notIndex = string.indexOf('not');
  var badIndex = string.indexOf('bad');

// Check that both 'not' and 'bad' substrings exist within string argument. If so, check if 'not' comes before 'bad', if so use slice to delete all characters after not (inclusive) and then add string "good!""
  if (notIndex !== -1 && badIndex !== -1) {
      if (notIndex < badIndex) {
          var str = string.slice(0,notIndex);
          var msg = str+"good!";
          console.log(msg);
          return msg;
      }
  }
  // Otherwise print the string
  console.log(string);
  return string;
};

notBad("This dinner is not that bad!"); // => This dinner is good!
notBad("This movie is not so bad!"); // => This movie is good!
notBad("This dinner is not bad!"); // => This dinner is good!
notBad("This movie is not as bad as I thought!"); // => This movie is good!
notBad("This dinner is bad!"); // => This dinner is bad!
notBad("I will not recommend this movie!"); // => I will not recommend this movie!
