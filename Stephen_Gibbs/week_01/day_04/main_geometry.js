// Given the following a rectangle object like the one below, write the
// following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

if (rectangle.length===rectangle.width){
  console.log("this is a square");
} else {
  console.log("this is a rectangle");
};
var area = rectangle.length * rectangle.width;
console.log("area is " + area + " square of units of measurement");

var perimeter = ((2*rectangle.length) + (2*rectangle.width));
console.log("the perimeter is " + perimeter + " long");


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the
// following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}

if (triangle.sideA===triangle.sideB&&triangle.sideB===triangle.sideC) {
  console.log("this is an equilateral triangle");
} else {
  console.log("this is not an equilateral triangle");
};

if (triangle.sideA===triangle.sideB||triangle.sideB===triangle.sideC) {
  console.log("this is an isosceles triangle");
} else {
  console.log("this is not an isosceles triangle");
};

var s = (((triangle.sideA + triangle.sideB + triangle.sideC)) / 2);
var areaTriangleStep1 = (s*(s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC));
var areaTriangleFinal = Math.sqrt(areaTriangleStep1);
console.log(areaTriangleFinal);
