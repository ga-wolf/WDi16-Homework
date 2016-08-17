// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.


// take in the first number - eg. 99
// loop through from the number, decrementing by 1 each time
// print the lyrics with each number in it
// when the number === 0 swap the lyricss and start again


var beerSong = function (count) {
  var verses = parseInt(count);
  for (var i = count; i > 0; i-=1) {
    console.log(i + " bottles of beer on the wall, " + i + " bottle of beer." + "\n" + " Take it down and pass it around, " + (i - 1) + " more bottles of beer on the wall.");
      // if (i = 0) break;
      // console.log("No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
};
beerSong(25);


// var beer = {
//
//   song: function() {
//
//     for (var i=99; i>=0; i-=1){
//       console.log(beer.verse(i));
//     }
//
//   },
//
//   verse: function(num) {
//     var quantity = beer.formatQuantity(num);
//     var action = beer.formatAction(num);
//     var remainingQuantity = beer.formatQuantity (num- 1);
//     var firstLine = quantity + " on the wall. " + quantity;
//     var secondLine = action + remainingQuantity + " on the wall";
//     return firstLine + "\n" + secondLine + "\n";
//   },
//
//   formatQuantity: function(num) {
//     if (num===0) {
//       return "no more tinnies of VB";
//     } else if (num === 1) {
//       return "1 more tinnie of VB";
//     } else {
//       return num + " tinnies of VB";
//     }
//   },
//
//   formatAction: function(num){
//     if (num === 0) {
//       return "Hop in the ute and fang it to the Bottle-O. ";
//     } else if (num === 1){
//       return "Take it down and smash it. ";
//     } else {
//       return "Take one down and smash it. ";
//     }
//   }
// };
// beer.song();
