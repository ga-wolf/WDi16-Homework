
/*
console.log("Hello there");
[ 'a', 'b', 'c' ].forEach( function (elem, index) {
    console.log(index + '. ' + elem);
});
// => 0. a
// => 1. b
// => 2. c
*/

//   MTA ASSIGNMENT
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

//// end of final test


//// this is the final final test
//// put in if else statement - if same line run a if different lines run b
// change variables startLine, finalLine, startStation1, finalStation1,
// startStation2 and finalStation2.  Station must be on list of the line for logic
//to hold.



// var message = document.getElementById("startLine");
// console.log(message);
// var message2 = document.getElementById("test");
// console.log(message2);
var message3=document.getElementById("chooseLine");
var message4 =message3.options[message3.selectedIndex].text;


console.log(" ");
console.log(" Final Version - handles same line and change of lines ");

var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
var lineL = ["8th","6th","Union Square","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];

var startLine = lineN;
var finalLine = lineN;
var startStation1 = "Times Square";
var finalStation1 = "Union Square";
var startStation2 = "Union Square";
var finalStation2 = "8th";


// for different lines, it runs from start station to union square on line 1 THEN
// from union square to end station on final line.  i increments if start index is
// lower than final index on a line or decrements if the start index is lower so it
// can go forwards or backwards

//runs this if lines are different
//Part 1 is first line from start station to Union square
if (startLine!==finalLine){
    console.log("stations on starting line are " + startLine);
    console.log("stations on final line are " + finalLine);
    var numOfStartStation1 = startLine.indexOf(startStation1);
    var numOfFinalStation1 = startLine.indexOf(finalStation1);
    console.log("index of start station is " + numOfStartStation1, " index of end station is " + numOfFinalStation1);
    var numberOfStops = Math.abs(numOfFinalStation1 - numOfStartStation1);
    console.log("number of stops is  " + numberOfStops);
    var i = numOfStartStation1;

// if index of start station is less than index of final station on first line, i increments up
    if (numOfStartStation1<numOfFinalStation1) {
    console.log("You start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
    for (var i = (numOfStartStation1 +1) ; i<numOfFinalStation1; i++){
      console.log(startLine[i]);
    }
    console.log("and you change lines at " + finalStation1);

// if index of start station is greater than index of final station on first line, i decrements down
      } else  {
          console.log("You start your journey at " + startStation1 + " , it has " + numberOfStops + " stops, passing through");
          for (var i = (numOfStartStation1 - 1) ; i>numOfFinalStation1; i--){
          console.log(startLine[i]);
  }
          console.log("and you change lines at " + finalStation1);
  };

// Part 2 is second line from Union square to final station

  var numOfStartStation2 = finalLine.indexOf(startStation2);
  var numOfFinalStation2 = finalLine.indexOf(finalStation2);
  //console.log(numOfStartStation2, numOfFinalStation2);
  var numberOfStops = Math.abs(numOfFinalStation2 - numOfStartStation2);
  //console.log(numberOfStops);
  var i = numOfStartStation2;

// if index of start station 2 is less than index of final station on second line, i increments up
  if (numOfStartStation2<numOfFinalStation2) {
    console.log("After changing at " + startStation2 + " there are " + numberOfStops + " stops, passing through");
    for (var i = (numOfStartStation2 +1) ; i<numOfFinalStation2; i++){
      console.log(finalLine[i]);
    }
    console.log("and you end your journey at " + finalStation2);

// if index of start station 2 is less than index of final station on second line, i decrements down
  }  else  {

  console.log("After changing at " + startStation1 + " there are " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation2 - 1) ; i>numOfFinalStation2; i--){
    console.log(finalLine[i]);
  }
  console.log("and you end your journey at " + finalStation2);
  };

// Runs this if the lines are not different - same logic but less wordy

} else {
      console.log("stations on starting line are " + startLine);
      console.log("stations on final line are " + finalLine);
      var numOfStartStation1 = startLine.indexOf(startStation1);
      var numOfFinalStation2 = startLine.indexOf(finalStation2);
      console.log("index of start station is " + numOfStartStation1, " index of end station is " + numOfFinalStation2);
      var numberOfStops = Math.abs(numOfFinalStation2 - numOfStartStation1);
      console.log("number of stops is  " + numberOfStops);
      var i = numOfStartStation1;
      if (numOfStartStation1<numOfFinalStation2) {
        console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
        for (var i = (numOfStartStation1 +1) ; i<numOfFinalStation2; i++){
          console.log(startLine[i]);
    }
      console.log("and you end your journey at " + finalStation2);

  }  else  {

      console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
      for (var i = (numOfStartStation1 - 1) ; i>numOfFinalStation2; i--){
        console.log(startLine[i]);
  }
      console.log("and you end your journey at " + finalStation2);

}

};














// var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
// var lineL = ["8th","6th","Union Square","3rd","1st"];
// var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
// console.log(lineN[0]);
// var startStation = "34th";
// var finalStation = "8th";
// var numOfStartStation = lineN.indexOf(startStation);
// var numOfFinalStation = lineN.indexOf(finalStation);
// console.log(numOfStartStation, numOfFinalStation);
// var numberOfStops = Math.abs(numOfFinalStation - numOfStartStation);
// console.log(numberOfStops);
// var i = numOfStartStation;
// console.log("Your start your journey at " + startStation + " and it has " + numberOfStops + " stops, passing through");
// for (var i = (numOfStartStation +1) ; i<numOfFinalStation; i++){
//   console.log(lineN[i]);
// }
// console.log("and you end your journey at " + finalStation);
//
//
// var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
// var lineL = ["8th","6th","Union Square","3rd","1st"];
// var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
// console.log(lineN[0]);
// var startStation = "8th";
// var finalStation = "34th";
// var numOfStartStation = lineN.indexOf(startStation);
// var numOfFinalStation = lineN.indexOf(finalStation);
// console.log(numOfStartStation, numOfFinalStation);
// var numberOfStops = Math.abs(numOfFinalStation - numOfStartStation);
// console.log(numberOfStops);
// var i = numOfStartStation;
// console.log("Your start your journey at " + startStation + " and it has " + numberOfStops + " stops, passing through");
// for (var i = (numOfStartStation - 1) ; i>numOfFinalStation; i--){
//   console.log(lineN[i]);
// }
// console.log("and you end your journey at " + finalStation);

// THIS WORKS FOR SAME LINE
/*
var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
var lineL = ["8th","6th","Union Square","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
console.log(lineN[0]);
var startStation = "Union Square";
var finalStation = "34th";
var numOfStartStation = lineN.indexOf(startStation);
var numOfFinalStation = lineN.indexOf(finalStation);
console.log(numOfStartStation, numOfFinalStation);
var numberOfStops = Math.abs(numOfFinalStation - numOfStartStation);
console.log(numberOfStops);
var i = numOfStartStation;
if (numOfStartStation<numOfFinalStation) {
  console.log("Your start your journey at " + startStation + " and it has " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation +1) ; i<numOfFinalStation; i++){
    console.log(lineN[i]);
  }
  console.log("and you end your journey at " + finalStation);


}  else  {

console.log("Your start your journey at " + startStation + " and it has " + numberOfStops + " stops, passing through");
for (var i = (numOfStartStation - 1) ; i>numOfFinalStation; i--){
  console.log(lineN[i]);
}
console.log("and you end your journey at " + finalStation);
};
*/






//FOR DIFFERENT LINES RUN THIS TO FROM START STATION TO UNION Square
//THEN COMMENCE NEW JOURNEY FROM UNION SQUARE TO FINAL DESTINATION
//ADD THEM TOGETHER

// NEED TO DEFINE LINES AND THEN STATION IN USER INPUT THEN HAVE LINES FEED
// INTO WHERE THE RED IS IE LINEN
/*
var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
var lineL = ["8th","6th","Union Square","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
console.log(lineN[0]);
var startStation1 = "Times Square";
var finalStation1 = "Union Square";
var numOfStartStation1 = lineN.indexOf(startStation1);
var numOfFinalStation1 = lineN.indexOf(finalStation1);
console.log(numOfStartStation1, numOfFinalStation1);
var numberOfStops = Math.abs(numOfFinalStation1 - numOfStartStation1);
console.log(numberOfStops);
var i = numOfStartStation1;
if (numOfStartStation1<numOfFinalStation1) {
  console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation1 +1) ; i<numOfFinalStation1; i++){
    console.log(lineN[i]);
  }
  console.log("and you end your journey at " + finalStation1);


}  else  {

console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
for (var i = (numOfStartStation1 - 1) ; i>numOfFinalStation1; i--){
  console.log(lineN[i]);
}
console.log("and you end your journey at " + finalStation1);
};


var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
var lineL = ["8th","6th","Union Square","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
console.log(lineN[0]);
var startStation2 = "Union Square";
var finalStation2 = "1st";
var numOfStartStation2 = lineL.indexOf(startStation2);
var numOfFinalStation2 = lineL.indexOf(finalStation2);
console.log(numOfStartStation2, numOfFinalStation2);
var numberOfStops = Math.abs(numOfFinalStation2 - numOfStartStation2);
console.log(numberOfStops);
var i = numOfStartStation2;
if (numOfStartStation2<numOfFinalStation2) {
  console.log("Your start your journey at " + startStation2 + " and it has " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation2 +1) ; i<numOfFinalStation2; i++){
    console.log(lineL[i]);
  }
  console.log("and you end your journey at " + finalStation2);


}  else  {

console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
for (var i = (numOfStartStation2 - 1) ; i>numOfFinalStation2; i--){
  console.log(lineL[i]);
}
console.log("and you end your journey at " + finalStation2);
};
*/

//// second last test - not as good as final version - does not cope with same lines - prototype for diff lines

console.log("      ");
console.log(" This is output for line changing; does not handle same line - see final version below for this  ");


var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
var lineL = ["8th","6th","Union Square","3rd","1st"];
var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];

var startLine = lineN;
var finalLine = lineL;
var startStation1 = "Times Square";
var finalStation1 = "Union Square";
var startStation2 = "Union Square";
var finalStation2 = "1st";

console.log("stations on starting line are " + startLine);
console.log("stations on final line are " + finalLine);
var numOfStartStation1 = startLine.indexOf(startStation1);
var numOfFinalStation1 = startLine.indexOf(finalStation1);
console.log("index of start station is " + numOfStartStation1, " index of end station is " + numOfFinalStation1);
var numberOfStops = Math.abs(numOfFinalStation1 - numOfStartStation1);
console.log(numberOfStops);
var i = numOfStartStation1;
if (numOfStartStation1<numOfFinalStation1) {
  console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation1 +1) ; i<numOfFinalStation1; i++){
    console.log(startLine[i]);
  }
  console.log("and you change lines at " + finalStation1);


}  else  {

console.log("Your start your journey at " + startStation1 + " and it has " + numberOfStops + " stops, passing through");
for (var i = (numOfStartStation1 - 1) ; i>numOfFinalStation1; i--){
  console.log(startLine[i]);
}
console.log("and you change lines at " + finalStation1);
};


//var lineN = ["Times Square", "34th", "28th","23rd","Union Square","8th"];
//var lineL = ["8th","6th","Union Square","3rd","1st"];
//var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];
//console.log(lineN[0]);
var numOfStartStation2 = finalLine.indexOf(startStation2);
var numOfFinalStation2 = finalLine.indexOf(finalStation2);
//console.log(numOfStartStation2, numOfFinalStation2);
var numberOfStops = Math.abs(numOfFinalStation2 - numOfStartStation2);
//console.log(numberOfStops);
var i = numOfStartStation2;
if (numOfStartStation2<numOfFinalStation2) {
  console.log("After changing at " + startStation2 + " there are " + numberOfStops + " stops, passing through");
  for (var i = (numOfStartStation2 +1) ; i<numOfFinalStation2; i++){
    console.log(finalLine[i]);
  }
  console.log("and you end your journey at " + finalStation2);


}  else  {

console.log("After changing at " + startStation1 + " there are " + numberOfStops + " stops, passing through");
for (var i = (numOfStartStation2 - 1) ; i>numOfFinalStation2; i--){
  console.log(finalLine[i]);
}
console.log("and you end your journey at " + finalStation2);
};
