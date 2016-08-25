var atBash = function(input) {

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var reverse = alphabet.slice().reverse();
  // var reverse = [].concat(alphabet).reverse();
  input = input.split("");
  var result = "";
  for (var i = 0; i < input.length; i++) {
    var index = alphabet.indexOf(input[i]);
    var cipherCharacter = reverse[index];
    result += cipherCharacter;
  }

  return result;
};



console.log(atBash("kitten"));
