// Write a function named tellFortune that

// Takes 4 arguments: number of children, partner s name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// var number = 2;
// var partner = "shiva";
// var geographicLocation = "wollicreek";
// var jobTitle = "Developer";
var details = function ( number , partner , jobTitle , geographicLocation){
  console.log("You will be a" +" "+  jobTitle  +  " in "+ geographicLocation + " and married to "+ partner + " with "+ number +" kids.")
};

details( 3 , "prem" , "tester" ," Sydney ");
details( 4 , "dhanu", "teacher" , " wollicreek");
details( 1 , "ravi" , "chef" , "Pune ");

//alternate way
var a = prompt(" How many kids?");
var b = prompt (" what is ur partner s name?");
var c = prompt (" where do u live? ");
details(a , b, c, d);
