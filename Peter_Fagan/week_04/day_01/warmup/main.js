// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
  // take the next available unmarked number in your list (it is prime)
  // remove all the multiples of that number (they are not prime)
  // Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
// 1. Start by creating a function that will give you an array of all numbers between two numbers (a simple for-loop should do it);
// 2. Treat every number in the range as a potential prime - ie, it’s a prime unless proven otherwise;
// 3. Push all proven primes to an array.


var numList = [];

var rawNumbers = function (lastNumber) {
  for (i=2; i<=lastNumber; i+=1)
    numList.push(i);
  console.log(numList);
  for (j=2; j<i; j+=1)
      if (i%j === 0) {
        numList.splice(i);
      }
  console.log(numList);
};
rawNumbers(13);
