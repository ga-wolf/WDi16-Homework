// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.


// take in a value "score"
// compare score to the largest key in the allergies Object
// if the k is greater than the score, go to the next highest value keys
// if the key is lower than the score, add the value to the array "allergic"
// deduct the k from the number
// compare the number to the next highest k, repeat until the number is equal to 0
// print out the values int he array "allergic"

// DO NOT START WITH THE NUMBERS AS THE KEYS!!! THIS WILL NOT WORK EASILY!

var allergens = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1
};

var allergic = function(number) {
  var allergies = [];

  for (var k in allergens) {
    if (allergens[k] <= number) {
      allergies.push (k);
      number = number - allergens[k];
    }
  }
  console.log(allergies);
};

allergic(34);
