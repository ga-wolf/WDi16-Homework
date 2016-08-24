// Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in Javascript.
// Youll have to remember your pr e-work, or do some googling to figure this out.
// var num1 = 10;
// var num2 = 20;
// var maxOfTwoNumbers = function(num1 , num2){
//   if(num1 > num2){
//     console.log(num1+ " is max number ");
//   }else{
//     console.log(num2 + " is min number ");
//   }
// };
// maxOfTwoNumbers ();
//
//
// // Define a function maxOfThree that takes three numbers as arguments
// // and returns the largest of them.
//
// var maxOfThreeNumbers = function(num1, num2 , num3){
//   if(num1 >= num2 && num1 >= num3){
//     console.log(num1 + " is maximum number");
//   }else if(num2 >= num1 && num2 >= num3){
//     console.log(num2 + " is maximum number");
//   }else{
//     console.log(num3 + " is maximum number");
//   }
// };
// maxOfThreeNumbers( 2, 2 ,3);
// //
// // Define a function sumArray and a function multiplyArray that sums and
// // multiplies (respectively) all the numbers in an array of numbers. For example,
// // sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
//
//   var twoOperations = function([num1 , num2 , num3, num4]){
//    var result1 = num1 + num2 + num3 + num4;
//    var result2 = num1 * num2 * num3 * num4;
//    console.log ( result1 , result2);
//   };
//   twoOperations( [10 , 8 , 4,9]);
//
//
//   // Write a function that takes a character (i.e. a string of length 1) and returns
//   // true if it is a vowel, false otherwise.
// var vowelList = ['a', 'e', 'i', 'o', 'u'];
//   var vowelChar = function ( word ){
//     return (vowelList.includes(word) );
//
//   };
//
// var result = vowelChar('o');
// console.log( result );
//
//
// // Define a function reverseString that computes the reversal of a string.
// // For example, reverseString("jag testar") should return the string "ratset gaj".
//
// var reverseString = function (word) {
//
//     var newString = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         newString += word[i];
//         console.log(newString);
//     }
//     return newString;
// };
// reverseString('yallappa');
//
// // Write a function findLongestWord
// //  that takes an array of words and returns the length of the longest one.
// //
//
// var find_longest_word = function (word)
// {
//   var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//
//     }
//   }
//   console.log(result.length);
//   return result;
// };
// console.log(find_longest_word("The quick brown fox jumped over the lazy dog"));
//
// Write a function filterLongWords that takes an array of words and an number i
// and returns the array of words that are longer than i.

var words = ["My", "name", "is","Priyanka" ];
var gwordLength ;
var checkLength = function (word){
  return word.length > gwordLength;

};
var filterWord = function(words , wordLength){
  gwordLength =  wordLength ;
  var result = words.filter(checkLength);
  console.log( result );
};


filterWord(["My", "name", "is","Priyanka" ] , 3);
