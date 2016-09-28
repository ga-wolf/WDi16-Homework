// Let's do this using a constructor. A constructor is a blueprint for creating objects, which allows us to assign the value of 'this' for any objects created by calling the 'new' method on the constructor function, and access those as properties of instance objects created using the 'new' method.

var SpaceAge = function(seconds) {
  this.seconds = seconds;
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
  this.allPlanets = function() {
    var arr = [];
    for (var prop in this.earthToOtherPlanets) {
      arr.push(prop + " years: " + this.earthToOtherPlanets[prop] / this.yearsOnEarth);
    }
    return arr;
  };

  this.yearsOnPlanet = function(planet) {
    var yearsOnEarth = this.yearsOnEarth;
    var ratio = this.earthToOtherPlanets[planet];
    var yearsOnOtherPlanet = yearsOnEarth / ratio;
    return yearsOnOtherPlanet;
  };
};

// Create a new object by calling the 'new' method on the SpaceAge constructor, passing in a number of seconds as an argument.
var age = new SpaceAge(31557600);

// Call methods defined in our constructor on that object.
console.log(age.yearsOnEarth);
console.log(age.yearsOnPlanet("Mercury"));
console.log(age.allPlanets);
