var lineN = [" N.Times Squre", " N.34th", " N.28th", " N.23rd",
" N.Union Squ.", " N.8th"];
var lineL = [" L.8th", " L.6th", " L.Union Squ.", " L.3rd", " L.1st"];
var line6 = [" 6.Grand Central", " 6.33rd", " 6.28th", " 6.23rd",
" 6.Union Squ."," 6.Astor Place"];

var startLine = eval(prompt(" Give me your start line lover "));
var startSta = " " + prompt(" Give me your start station you cunt ");
var endLine = eval(prompt(" Give me your end line please "));
var endSta = " " + prompt(" Gve me your fucking end station!! ");

var uniStaS = (" " + startSta.charAt(1) + "." + "Union Squ.")
var uniStaE = (" " + endSta.charAt(1) + "." + "Union Squ.")
    //No of stops neg???

var noA = ((startLine.indexOf(startSta))-(startLine.indexOf(uniStaS)));
var noB = ((endLine.indexOf(endSta))-(endLine.indexOf(uniStaE)));

    //No of stops positive
var tripA = (Math.abs(noA));
var tripB = (Math.abs(noB));

    //Total no of stops
var noOfStops = (" This trip will take you " + (tripA+tripB) + " stops. ");

    //Give list of A stations
var tripASta = function() {
  if (noA<0) {
    return (startLine.slice((startLine.indexOf(startSta)), ((startLine.indexOf(uniStaS))+1)));
  } else if (noA>0) {
    return (startLine.slice((startLine.indexOf(uniStaS)), ((startLine.indexOf(startSta))+1)));
  }
};
    //Give list of B stations
var tripBSta = function() {
  if (noB<0) {
return (endLine.slice((endLine.indexOf(endSta)), (endLine.indexOf(uniStaE))));
  } else if (noB>0) {
return (endLine.slice((endLine.indexOf(uniStaE)), (endLine.indexOf(endSta))+1));
  }
};
    //Gives list for A + B but together....

 var tripList = function () {
   var a = null;
   var b = null;
   if (noA<0) {
     a = (tripASta())
   } else if (noA>0) {
     a = (tripASta().reverse())
   }
   if (noB>0) {
     b = (tripBSta())
   } else if (noB<0) {
     b = (tripBSta().reverse())
   }

   if (b[0].substr(b[0].length-3) === "qu.") {
     b.splice(0,1);
   }

   return a + b;

};

 var planTrip = function() {
    console.log(noOfStops);
    console.log(" The stations you will pass through are " + tripList()
      + " NOTE: Remember to change at Union Square. ");
 };

planTrip();
