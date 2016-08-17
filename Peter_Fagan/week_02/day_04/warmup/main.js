// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

var anagram = {
  arrayOfWords: ["enlists", "google", "inlets", "banana"],
  anagrams: [],
  sort: function(string) {
    return string.split("").sort().join("");
  },
  checkForAnagram: function(word) {
    word = word.toLowerCase();
    for (var i=0; i<this.arrayOfWords.length; i+=1) {
      var potentialAnagram = this.sort(this.arrayOfWords[i]);
      if (this.sort(word) === potentialAnagram) {
        this.anagrams.push(this.arrayOfWords[i]);
      }
    }
    console.log(this.anagrams);
  }
};

anagram.checkForAnagram("listen");
