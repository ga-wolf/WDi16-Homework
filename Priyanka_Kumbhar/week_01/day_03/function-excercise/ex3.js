// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// Takes 2 arguments: age, amount per day.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


var age = 25 ;
var maxAge = 66 ;
var amountPerDay = 10 ;

var calculateSupply = function( amountPerDay ){
  var amount = (((maxAge - age)* 365) * amountPerDay );
  console.log("You will need " + Math.round( amount ) + " to last you until the ripe old age of " + maxAge)
};

calculateSupply( 13.5 );
calculateSupply( 9.2 );
calculateSupply( 6.4 );
