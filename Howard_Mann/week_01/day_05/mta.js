console.log("Week_01 MTA weekend homework");

//Note: First attempt with separate objects and one function

// Create objects for each subway line with name string and array of stops
var N = {
  name: "N",
  stops: ["Times Square","34th","28th","23rd","Union Square","8th"]
};

var L = {
  name: "L",
  stops: ["8th","6th","Union Square","3rd","1st"]
};

var Six = {
  name: "6",
  stops: ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
};

// Create planTrip function expression taking in arguments of starting array and stop and ending array and stop
var planTrip = function(arr1, start1, arr2, end2) {

  // Set up array and counter to store and count stops. One array for storing stops on the first line and another array for stops on the continued line journey
  var stopsArr = [];
  var stopsArrB = [];
  var count = 0;

  // Store index position of start, end and Union square stops for starting and ending line
  var startIndex = arr1["stops"].indexOf(start1);
  var endIndex = arr2["stops"].indexOf(end2);
  var startX = arr1["stops"].indexOf("Union Square");
  var endX = arr2["stops"].indexOf("Union Square");

  // Store console log messages to minimise duplication
  var arr1Name = arr1["name"]+" line: ";
  var arr2Name = arr2["name"]+" line: ";
  var msgFirst = "You must travel through the following stops on the ";
  var msgSecond = "Your journey continues through the following stops: ";

  //Console log instructions (not vital for logic)
  console.log("Start "+arr1Name+start1+" -> End "+arr2Name+end2);

  // If subway lines are same execute code below
  if (arr1 === arr2) {

    // Check which direction to go along subway line and count and store stops
    if (startIndex < endIndex) {
      for (var i=startIndex+1; i<=endIndex; i+=1) {
        stopsArr.push(arr1["stops"][i]);
        count++;
      }
    } else if (startIndex > endIndex) {
      for (var i=startIndex-1; i>=endIndex; i-=1) {
        stopsArr.push(arr1["stops"][i]);
        count++;
      }
    }
    // Console log line name and stop count and names
    console.log(msgFirst+arr1Name+stopsArr.join(' , ')+".");
    console.log(count+" stops in total.");

  // If subway lines are different execute code below
  } else if (arr1 !== arr2) {

    // Check which direction to go along first subway line and count and store stops
    if (startIndex < startX) {
      for (var i=startIndex+1; i<=startX;i+=1) {
        stopsArr.push(arr1["stops"][i]);
        count++;
      }
    } else if (startIndex > startX) {
      for (var i=startIndex-1; i>=startX;i-=1) {
        stopsArr.push(arr1["stops"][i]);
        count++;
      }
    }
    // Console log message and join array of stops on first subway line
    console.log(msgFirst+arr1Name+stopsArr.join(', ')+'.');
    console.log("Change at Union Square.");

    // Check which direction to go along second subway line and count and store stops in second array
    if (endIndex > endX ) {
      for (var j=endX+1; j<=endIndex; j+=1) {
        stopsArrB.push(arr2["stops"][j]);
        count++;
      }
    } else if (endIndex < endX) {
      for (var j=endX-1; j>=endIndex; j-=1) {
        stopsArrB.push(arr2["stops"][j]);
        count++;
      }
    }
    // Console log message and output count of total stops
    console.log(msgSecond+stopsArrB.join(', ')+'.');
    console.log(count+' stops in total.');
  }
};

// Display variables in console
console.log("\nSetting up MTA subway lines:");
console.log(N["name"]);
console.log(N["stops"]);
console.log(L["name"]);
console.log(L["stops"]);
console.log(Six["name"]);
console.log(Six["stops"]);

// Execute and test code
console.log("\nTesting planTrip function: `planTrip(line1, start, line2, end);`");
planTrip(N,"Times Square",Six,"33rd");
planTrip(N,"Times Square",Six,"Astor Place");
planTrip(N,"Times Square",N,"Union Square");
planTrip(Six,"28th",N,"34th");
planTrip(L,"1st",Six,"Grand Central");
