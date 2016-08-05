// Forgot how old you are? Calculate it!
//
// Write a function named calculateAge that:
//
// Takes 2 arguments: birth year, current year.
// Calculates the 2 possible ages based on those years.
// Outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentYear = 2016;
var birthYear = 1989;

var calculateAge = function( birthYear ){
  var age = birthYear - currentYear;
  var possibleAge = age-1 ;
  console.log("You are either" + age +  "or" + possibleAge);
};
calculateAge(1990);
calculateAge(1995);
calculateAge(1970);


var calculateAge = function( birthYear , currentYear ){
  var age = birthYear - currentYear;
  var possibleAge = age-1 ;
  var result = "You are either" + age +  "or" + possibleAge;

  return result;
}
calculateAge(birthYear , currentYear);
