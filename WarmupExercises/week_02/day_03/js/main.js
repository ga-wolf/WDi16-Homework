var nucleotides = ["A", "C", "G", "T", "U"];

var validNucleotides = false;

var nucleotideCounter = function(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count += 1;
      validNucleotides = true;
    }
  }
  return count;
};

var returnCounts = function(string) {
  string = string.toUpperCase();
  var result = "";
  for (var i = 0; i < nucleotides.length; i++) {
    var nucleotide = nucleotides[i];
    result += (nucleotide + ": " + nucleotideCounter(string, nucleotide) + "\n");
  }

  if (validNucleotides) {
    return result;
  } else {
    return "no valid nucleotides";
  }
};

console.log(returnCounts("DKDK"));
