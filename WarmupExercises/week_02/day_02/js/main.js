var score = function(word) {
      var sum = 0;
      word = word.toUpperCase();
      var keys = Object.keys(letterScores);
      for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            for (var j = 0; j < keys.length; j++) {
                  if (letterScores[keys[j]].includes(letter)) {
                        console.log(letter + " gets a " + keys[j]);
                        sum += parseInt(keys[j]);
                  }
            }
      }
      console.log(sum);
      return sum;
};

var letterScores = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
};

score("badger");
