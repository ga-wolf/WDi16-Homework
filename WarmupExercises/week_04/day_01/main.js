var sieve = {

  // Create a method that will create an array of all numbers between two inputs.
  getRange: function(num1, num2) {
    var range = [];
    for (var i = num1; i <= num2; i++) {
      range.push(i);
    }
    // We want this function to return that range, so we can get the range by calling it from other methods in our object.
    return range;
  },

  // Create a method that will get all the primes between two inputs. 
  getPrimes: function(min, max) {
    // Start off with an empty array - we'll push proven primes to this array.
    var primes = [];
    // Since our getRange method returns an array, we can just set the value of the variable range to be whatever that method returns.
    var range = this.getRange(min, max);
    // Iterate over all numbers in the range.
    for (var i = 0; i < range.length; i++) {
      // Call that number 'candidate'. This is just so I can keep track of what my variables are. 'candidate' is easier to deciper than 'range[i]'.
      var candidate = range[i];
      // Start off by assuming the number IS a prime number.
      var prime = true;
      // Go through all the numbers between 2 and the candidate itself and see whether the number is divisible by any of those numbers. We only need to test from 2, since all numbers are divisible by 1, and we only need to test up to the candidate number, since a number cannot be evenly divisibly by any number greater than itself.
      for (var j = 2; j < candidate; j++) {
        // If the candidate is evenly divisible by any of those numbers, then...
        if (candidate % j === 0) {
          // ... we know the number isn't a prime.
          prime = false;
        }
      }
      // If, after going through all the numbers between 2 and itself, the value of 'prime' is still 'false'...
      if ((prime === true) && (candidate > 1)) {
        // ... that number is a prime, so push it to the primes array.
        primes.push(candidate);
      }
    }
    // Return the primes.
    console.log(primes);
    return primes;
  }
};

sieve.getPrimes(0, 100);
