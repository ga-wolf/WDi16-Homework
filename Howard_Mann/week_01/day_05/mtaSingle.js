console.log("Week_01 MTA weekend homework");

// Note: Preliminary workings to work on single

var A = {
  name: "lineA",
  stops: ["a","b","c","d","X","e","f"]
};

var B = {
  name: "lineB",
  stops: ["g","h","i","X","j","k","l"]
};

// Function for single subway line travel back and forth
var singleLine = function(arr, start, end) {
  var stopsArr = [];
  var count = 0;

  var startIndex = arr.stops.indexOf(start);
  var endIndex = arr.stops.indexOf(end);


  if (startIndex < endIndex) {
    var length = endIndex - startIndex;
    for (var i=startIndex+1; i<=endIndex; i+=1) {
      stopsArr.push(arr.stops[i]);
      count++;
    }
  } else if (startIndex > endIndex) {
    for (var i=startIndex-1; i>=endIndex;i-=1) {
      stopsArr.push(arr.stops[i]);
      count++;
    }
  }

  console.log("You must travel through the following stops on "+arr["name"]+" line: "+stopsArr.join(' , ')+".");
  console.log(count+" stops in total.");
};

singleLine(A,"a","f");
singleLine(A,"b","e");
singleLine(B,"g","l");
singleLine(B,"k","i");
