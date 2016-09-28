console.log("Week_01 MTA weekend homework refactor");

// Second attempt using single object literal notation and three functions, plaTrip which calls on goForward and goBackward functions

// CREATE OBJECT: Subway
var Subway = {
  "N": ["Times Square","34th","28th","23rd","Union Square","8th"],
  "L": ["8th","6th","Union Square","3rd","1st"],
  "6": ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
};

// CREATE FUNCTION: planTrip
var planTrip = function(startLine, startStop, endLine, endStop) {
  
  // Create variables for indexOf stops and Union Square
  var startIndex = Subway[startLine].indexOf(startStop);
  var endIndex = Subway[endLine].indexOf(endStop);
  var startUnion = Subway[startLine].indexOf("Union Square");
  var endUnion = Subway[endLine].indexOf("Union Square");

  // Create variable to store properties
  for (var prop in Subway) {
    var startName = startLine;
    var endLine = endLine;
  }

  // If on same subway line. No changing
  if (Subway[startLine] === Subway[endLine]) {
    if (startIndex < endIndex) {
      var stopsArr = goForward(startLine, startStop, endStop);
    } else if (startIndex > endIndex) {
      var stopsArr = goBackward(startLine, startStop, endStop);
    }
    console.log("You must travel through the following stops on the the "+startName+" line: "+stopsArr.join(', '));
    console.log(stopsArr.length+" stops in total.");
  }

  // If on different subway line, change at Union Square
  if (Subway[startLine] !== Subway[endLine]) {
    if (startIndex < startUnion) {
      var stopsArr = goForward(startLine,startStop,"Union Square");
    }
     else if (startIndex > startUnion) {
      var stopsArr = goForward(startLine,startStop,"Union Square");
    }
    console.log("You must travel through the following stops on the the "+startName+" line: "+stopsArr.join(', ')+".");
    console.log("Change at Union Square.");

    // Create variable to store number of stops on first line
    var count = stopsArr.length;

    if (endIndex < endUnion) {
      var stopsArr = goBackward(endLine, "Union Square", endStop);
    }
    else if (endIndex > endUnion) {
      var stopsArr = goForward(endLine, "Union Square", endStop);
    }
    console.log("Your journey continues through the following stops on the "+endLine+" line: "+stopsArr+".");
    count+=stopsArr.length;
    console.log(count+" stops in total.");
  }

};

// CREATE FUNCTION: goForward
var goForward = function(startLine, startStop, endStop) {
  var arr = [];
  var startIndex = Subway[startLine].indexOf(startStop);
  var endIndex = Subway[startLine].indexOf(endStop);

  for (var i = startIndex+1; i<=endIndex; i+=1) {
    arr.push(Subway[startLine][i]);
  }
  return arr;
};

// CREATE FUNCTION: goBackward
var goBackward = function(startLine, startStop, endStop) {
  var arr = [];
  var startIndex = Subway[startLine].indexOf(startStop);
  var endIndex = Subway[startLine].indexOf(endStop);

  for (var i = startIndex-1; i>=endIndex; i-=1) {
    arr.push(Subway[startLine][i]);
  }
  return arr;
};

// RUN JAVASCRIPT
console.log("\nDifferent station test:");
planTrip("N","Times Square","6","33rd");
// planTrip("N","Times Square","6","Astor Place");
// planTrip("6","28th","N","34th");
// planTrip("L","1st","6","Grand Central");
console.log("\nSame station test:");
planTrip("N","Times Square","N","Union Square");
