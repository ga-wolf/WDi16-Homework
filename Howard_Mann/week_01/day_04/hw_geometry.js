console.log("Homework: Geometry Function Lab");
/*
### Part 1, Rectangle
Given the following a `rectangle` object like the one below, write the following functions:
*/

var rectangle = {
  length: 4,
  width: 4
};

var length = Object.keys(rectangle)[0];
var width = Object.keys(rectangle)[1];

//* isSquare - Returns whether the rectangle is a square or not
console.log("\nPart 1: isSquare:");
var isSquare = function(rectangle) {
  if (rectangle[length]===rectangle[width]) {
    return true;
  } else {
    return false;
  }
};
console.log(isSquare(rectangle));

//* area - Returns the area of the rectangle
console.log("\nPart 1: area:");
  var area = function(rectangle) {
  return rectangle[length]*rectangle[width];
};
console.log(area(rectangle));

//* perimeter - Returns the perimeter of the rectangle
console.log("\nPart 1: perimeter:");
  var perimeter = function(rectangle) {
  return rectangle[length]*4+rectangle[width]*2;
};
console.log(perimeter(rectangle));


/*
### Part 2, Triangle
Given the following a `triangle` object like the one below, write the following functions:
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var sideA = Object.keys(triangle)[0];
var sideB = Object.keys(triangle)[1];
var sideC = Object.keys(triangle)[2];

//* isEquilateral - Returns whether the triangle is equilateral or not
console.log("\nPart 2: isEquilateral:");
var isEquilateral = function(triangle) {
  if (triangle[sideA]===triangle[sideB] && triangle[sideB]===triangle[sideC]) {
    return true;
  } else {
    return false;
  }
};
console.log(isEquilateral(triangle));

//* isIsosceles - Returns whether the triangle is isosceles or not
console.log("\nPart 2: isIsosceles:");
var isIsosceles = function(triangle) {
  if (triangle[sideA]===triangle[sideB] || triangle[sideB]===triangle[sideC]|| triangle[sideA]===triangle[sideC]){
    return true;
  } else {
    return false;
  }
};
console.log(isIsosceles(triangle));

//* isObtuse - Returns whether the triangle is obtuse or not
console.log("\nPart 2: isObtuse:");
var isObtuse = function(triangle) {
  if (triangle[sideA]!==triangle[sideB] && triangle[sideB]!==triangle[sideC] && triangle[sideA]!==triangle[sideC]){
    return true;
  } else {
    return false;
  }
};
console.log(isObtuse(triangle));


//* area - Returns the area of the Triangle
console.log("\nPart 2: area:");

var area = function(triangle) {
  var perimeter = (triangle[sideA]+triangle[sideB]+triangle[sideC])/2;
  var area = Math.sqrt(perimeter*((perimeter-triangle[sideA])*(perimeter-triangle[sideB])*(perimeter-triangle[sideC])));
  return area;
};

console.log(area(triangle));
