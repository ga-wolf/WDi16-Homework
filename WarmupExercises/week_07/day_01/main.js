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
  var allergenKeys = Object.keys(allergens).reverse();
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
