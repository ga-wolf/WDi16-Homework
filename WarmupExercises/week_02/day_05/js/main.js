// Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: 99 Bottles of Beer on the Wall.

// Okay, cool, but tinnies > bottles, so we're doing tinnies.

// According to the requirements, "the program should be called with Beer.song", so I'm going to create a Beer object with a song method. Then I'm going to create a bunch of other methods which 'song' calls so that the problem's easier to attack, and my code's both neater and has a number of re-usable components. I could've done this in a single function, but that would be (1) harder to read; (2) harder to debug; (3) give me just one single function that can only ever serve a single purpose.

var Beer = {

    // 1. Create our song method. This is going to be our starting point, but other methods are going to do the heavy lifting. All I want this to do is establish the starting number, the ending number and increment through every number in between, calling my verse function and consoling the output it gives each iteration.

    song: function(numStart, numFinish, typeOfBeer) {

        // The three assignments below ensure that, if arguments are not passed in, we have defaults to work with. If the argument is not present in the function call, then a default value (99, 0 and "VB", respectively) will be assigned.
        typeOfBeer = typeOfBeer || "VB";
        numStart = numStart || 99;
        numFinish = numFinish || 0;

        // My loop - start with numStart, and decrement til the numFinish, calling the verse method (for that number) each iteration.
        for (var i = numStart; i >= numFinish; i--) {
            console.log(Beer.verse(i, typeOfBeer));
        }
    },

    // 2. Create a verse method that our song method can call on each iteration through the numbers. This outputs two lines, but since each line will be different depending on (1) the quantity of tinnies at the start of the iteration, (2) how many tinnies there will be after the "action" (eg, take one down, take it down, go to the store and get some more), break this down into more smaller methods that our verse method can call.
    verse: function( num, beer ) {
        var quantity = Beer.formatQuantity(num, beer);
        var action = Beer.formatAction(num);
        var remainingQuantity = Beer.formatQuantity(num, beer);

        var firstLine = quantity + " on the wall, " + quantity + "\n";
        var secondLine = action + remainingQuantity + " on the wall" + "\n";

        // Return the first line and the second line to the function that called the verse method (ie, the song method)
        return firstLine + secondLine;
    },

    // 3. Return a different string of text depending on how many bottles of beer there are.
    formatQuantity: function(num, beer) {
        if (num === 0) {
            return "no more tinnies of " + beer;
        } else if (num ===1) {
            return "1 tinnie of " + beer;
        } else {
            return num + " tinnies of " + beer;
        }
    },

    // 4. Return a different string of text depending on how many bottles of beer there are.
    formatAction: function(num) {
        if (num === 0) {
            return "Hop in the ute and fang it to the store";
        } else if (num === 1) {
            return "Take it down and pass it smash it";
        } else {
            return "Take one down and smash it ";
        }
    }
};

Beer.song(55, 22, "VB");
