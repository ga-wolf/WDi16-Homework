var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

// Log out 30 random numbers between 20 and 100
// Create a function that can only ever be called once
// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

numbers =_.times (30, function (num) {
  num = _.random(20, 100);
  console.log(num);
});
var sayHello = function() {
  console.log("Hello World");
}
var hello = _.once(sayHello);
hello();
hello();

_.chain(people).each(function (person) {
  var phrase = "<p> Hello <%= username  %>, you don't look a day over <%= age %></p>";
  var peoplePhrase = _.template( phrase);
  console.log(peoplePhrase(person));
});

// .each(function (person) {
//     var bio = "<%= firstName %> <%= lastName %> was born in <%= born %>.";
//     var compiledBio = _.template( bio );
//     console.log( compiledBio(person) );
//   });



var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];
