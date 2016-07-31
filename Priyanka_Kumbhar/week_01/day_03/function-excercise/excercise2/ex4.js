// Write a function called areaOfCircle that will take one argument (the radius),
//  calculate the area based on that, and return the result. It should also log a string like
// "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function ( radius ){
var output = (Math.PI) * (Math.pow( radius , 2));
console.log( "The area for a circle with radius " + radius +" is " + (output).toFixed(2) );
return output;
};
 areaOfCircle( 6 );
