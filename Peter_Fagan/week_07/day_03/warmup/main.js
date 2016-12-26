
// Badgers solution (I accidently did mine in Ruby...badly)

var spaceAge = function(seconds) {
  this.seconds = seconds;
  this.yearsOnEarth = seconds / 31557600;
  this.earthYears = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };
  this.allPlanets = function() {
    for (var prop in this.earthYears) {
      console.log(prop + " years: " + this.earthYears[prop] / this.yearsOnEarth);
    }
    return arr;
  };

  this.yearsOnPlanet = function (planet) {
    var yearsOnEarth = this.yearsOnEarth;
    var ratio = this.earthYears[planet];
    var YearsOnOtherPlanet = yearsOnEarth / ratio;
    return yearsOnPlanet;
  }
};

var age = new spaceAge(1000333);
console.log(age.allPlanets());
