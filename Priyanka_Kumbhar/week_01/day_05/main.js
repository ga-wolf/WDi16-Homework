var lineN  = [
   "Times Square",
     "Thirty Fourth",
     "TwentyEigth",
     "Twenty Third",
     "Union Square",
     "eigthth"

];
var lineL  = [
   "eigthth",
     "Sixth",
     "Union Square",
     "Third",
   " First"
];
var line6  = [
   "Grand Central",
     "Thirty Third",
     "Twenty eighth",
     "Twenty Third",
     "Union Square",
     "Astor Place"

];

var allLines = {
  "lineN":["Times Square","Thirty Fourth", "TwentyEigth","Twenty Third", " Union Square", "eigthth"],
  "lineL":["eigthth","Sixth","Union Square","Third", " First"],
  "line6":["Grand Central","Thirty Third","Twenty eighth", "Twenty Third", "Union Square","Astor Place"]
};


 //var startLine = " lineN ";
// var startStop = " TwentyEigth ";
// var endStop = " eigthth ";
var planSingleLineTrip = function (startLine1 , startStop , endStop){

  var startLine = allLines[startLine1];
  var stopsInBetween =[];
  var startStopIndex = startLine.indexOf(startStop);

  var endStopIndex = startLine.indexOf(endStop);

  if(startStopIndex < endStopIndex){
  for( var i = startStopIndex+1; i< endStopIndex; i++){
    stopsInBetween.push(startLine[i]);
    //console.log(startLine[i]);
  }
}else{
   for( var i = startStopIndex-1; i> endStopIndex; i--){
     stopsInBetween.push(startLine[i]);
    //console.log(startLine[i]);
  }
}
//console.log("Your must travel through the following stops on the " + startLine1 +" : " + stopsInBetween );
return stopsInBetween;
};

var planTrip = function(startLine1 , startStop, endline , endStop  ){
  if(startLine1 === endline){
    var singleTripStops = planSingleLineTrip(startLine1 , startStop , endStop );
    console.log("Your must travel through the following stops on the " + startLine1 +" : " + singleTripStops );
  }else{
    var firstLinesStops = planSingleLineTrip(startLine1 , startStop ,"Union Square");
    var secondLinesStops = planSingleLineTrip(endline , "Union Square", endStop);
    console.log ("Your must travel through the following stops on the " +  startLine1 + ": " + firstLinesStops + " Change at Union Square. Your journey continues through " + endline + " the following stops:" + secondLinesStops );
    console.log("total stops in between "  +(firstLinesStops.length + secondLinesStops.length));
  }
};
//planTrip("lineL", "eigthth" , "line6" , "Thirty Third");
planTrip("lineL", "eigthth" , "lineL" , "Third");
