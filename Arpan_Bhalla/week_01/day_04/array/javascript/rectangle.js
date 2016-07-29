// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following
// functions:
//
// isSquare - Returns whether the rectangle is a square or not

var rectangle = {length:12,width:8};
function isSquare (rectangle){
 if (rectangle.length === rectangle.width){
   console.log("Wow its Square");
 }
 else{
   console.log("Sorry its not square");
}



// area - Returns the area of the rectangle


 var solution = (rectangle.length * rectangle.width)
   console.log("Area of rectangle is "+ solution);



// perimeter - Returns the perimeter of the rectangle

 var solutionPerimeter = (2 *(rectangle.length + rectangle.width))
   console.log("Perimeter of rectangle is "+ solutionPerimeter);

};
isSquare (rectangle);
// var rectangle = {
//   length: 4,
//   width: 4
// };
