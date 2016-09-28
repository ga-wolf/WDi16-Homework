var allergens = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

var getAllergies = function(number) {
  // .map is an ECMAScript5 array method, so it won't work in older browsers - you'd need to use a loop (or a library like underscore) to be supported in older browsers. 
  var allergenKeys = Object.keys(allergens).map(Number).sort().reverse();
  var allergies = [];

  for (var i = 0; i < allergenKeys.length; i++) {
    var potentialAllergy = allergens[allergenKeys[i]];
    if (number >= parseInt(allergenKeys[i])) {
      allergies.push(potentialAllergy);
      number -= allergenKeys[i];
    }
  }
  if (allergies.length === 0) {
    allergies = "no allergies";
  }
  return allergies;
};
console.log(getAllergies(0));
