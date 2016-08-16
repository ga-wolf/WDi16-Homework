// console.log("test");
// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the
//   hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed
// letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate
// the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


/*
var wordToGuess = ["f","o","x"];
console.log(wordToGuess[0]);
console.log(wordToGuess[1]);
console.log(wordToGuess[2]);
var letter = prompt("Which letter?");
switch(letter) {
  case "f":
  console.log("That is the first letter");
  break;
  case "o":
  console.log("That is the middle letter");
  break;
  case "x":
  console.log("That is the last letter");
  break;
  default:
  console.log("Sorry you have guessed the wrong letter");
}
*/

/*
var wordToGuess = ["f","o","x"];
console.log(wordToGuess[0]);
console.log(wordToGuess[1]);
console.log(wordToGuess[2]);
var letter = prompt("Which letter?");
if (letter === "f") {
  console.log("That is the first letter");
} else if (letter === "o") {
  console.log("that is the second letter");
} else if (letter==="x") {
  console.log("that is the last letter")
}
else{
  console.log("wrong");
};
*/

//THIS WORKS BUT NOT THE EXACT HOMEWORK REQUIREMENT
/*
var wordToGuess = ["f","o","x"];
console.log(wordToGuess[0]);
console.log(wordToGuess[1]);
console.log(wordToGuess[2]);
console.log(wordToGuess.length)
for (var i=0; i<(wordToGuess.length + 15); i+=1){
var letter = prompt("Which letter?");
if (letter === "f") {
  console.log("That is the first letter");
} else if (letter === "o") {
  console.log("that is the second letter");
} else if (letter==="x") {
  console.log("that is the last letter")
}
else{
  console.log("wrong");
}
};
*/

//
// var wordToGuess=["f","o","x"];
// var guessedLetters=[];
// var letter = prompt("Which letter?");
// for (var i=0; i<(wordToGuess.length+15); i+=1){
// var letter = prompt("Which letter?");
// //for (var j=0; j<(guessedLetters.length); j+=1){
//   if (letter === wordToGuess[i]){
//     console.log("letter " + letter + " that is correct" );
//     guessedLetters.push(letter);
//   }
//   else {
//     console.log(letter + " that letter is wrong");
//     guessedLetters.push (letter);
//   }
// }
// //}

var wordLetters     = ['F', 'O', 'X'];
      var guessedLetters  = ['_', '_', '_'];

      function guessLetter(letter) {
          var goodGuess = false;
          var moreToGuess = false;
          for (var i = 0; i < wordLetters.length; i++) {
              if (wordLetters[i] == letter) {
                  guessedLetters[i] = letter;
                  goodGuess = true;
              }
              if (guessedLetters[i] == '_') {
                  moreToGuess = true;
              }
          }
          if (goodGuess) {
              console.log('You found a letter!');
              console.log(guessedLetters.join(''));
              if (!moreToGuess) {
                  console.log('YOU WON!');
              }
          } else {
              console.log('Wrong!');
          }
      }


letter= prompt("Which letter?");
guessLetter(letter);

      // guessLetter('G');
      // guessLetter('I');
      // guessLetter('O');
      // guessLetter('A');
      // guessLetter('T');
