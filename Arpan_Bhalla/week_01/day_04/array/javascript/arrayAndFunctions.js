// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do
// some googling to figure this out.
var arrayOfTwoNumbers = [12,23]
function maxOfTwoNumbers (arrayOfTwoNumbers){
  for (var i = 0 ; i<arrayOfTwoNumbers.length; i++){
    var max = Math.max(...arrayOfTwoNumbers);
    console.log(max + " of two numbers");
  }
};
maxOfTwoNumbers (arrayOfTwoNumbers);


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var arrayOfThreeNUmbers = [12,23,45,67]
function maxOfThreeNumbers (arrayOfThreeNUmbers){
  for (var i = 0 ; i<arrayOfThreeNUmbers.length; i++){
    var max = Math.max(...arrayOfThreeNUmbers);
    console.log(max + " of three numbers");
  }
};
maxOfThreeNumbers (arrayOfThreeNUmbers);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.

var vowel = ["a","e","i","o","u"];

function vowelFinder(input){
  for (var i = 0 ; i<vowel.length ; i++){
  var vowelCond = input.includes(vowel[i]);
  if (vowelCond === true){
    console.log("Its Vowel" + i);
    break;
  }

  else {
    console.log("Its a Consonent" + i);
  }
  }
};
vowelFinder("x");


//////////////////

function isVowel(inputChar) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(inputChar)) {
    return true;
  } else {
    return false;
  }
}

if (isVowel("a")) {
  console.log("Its a Vowel");
} else {
  console.log("Its a Consonent");
}

///////////////////
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all
// the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,

var inputArray = [1,2,3,4];

function sumArray (inputArr){
  var result = 0;
  for(var i = 0; i<inputArr.length ; i++){

    result += inputArr[i];
  }
  console.log(result);

};
sumArray(inputArray);

// function multiplyArray
// ([1,2,3,4]) should return 24.
var inputMultiArray = [1,2,3,4];

function multipliesArray(inputMultiArr){
  var result = 1;
  for(var i = 0; i<inputMultiArr.length ; i++){

    result *= inputMultiArr[i];
  }
  console.log(result);

};
multipliesArray(inputMultiArray);

// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString
// ("jag testar") should return the string "ratset gaj".
var inputString = "arpan bhalla"
function reverseString (inputValue){
  var reversal = '';
  for (var i = (inputValue.length-1);i>=0;i--){
    reversal += inputValue[i];
  }
  console.log(reversal);
};
reverseString(inputString);
// Write a function findLongestWord that takes an array of words and returns the length of the
//longest one.
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");



// Write a function filterLongWords that takes an array of words and an number i and returns
//the array of words that are longer than i.
