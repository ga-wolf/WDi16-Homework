// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
// There are no other nucleotides.
// Make sure that you validate it has nucleotides!
// Find how many of each nucleotides are in a string that you pass in to a function
var nucleotides = ["A", "C", "G", "T", "U"];


// var geneSequence = function (sequence) {
//   var count = {};
//   var sequenceArray = sequence.toUpperCase().split('');
//   console.log(sequenceArray);
//
//   for (var i=0; i<sequenceArray.length; i +=1) {
//     for (var j=0; j<nucleotides.length; j+=1) {
//       if (nucleotides[j].includes(sequenceArray[i])){
//         console.log([i]+[j]);   //no idea how to increment each element in nucleotides for each instance in sequenceArray
//       }
//
//     }
//   }
//   return count;
// };
// geneSequence();

var nucleotideCounter = function (string, letter) {
  var count = 0;
  for (var i=0; i<string.length; i+=1) {
    if (string[i] === letter) {
      count+=1;
    }
  }
  return count;
};

var returnCounts = function (string) {
  string = string.toUpperCase();
  var result = "";
  for (var i=0; i<nucleotides.length; i+=1) {
    nucleotide = nucleotides[i];
    result=+(nucleotide + ": " + nucleotideCounter(string, nucleotide) + "/n");
  }
  return result;
};
nucleotideCounter("acgtu");
