// Activity
//
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at
 // and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points.
// (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];              //The N Line
var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];                                 //The L line
var sixthLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]; //The 6 Line

var planTrip = function (startLine, startStation, endLine, endStation) {    //Takes in the starting line and station and the destination line and station

if (startLine === "N" && endLine === "N"){    //If the start and end line is the N line
  var startStationIndex = nLine.indexOf (startStation); //get the index of the start station
  var endStationIndex = nLine.indexOf (endStation);   //get the index of the destination station
  if (startStationIndex<endStationIndex){   // work out if the trip is "forward" along the line
    var message = nLine.slice(startStationIndex, (endStationIndex + 1));  //remove the unwanted stations
    console.log("You must travel through the following stops on the N line: " + message.join (', ')); //print the station list with the remaining stations in 1 line
  } else if (startStationIndex>endStationIndex){  //if the trip is "backwards" along the line
    var message = nLine.slice(endStationIndex , (startStationIndex+1)); //remove unwanted stations
    var message2 = message.reverse(); //reverse the order of the stations
    console.log("You must travel through the following stops on the N line: " + message2.join (', '));  //print the travel list on 1 line
  } else if (startStationIndex=endStationIndex) {
    console.log("These are the same station");  //if the start and destination stations are the same
  }
} else if (startLine === "L" && endLine === "L"){   //if the start and end are both the L line
    var startStationIndex = lLine.indexOf (startStation);
    var endStationIndex = lLine.indexOf (endStation);
    if (startStationIndex<endStationIndex){
      var message = lLine.slice(startStationIndex, (endStationIndex + 1));
      console.log("You must travel through the following stops on the L line: " + message.join (', '));
    } else if (startStationIndex>endStationIndex){
      var message = lLine.slice(endStationIndex , (startStationIndex+1));
      var message2 = message.reverse();
      console.log("You must travel through the following stops on the L line: " + message2.join (', '));
    } else if (startStationIndex=endStationIndex){
      console.log("These are the same station");
    }
  } else if (startLine === "6" && endLine === "6"){   //if the start and end are both the 6 line
    var startStationIndex = sixthLine.indexOf (startStation);
    var endStationIndex = sixthLine.indexOf (endStation);
    if (startStationIndex<endStationIndex){
      var message = sixthLine.slice(startStationIndex, (endStationIndex + 1));
      console.log("You must travel through the following stops on the L line: " + message.join (', '));
    } else if (startStationIndex>endStationIndex){
      var message = sixthLine.slice(endStationIndex , (startStationIndex+1));
      var message2 = message.reverse();
      console.log("You must travel through the following stops on the L line: " + message2.join (', '));
    } else if (startStationIndex=endStationIndex){
      console.log("These are the same station");
    }

  } else if ( startLine === "N" && endLine === "L") {    //if the start is on the N line and the end is on the L line
    var startStationIndex = nLine.indexOf (startStation); //get the index of the starting station
    var endStationIndex = lLine.indexOf (endStation);     //get the index of the destination station
    if (startStationIndex < (nLine.indexOf ("Union Square"))) { //find out if the starting station is before Union Square
      var message = nLine.slice(startStationIndex, nLine.indexOf("Union Square" - 1));  //takes the stations bewteen the starting station and Union square
      console.log("You must travel through the following stops on the N line: " + message.join (', ')); //displays all stations on one line
    } else {                                                                  //If the station is after Union Square
      var message = nLine.slice(nLine.indexOf ("Union Square"), startStationIndex + 1); //takes the stations between the start and union square
      var message2 = message.reverse();                                   //this reverses the station order
      console.log("You must travel through the following stops on the N line: " + message2.join (', '));  //lists the stations to Union Square in the new order
    }
  console.log("Change at Union Square");  //adds a not to change lines at Union Square
    if (endStationIndex < 3) {    //for some reason I have to use the Index number for the L line...lLine.indexOf("Union Square") gives me odd results
      var message = lLine.slice((endStationIndex), 2);  //gives the stations between the destination and Union Square
      var message2 = message.reverse();           //reverses the station order so it will start at Union Square
      console.log("Your Journey continues on the L line, through the following stops: " + message2.join (', ')); //prints out the final leg of the trip
    } else {
      var message = lLine.slice(3, endStationIndex +1);   //gives the stations between the destination and Union Square
      console.log("Your Journey continues on the L line, through the following stops: " + message.join (', '));  //prints out the final leg of the trip
    }

  } else if ( startLine === "N" && endLine === "6") {    //if the start is on the N line and the end is on the 6 line
    var startStationIndex = nLine.indexOf (startStation);
    var endStationIndex = sixthLine.indexOf (endStation);
    if (startStationIndex < (nLine.indexOf ("Union Square"))) {
      var message = nLine.slice(startStationIndex, nLine.indexOf("Union Square" - 1));
      console.log("You must travel through the following stops on the N line: " + message.join (', '));
    } else {
      var message = nLine.slice(nLine.indexOf ("Union Square"), startStationIndex + 1);
      var message2 = message.reverse();
      console.log("You must travel through the following stops on the N line: " + message2.join (', '));
    }
  console.log("Change at Union Square");
    if (endStationIndex < sixthLine.indexOf ("Union Square")) {
      var message = sixthLine.slice((endStationIndex), sixthLine.indexOf ("Union Square"));
      var message2 = message.reverse();
      console.log("Your Journey continues on the 6 line, through the following stops: " + message2.join (', '));
    } else {
      var message = sixthLine.slice(sixthLine.indexOf ("Union Square")+1, endStationIndex +1);
      console.log("Your Journey continues on the 6 line, through the following stops: " + message.join (', '));
    }

  } else if ( startLine === "6" && endLine === "N") {    //if the start is on the 6 line and the end is on the N line
    var startStationIndex = sixthLine.indexOf (startStation);    console.log(startStationIndex);
    var endStationIndex = nLine.indexOf (endStation);    console.log(endStationIndex);
    if (startStationIndex < (sixthLine.indexOf ("Union Square"))) {
      var message = sixthLine.slice(startStationIndex, sixthLine.indexOf("Union Square" - 1));
      console.log("You must travel through the following stops on the 6 line: " + message.join (', '));
    } else {
      var message = sixthLine.slice(sixthLine.indexOf ("Union Square"), startStationIndex + 1);
      var message2 = message.reverse();
      console.log("You must travel through the following stops on the 6 line: " + message2.join (', '));
    }
  console.log("Change at Union Square");
    if (endStationIndex < nLine.indexOf ("Union Square")) {
      var message = nLine.slice((endStationIndex), nLine.indexOf ("Union Square"));
      var message2 = message.reverse();
      console.log("Your Journey continues on the N line, through the following stops: " + message2.join (', '));
    } else {
      var message = nLine.slice(nLine.indexOf ("Union Square")+1, endStationIndex +1);
      console.log("Your Journey continues on the N line, through the following stops: " + message.join (', '));
    }

  } else if ( startLine === "6" && endLine === "L") {    //if the start is on the 6 line and the end is on the L line
    var startStationIndex = sixthLine.indexOf (startStation);
    var endStationIndex = lLine.indexOf (endStation);
    if (startStationIndex < (sixthLine.indexOf ("Union Square"))) {
      var message = sixthLine.slice(startStationIndex, sixthLine.indexOf("Union Square" - 1));
      console.log("You must travel through the following stops on the 6 line: " + message.join (', '));
    } else {
      var message = sixthLine.slice(sixthLine.indexOf ("Union Square"), startStationIndex + 1);
      var message2 = message.reverse();
      console.log("You must travel through the following stops on the 6 line: " + message2.join (', '));
    }
  console.log("Change at Union Square");
    if (endStationIndex < 3) {
      var message = lLine.slice((endStationIndex), 2);
      var message2 = message.reverse();
      console.log("Your Journey continues on the L line, through the following stops: " + message2.join (', '));
    } else {
      var message = lLine.slice(3, endStationIndex +1);
      console.log("Your Journey continues on the L line, through the following stops: " + message.join (', '));
    }

  } else if ( startLine === "L" && endLine === "N") {    //if the start is on the L line and the end is on the N line
      var startStationIndex = lLine.indexOf (startStation);
      var endStationIndex = nLine.indexOf (endStation);
      if (startStationIndex < 3) {
        var message = lLine.slice(startStationIndex, 3);
        console.log("You must travel through the following stops on the L line: " + message.join (', '));
      } else {
        var message = lLine.slice(lLine.indexOf ("Union Square"), startStationIndex + 1);
        var message2 = message.reverse();
        console.log("You must travel through the following stops on the L line: " + message2.join (', '));
      }
    console.log("Change at Union Square");
      if (endStationIndex < nLine.indexOf ("Union Square")) {
        var message = nLine.slice((endStationIndex), nLine.indexOf ("Union Square") );
        var message2 = message.reverse();
        console.log("Your Journey continues on the N line, through the following stops: " + message2.join (', '));
      } else {
        var message = nLine.slice(nLine.indexOf ("Union Square") +1, endStationIndex +1);
        console.log("Your Journey continues on the N line, through the following stops: " + message.join (', '));
      }

  } else if ( startLine === "L" && endLine === "6") {    //if the start is on the L line and the end is on the 6 line
      var startStationIndex = lLine.indexOf (startStation);
      var endStationIndex = sixthLine.indexOf (endStation);
      if (startStationIndex < 3) {
        var message = lLine.slice(startStationIndex, 3);
        console.log("You must travel through the following stops on the L line: " + message.join (', '));
      } else {
        var message = lLine.slice(lLine.indexOf ("Union Square"), startStationIndex + 1);
        var message2 = message.reverse();
        console.log("You must travel through the following stops on the L line: " + message2.join (', '));
      }
    console.log("Change at Union Square");
      if (endStationIndex < sixthLine.indexOf ("Union Square")) {
        var message = sixthLine.slice((endStationIndex), sixthLine.indexOf ("Union Square") );
        var message2 = message.reverse();
        console.log("Your Journey continues on the 6 line, through the following stops: " + message2.join (', '));
      } else {
        var message = sixthLine.slice(sixthLine.indexOf ("Union Square") +1, endStationIndex +1);
        console.log("Your Journey continues on the 6 line, through the following stops: " + message.join (', '));
      }
    }
};
planTrip ("L","1st","6","33rd");
