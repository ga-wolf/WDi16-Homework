console.log("DAY 04: HOMEWORK");

// # Array and Functions Bonus Material
console.log("\nArray and functions bonus material:");

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

console.log("\n1. MaxofTwoNumbers:");
var maxOfTwoNumbers = function(a,b){
  if (a>=b) {
    return a;
  } else {
    return b;
  }
};
console.log(maxOfTwoNumbers(2,5)); // => 5
console.log(maxOfTwoNumbers(19,5)); // => 19
console.log(maxOfTwoNumbers(5,5)); // => 5

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

console.log("\n2. MaxofThree:");
var maxOfThree = function(a,b,c) {
  if (a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
    return b;
  } else {
    return c;
  }
};
console.log(maxOfThree(1,2,3)); // => 3
console.log(maxOfThree(16,5,7));  // => 16
console.log(maxOfThree(3,20,5)); // => 20

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log("\n3. CheckVowel:");
var vow = "aeiou";
var checkVowel = function(str) {
  if (vow.indexOf(str) !== -1) {
    return true;
  } else {
    return false;
  }
};

console.log(checkVowel("a")); // => true
console.log(checkVowel("e")); // => true
console.log(checkVowel("i")); // => true
console.log(checkVowel("o")); // => true
console.log(checkVowel("u")); // => true
console.log(checkVowel("q")); // => false
console.log(checkVowel("r")); // => false
console.log(checkVowel("s")); // => false


// 4a. Define a function `sumArray`
console.log("\n4a. sumArray");
var sumArray = function(arr) {
  var result = 0;
  for (var i=0; i<=arr.length; i++) {
    result+=i;
  }
  return result;
};
console.log(sumArray([1,2,3,4])); // => 10

// 4b. Define a function `multiplyArray`
console.log("\n4b. multiplyArray");
var multiplyArray = function(arr) {
  var result=1;
  for (var i=0; i<arr.length; i++) {
    result = result*arr[i];
  }
  return result;
};
console.log(multiplyArray([1,2,3,4])); // => 24


// ## Bonus
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

console.log("\n5. reverseString");
var reverseString = function(str) {
  var newArr = [];
  var oldArr = str.split('');
  for (var i=0; i<str.length; i++) {
  newArr.push(oldArr.pop());
  }
  console.log(newArr.join(''));
};

reverseString("jag testar"); // => ratset gaj

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

var findLongestWord = function(arr) {
  var numArr = [];
  for (var i=0; i<arr.length; i++) {
    var arrLength = arr[i].length;
    numArr.push(arrLength);
  }
  return Math.max(...numArr);
};

console.log(findLongestWord(["cat","banana","orange","abcracadabra"])); //=> 12


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

var filterLongWords = function(arr, num) {
  var length = arr.length;
  var newArr = [];
  for (var i=0; i<length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
};

var wordArr = ["cat","banana","orange","abcracadabra"];
filterLongWords(wordArr,5); // => ["banana", "orange", "abcracadabra"]
