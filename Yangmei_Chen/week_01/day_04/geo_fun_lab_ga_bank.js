// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfTwoNumbers = function (numOne, numTwo, numThree){
  console.log(Math.max(numOne,numTwo, numThree));
}
maxOfTwoNumbers(156,7,8);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowels = ["a","e","i","o","u"];
var character = function (a){
  for (var i = 0; i < vowels.length; i++) {
    if (a === vowels[i]) {
      console.log("true");
    }else {
      console.log("false");
    }
  }
}
character("a");

// var character = function(a){
//   var vowels = ["a","e","i","o","u"]
//   if () {
//
//   }
// };
// character("a");

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var numbers = [2,3,4,5];
var totalSum = 0, totalMultiply = 1;
for (var i = 0; i < numbers.length; i++) {
  var totalSum = totalSum + numbers[i];
  var totalMultiply = totalMultiply * numbers[i];
};
console.log(totalSum);
console.log(totalMultiply);


// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').

var word = ["F","O","X"],
    guessedLetters = [];
for (var i = 0; i < word.length; i++) {
  guessedLetters[i] = "_"
}
// Write a function called guessLetter that will:
var guessLetter = function (guessedLetter){
  for (var i = 0; i < word.length; i++) {
    if (guessedLetter == word[i]) {
      guessedLetters[i] = guessedLetter
    }
    if (! guessedLetters.includes("_")){
      console.log("You have won!");
    }
  }
};
console.log(guessedLetters);
guessLetter("F");
console.log(guessedLetters);
guessLetter("X");
console.log(guessedLetters);
guessLetter("O");
console.log(guessedLetters);

// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
var word = ["F","O","X"],
    guessedLetters = [],
    reward = 0;

for (var i = 0; i < word.length; i++) {
  guessedLetters[i] = "_"
}
var guessLetter = function (guessedLetter){
  for (var i = 0; i < word.length; i++) {
    if (guessedLetter == word[i]) {
      guessedLetters[i] = guessedLetter;
      reward = reward + 5;
      if (guessedLetter !== word[i]) {
        reward = reward - 5;
      }
      //Couldn't get the reward to subtract with the if !== condition here !!!
    }

    if (! guessedLetters.includes("_")){
      console.log("You have won!");
    }

  }
};

console.log(reward);
guessLetter("F");
console.log(reward);
guessLetter("X");
console.log(reward);
guessLetter("d");
console.log(reward); // This is supposed to be 5 but it didn't change.

// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var word = ["F","O","X"],
    guessedLetters = [];

for (var i = 0; i < word.length; i++) {
  guessedLetters[i] = "_"
}

var functionCalls = 0,
    guessLetter = function (guessedLetter){
  for (var i = 0; i < word.length; i++) {
    if (guessedLetter == word[i]) {
      guessedLetters[i] = guessedLetter
    }
    if (! guessedLetters.includes("_")){
      console.log("You have won!");
    }
  };
  functionCalls = functionCalls + 1;
  if (functionCalls >= 6) {
    console.log("You lost!");
  }
};

guessLetter("F");
guessLetter("F");
guessLetter("F");
guessLetter("F");
guessLetter("O");
guessLetter("O");
console.log(guessedLetters);


// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.


function Account(name, balance){

  this.name = name;
  this.balance = balance;

  this.deposit = function (depositAmount) {
    this.balance += depositAmount;
    console.log(this.name + ": Balance is now " + this.balance);
  };

  this.withdraw = function (withdrawAmount){
    this.balance = this.balance - withdrawAmount;
    console.log(this.name + ": Balance is now " + this.balance);
    if (this.balance <= 0) {
      console.log(this.name + " You have insufficient funds!!!");
    }

  };

  this.transfer = function(amount, account) {
    console.info("Transfer:" + amount + " has been transferred from " + this.name + "'s account to " + account.name + "'s account.'");
}
};

var AustinAccount = new Account ("Austin", 500);
var YangmeiAccount = new Account ("Yangmei", 10000);
var GingerAccount = new Account ("Ginger", 70000000);
var OreoAccount = new Account ("Oreo", 900000000);

AustinAccount.deposit(59);
YangmeiAccount.withdraw(200000);
GingerAccount.transfer(5000, OreoAccount);
