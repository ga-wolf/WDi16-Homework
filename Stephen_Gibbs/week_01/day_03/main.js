// Part 1
//
// Write a function called squareNumber that will take one argument (a number),
//  square that number, and return the result. It should also log a string like
//  "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2,
// and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what
// percent the first number represents of the second number, and return the result.
//  It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a string like
// "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

//FIRST
var squareNumber = function(x){
  var result = x * x;
  return result;
}
var i = 5;
var res = squareNumber(i);
console.log(res);
console.log("The result of squaring the number " + i + " is " + res);

//SECOND

var halfNumber = function(x){
  var result = x / 2;
  return result;
}
var i = 6;
var res = halfNumber(i);
console.log(res);
console.log("The result of halving the number " + i + " is " + res);

//THIRD

var percentOfNumber = function(x,y){
  var result = x / y * 100;
  return result;
}
var i = 6;
var j = 12;
var res = percentOfNumber(i,j);
console.log(res);
console.log(i + " over " + j + " is a percentage (%) of " + res);

//FOURTH
var areaOfCircle = function(x){
  var result = Math.PI * radius * radius;
  return result;
}
var radius = 6;
var res = areaOfCircle(radius).toFixed(2);
console.log(res);
console.log("The area of the circle with radius of " + radius + " is " + res);


//
// Part 2
//
// Write a function that will take one argument (a number) and perform the
//following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


//PART 2
var multiTask = function(x){
  var result = x / 2;
  return result;
  }
  var i = 6;
  var res = halfNumber(i);
  var res2 = res * res;
  var radius = res2;
  var areaOfCircle2 = Math.PI * radius * radius;
  var res3 = areaOfCircle2 / (areaOfCircle2 * areaOfCircle2);
  console.log("original number is " + i, "half number is " + res, " square of half number is " + res2, "radius is " + radius, " area is " + areaOfCircle2, " and per cent is " + res3);


  // DrEvil
  //
  // Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
  //
  //   DrEvil(10): 10 dollars
  //   DrEvil(1000000): 1000000 dollars (pinky)



var DrEvil = function(x){
    if (x===1000001){
      console.log(x + " dollars (pinky)");
    } else{
      console.log(x + " dollars");
    }
}
DrEvil(1000000);
DrEvil(55);


//
// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation
// of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


var x = "dog";
var y = "dinner";
var shortX = x.slice(0,2);
var shortY = y.slice(0,2);

var removeTwoLettersX = x.slice(x.length-(x.length-2));
var removeTwoLettersY = y.slice(y.length-(y.length-2));

var newY = (y - shortY);
console.log(x,y);
console.log(shortY+removeTwoLettersX);
console.log(shortX+removeTwoLettersY);

//As a function


var MixUp = function(x,y){
var shortX = x.slice(0,2);
var shortY = y.slice(0,2);

var removeTwoLettersX = x.slice(x.length-(x.length-2));
var removeTwoLettersY = y.slice(y.length-(y.length-2));

var newY = (y - shortY);
console.log(x,y);
console.log(shortY+removeTwoLettersX);
console.log(shortX+removeTwoLettersY);
}
//MixUp("mix","pod");
MixUp("dog","dinner");



//FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var word = "babble";
var word1 = word.replace(/b/gi,"*");
console.log(word1);
var word3 = word1.replace("*","b");
console.log(word3);


//AS A function
//need to make first character the letter to replace with *

// var fixStart = function(x,y){
//
// }
// fixStart("babble","b");

var word = "babble";
var letterToReplace = word.slice(0,1);
console.log(letterToReplace);
var word1 = word.replace(/letterToReplace/gi,"*");
console.log(word1);


//Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

//TEST CASE
var word = "swim";
var lastLetter = word.slice(word.length-(word.length-(word.length-1)));
console.log(lastLetter);
var verbing = function(){
  if (word.length>=3){
    console.log(word+lastLetter+"ing");

  }
}
verbing();
//
// WITH OTHER CASES
var word = "swimming";
var lastLetter = word.slice(word.length-(word.length-(word.length-1)));
console.log(lastLetter);
var verbing = function(){
  if (word.length>=3&&word.length<=6){
    console.log(word+lastLetter+"ing");

  }
  else if (word.length>7){
    console.log(word + "ly");
  }
  else {
    console.log(word);
  }
}
verbing();


var verbing = function (string){
  var endOfString = string.slice(-3);
  var stringLength=string.length;
  if (stringLength<=3){
    console.log(string);


  }else if (endOfString==="ing"){
    console.log (string+ "ly");

  } else if (stringLength>=3){
    console.log(string + "ing");
  }
};
verbing("swimming");



//Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
// substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
// just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


var notBad = function (string){
  var newString=string.replace(/not.>bad/,'good');
  console.log(newString);
};
notBad('This dinner is bad');
