console.log("DAY_04 HOMEWORK: THE WORD GUESSER");

// THE WORD GUESSER
/*
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
- Write a function called guessLetter that will:
- Take one argument, the guessed letter.
- Iterate through the word letters and see if the guessed letter is in there.
- If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
- When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
- It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
- Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/
console.log("\nHANGMAN:");
var word = ["H","A","N","G","M","A","N"];
var guessed = ["_","_","_","_","_","_","_"];

var guessLetter = function(letter) {

  //Set variable to count number of spaces remaining to be guessed
  var guessLeft = (guessed.join('').match(/_/g) || []).length;

  //If letter exists or no guesses left continue
  if(word.indexOf(letter) !== -1 || guessLeft === 0) {
  // while loop to keep switching letter with word dash
    while (word.indexOf(letter) !== -1) {
      guessed[word.indexOf(letter)]=letter;
      word[word.indexOf(letter)]="_";
    }
    if (guessLeft === 0) {
      console.log(guessed.join('')+" congratulations you WIN!!");
    } else {
      console.log(guessed.join('')+" congratulations you found "+letter);
    }
  } else {
  console.log(guessed.join('')+" try again no letter "+letter);
  }

};

guessLetter('H');
guessLetter('O');
guessLetter('A');
guessLetter('M');
guessLetter('N');
guessLetter('T');
guessLetter('G');
guessLetter('G');

/*
## Bonus: Make it more like Wheel of Fortune:
- Start with a reward amount of $0
- Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
- When they guess the word, log their final reward amount.
*/
console.log("\nWHEEL OF FORTUNE:");
var word = ["H","A","N","G","M","A","N"];
var guessed = ["_","_","_","_","_","_","_"];
var total = 0; //Set total reward to $0

var guessLetter = function(letter) {
  // random amount between $1 and $10
  var random = Math.ceil(Math.random()*11);

  //If letter exists or no guesses left continue
  if(word.indexOf(letter) !== -1 || (guessed.join('').match(/_/g) || []).length === 0) {
  // while loop to keep switching letter with word dash
    while (word.indexOf(letter) !== -1) {
      guessed[word.indexOf(letter)]=letter;
      word[word.indexOf(letter)]="_";
      //Add random amount to the total
      total+=random;
    }
    if ((guessed.join('').match(/_/g) || []).length === 0) {
      console.log(guessed.join('')+" congratulations you WIN!! Total reward: $"+total);
    } else {
      console.log(guessed.join('')+" found letter "+letter+". +$"+random+" per letter. Reward tally: $"+total);
    }
  } else {
    total-=random;
  console.log(guessed.join('')+" no letter "+letter+". Penality -$"+random+". Reward tally: $"+total);
  }

};

guessLetter('H');
guessLetter('O');
guessLetter('A');
guessLetter('M');
guessLetter('N');
guessLetter('T');
guessLetter('G');
guessLetter('G');

/*
## Bonus: Make it like Hangman:
- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/

console.log("\nBONUS: Hangman");

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var word = ["H","A","N","G","M","A","N"];
var guessed = ["_","_","_","_","_","_","_"];
var lives = 6;

var guessLetter = function(letter) {

  if(alphabet.indexOf(letter) !== -1) {
    if(word.indexOf(letter) !== -1 || (guessed.join('').match(/_/g) || []).length === 0) {
      while (word.indexOf(letter) !== -1) {
        guessed[word.indexOf(letter)]=letter;
        word[word.indexOf(letter)]="_";
      }
      if ((guessed.join('').match(/_/g) || []).length === 0) {
        console.log(guessed.join('')+" congratulations you WIN!!");
      } else {
        console.log(guessed.join('')+" congratulations you found "+letter);
      }
    } else {
    console.log(guessed.join('')+" try again no letter "+letter+". Lives remaining: "+lives);
    lives-=1;
    if (lives === 0 ) {
      console.log("You are dead");
      console.log("__________");
      console.log("|         |");
      console.log("|         O");
      console.log("|        /|\\");
      console.log("|         |");
      console.log("|        / \\");
      console.log("|          ");
    }
    }
    alphabet[alphabet.indexOf(letter)]="_";
  } else {
      console.log("Try again you have already selected "+letter);
  }

}; //End of guessLetter function

guessLetter('H');
guessLetter('H');
guessLetter('H');
guessLetter('O');
guessLetter('A');
guessLetter('M');
guessLetter('N');
guessLetter('T');
guessLetter('Q');
guessLetter('P');
guessLetter('S');
guessLetter('L');


/*

// var chooseLetter = function(letter) {
//   if (alphabet.indexOf(letter) !== -1) {
//     alphabet[alphabet.indexOf(letter)]="_";
//   } else {
//     console.log("You have already selected "+letter);
//   }
// };
//
// chooseLetter("A");
// chooseLetter("A");

*/


//




//** TEAMMATE SOLUTION

wordLetters=["F", "O", "X", "T", "R", "O", "T"];
guessLetters=[];

for (var i = 0; i<wordLetters.length; i++){
 guessLetters[i] = "_";
}

function guessLetter(guessedLetter) {
 for (var i = 0; i<wordLetters.length; i++){
   if (guessedLetter === wordLetters[i]){
     guessLetters[i] = guessedLetter;
   }
 };
 if (! guessLetters.includes("_")){
   console.log("You have won! ");
 }
 console.log(guessLetters);
};

guessLetter("")
