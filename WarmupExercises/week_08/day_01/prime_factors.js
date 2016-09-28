// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// 1. Get an array of all the numbers between 2 and the number we're getting the prime factors of. I'll start my iteration at 2, since 0 and 1 are not prime numbers, so I don't want them in my array.
var getArray = function(num) {
  // This would be nice and easy with Underscore's _.range method, but I'm not going to include a whole library for one function.
  var arr = [];
  for (var i = 2; i <= num; i++) {
    arr.push(i);
  }
  // We need to return the array of numbers, since our next function is going to call this function and use whatever it returns.
  return arr;
};

// 2. This function will take our array of all the numbers between 2 and the number we're factorizing, and just return the prime numbers.
var getPrimes = function(num) {
  var primes = [];
  var range = getArray(num);
  for (var i = 0; i < range.length; i++) {
    // I'm going to store range[i] in a variable valled 'primeCandidate' to remind myself of what it represents and what I'm doing with it.
    var primeCandidate = range[i];
    // I'll start by assuming that the primeCandidate is a prime number (unitl proven otherwise)
    var prime = true;
    // If the primeCandidate is evenly divisible by anything other than 1 and itself, we know it's not a prime number. We also don't need to bother testing any numbers greater than the primeCandidate, since a number cannot be evenly divisible by a number greater than itself.
    for (var j = 2; j < primeCandidate; j++) {
      if (primeCandidate % j === 0) {
        prime = false;
      }
    }
    // If, after going through every number between 2 and itself, the primeCandidate hasn't been proven to NOT be a prime number, push it to our array of proven primes.
    if (prime === true) {
      primes.push(primeCandidate);
    }
  }
  // Again, we're returning this array, since our NEXT function is going to call it and use the value it returns.
  return primes;
};

// 3. Get the prime factorization of a number, utilizing the getPrimes function (which returns an array of all prime numbers up to the argument passed into this function).
var getPrimeFactors = function(num) {
  var primeFactors = [];
  // Get all the prime numbers between 2 and the number we want to factorize by calling the getPrimes function and storing whatever that returns in a variable called 'primes'.
  var primes = getPrimes(num);
  // Go over every prime number and...
  for (var i = 0; i < primes.length; i++) {
    // We need to use while instead of if, here. If we use if, the we won't get the full prime factorization (60, for example, will return 2,3,5, not 2,2,3,5).
    while (num % primes[i] === 0) {
      primeFactors.push(primes[i]);
      num /= primes[i];
    }
  }
  return primeFactors;
};

console.log(getPrimeFactors(76));
