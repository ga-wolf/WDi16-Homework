// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

function isEquilateral (triangle){

      if (triangle.sideC ===triangle.sideB && triangle.sideB===triangle.sideA
        && triangle.sideC ===triangle.sideA) {
      console.log("Yay!! its Equilateral Triangle")
      }
      else {
        console.log("Its not a Equilateral");
      }

  };

isEquilateral (triangle);

function isIsosceles(triangle){

      if (triangle.sideC ===triangle.sideB || triangle.sideB===triangle.sideA ||triangle.sideC ===triangle.sideA)
     {
      console.log("Yay!! its is Isosceles Triangle")
      }
      else {
        console.log("Its not a Isosceles");
      }

  };

isIsosceles(triangle);
