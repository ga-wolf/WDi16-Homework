// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
  length: 4,
  width: 2
};

var isSquare = function (){
  if (rectangle.length % rectangle.width  === 1 ) {
    console.log("The rectangle is square");
  } else {
    console.log("The rectangle is not square");
  };
  var area = function (){
    console.log("The area is " + (rectangle.length * rectangle.width));
  }
  area();
  var perimeter = function (){
    console.log("The perimeter is " + rectangle.length*2 + rectangle.width*2);
  }
  perimeter();
}
isSquare();

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}
var isEquilateral = function(){
  if (triangle.sideA===triangle.sideB===triangle.sideC) {
    console.log("The triangle is equilateral!");
  }else {
    console.log("The triangle is not equilateral");
  }
};
var isIsosceles = function (){
  if (triangle.sideA == triangle.sideB || triangle.sideB == triangle.sideC || triangle.sideA == triangle.sideC) {
    console.log("The triangle is isosceles")
  }else {
    console.log("The triangle is not isosceles");
  }
}
var isObtuse = function (){
  if (triangle.sideA !== triangle.sideB && triangle.sideB !== triangle.sideC && triangle.sideA !== triangle.sideC) {
    console.log("The triangle is obtuse");
  }else {
    console.log("The triangle is not obtuse");
  }
}
isEquilateral();
isIsosceles();
isObtuse();
