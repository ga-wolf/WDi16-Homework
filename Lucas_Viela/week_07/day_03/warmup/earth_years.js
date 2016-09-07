// Given an age in seconds, calculate how old someone would be on:
//divide 1 = 1 year per reference of the planet
// = a number of earth years in a reference year
// multiply per the earth year in secconds

// give my age 28
//

var SpaceAge = function(seconds) {
  this.secconds = seconds;
  this.yearsOnEarth = seconds / 31557600;
  this.earthToOtherPlanets = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  var age = new SpaceAge(100000);
  console.log(age.yearsOnEarth);
};
