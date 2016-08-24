// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
 var triangle = {
   sideA: 3,
   sideB: 3,
  sideC: 3
 };

var isEquilateral = function () {
  var result1 = triangle.sideA ;
 var result2 = triangle.sideB ;
 var result3 = triangle.sideC ;

  if((result1 === result2) && (result2 === result3)){
    console.log(" the triangle is equilateral ");
  }else{
    console.log(" the triangle is not equilateral ");
  }
};
isEquilateral();
