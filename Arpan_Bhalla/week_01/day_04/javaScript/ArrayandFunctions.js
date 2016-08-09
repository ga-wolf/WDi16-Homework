// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// var maxOfTwoNumbers = function(numOne,numTwo){
//   if (numOne>numTwo){
//     console.log(numOne);
//   }
//   else if (numTwo>numOne){
//     console.log(numTwo);
//   }
//   else {
//     console.log("Both are equal");
//   }
// };
//
// var numberOne = prompt("Enter First Number : ");
// var numberTwo = prompt("Enter Second Number : ");
// maxOfTwoNumbers(numberOne,numberTwo);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// var maxOfThree = function (numOne,numTwo,numThree){
//   if((numOne>numTwo) && (numOne>numThree)){
//   console.log("Number one is largest");
// }
//   else if ((numTwo>numOne) && (numTwo>numThree)){
//     console.log("Number two is largest");
//   }
//   else {
//     console.log("Number three is largest");
//   }
// };
// var numOne = prompt("Enter Number one : ");
// var numTwo = prompt("enter number two : ");
// var numThree = prompt("Enter Number Three :");
// maxOfThree(numOne,numTwo,numThree);



// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// var vowel = ["a","e","i","o","u"];
// var vowelFinder = function(inputWord){
//   var result;
//
//   for (var i = 0; i < vowel.length; i++){
//     if (inputWord === vowel[i]){
//
//       result = true;
//       break;
//     }
//     else {
//
//       result = false;
//
//     }
//
//   }
//   return result;
//
// };
//
// var input = prompt("Enter the word :");
// var result=vowelFinder(input);
//
// if (result){
//   console.log("its a vowel");
// }
// else{
//   console.log("its not a vowel");
// }




// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var number = [1,2,3,4];

var sumArray = function(){

  var sum = 0;
  for (var i = 0; i<number.length ; i++){
    sum = number[i] + sum;

  }
  return sum;
};

var result = sumArray();
console.log(result);



var multiplyArray = function(){
  var multliplication=1;
  for (var i =0;i<number.length;i++){
    multliplication = number[i]*multliplication;
  }
  return multliplication;
};

var outputMultiplication = multiplyArray();
console.log(outputMultiplication);




// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(inputWord){
  var stringArray = inputWord.split("");
  var revString = stringArray.reverse("");

  var joinString = revString.join("");
  console.log(joinString);
};
var inputWord = prompt("Enter The Word: ");
reverseString(inputWord);
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var words = ["Dog","cat","fish","elephant","dog","crocodile"];

var findLongestWord = function(){
  var longestWordIndex;

  for (var i = 0 ; i< words.length ; i++){
    if(words[i]>=words[i+1]){
      longestWordIndex = i;
    }
    else{
      longestWordIndex= (i+1);
    }
  }
console.log("Length of longest word "+ words[longestWordIndex]);

};
findLongestWord();

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
