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
   width: 6
 };
// var isSquare = function () {
//   var result1 = rectangle.length ;
//   var result2 = rectangle.width ;
//   if(result1 === result2){
//     console.log(" It is a square");
//   }else{
//     console.log(" It is not a square");
//   }
//
// };
// isSquare();


// var areaOfRectangle = function (){
//   var result1 = rectangle.length ;
//   var result2 = rectangle.width ;
//   var area = (result1 * result2) ;
//   console.log( area );
//   return area;
// };
// areaOfRectangle();


var perimeterOfRectangle = function (){
  var result1 = rectangle.length ;
  var result2 = rectangle.width ;
  var perimeter = (2 * (result1 + result2)) ;
  console.log( perimeter );
  return perimeter;
};
perimeterOfRectangle();
