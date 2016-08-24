// Two solutions are outlined below.

// The first approach (anagram.checkForAnagrams) uses the Array.sort method, in conjunction with String.split and Array.join. If we sort the characters of a word's anagram, the word and the anagram will be ===. The problem is: (1) we cannot sort a string, so we have to 'split' it into an array of characters; (2) we can't compare two arrays to see if the elements within those arrays match, since one array will never === another array (since they are different JavaScript objects), so we need to "join" the sorted array of characters back into a string before comparing them.

// The second approach (anagram.regExSolution) uses RegEx to see whether each character in a word is present in its potential anagram. To pass a regular expression variable into JavaScript's .match() method, we need to create a new regular expression (using new RegExp) and pass that variable into .match(). If a character is not present in the potential anagram, the match method will return 'null'. So, as long as the match method does NOT return 'null', add that character to a list of matched characters (matches) and, once we've iterated through every character in the input string, if the length of that string is === the length of the array of matched characters, the potentialAnagram is an actual anagram, so lets push it to the anagrams array.

var anagram = {

  arrayOfWords: ["enlists", "google", "inlets", "banana"],

  anagrams: [],

  sort: function(string) {
    return string.split("").sort().join("");
  },

  checkForAnagrams: function(word) {
    word = word.toLowerCase();
    for (var i = 0; i < this.arrayOfWords.length; i++) {
      var potentialAnagram = this.sort(this.arrayOfWords[i]);
      if (this.sort(word) === potentialAnagram) {
        this.anagrams.push(this.arrayOfWords[i]);
      }
    }
  console.log(this.anagrams);
  return(this.anagrams);
  },

  regExSolution: function(str) {
    str = str.split("");
    for (var i = 0; i < this.arrayOfWords.length; i++) {
      var potentialAnagram = this.arrayOfWords[i];
      var matches = [];
      for (var j = 0; j < str.length; j++) {
        var regexp = new RegExp(str[j]);
        if (potentialAnagram.match(regexp) !== null) {
          matches.push(str[j]);
        }
      }
      if (matches.length === str.length) {
        this.anagrams.push(potentialAnagram);
      }
    }
    console.log(this.anagrams);
    return(this.anagrams);
  }
};

anagram.regExSolution("listen");
