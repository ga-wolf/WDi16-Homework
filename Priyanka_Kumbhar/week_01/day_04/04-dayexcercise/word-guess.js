var wordLetters     = ['G', 'O', 'A', 'T'];
     var guessedLetters  = ['_', '_', '_', '_'];

     function guessLetter(letter) {
         var goodGuess = false;
         var moreToGuess = false;
         for (var i = 0; i < wordLetters.length; i++) {
             if (wordLetters[i] == letter) {
                 guessedLetters[i] = letter;
                 goodGuess = true;
             }
             if (guessedLetters[i] == '_') {
                 moreToGuess = true;
             }
         }
         if (goodGuess) {
             console.log('Yay, you found a letter!');
             console.log(guessedLetters.join(''));
             if (!moreToGuess) {
                 console.log('YOU WON!');
             }
         } else {
             console.log('Oh noes, thats not right!');
         }
     }

     guessLetter('G');
     guessLetter('I');
     guessLetter('O');
     guessLetter('A');
     guessLetter('T');
   
