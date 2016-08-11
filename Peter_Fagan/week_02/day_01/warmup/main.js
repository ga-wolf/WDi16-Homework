// Badger's Revenge
//
// Fed up with students clapping him after ever warmup, Badger devises a cunning plan to put an end to it
// - or at least look like he's putting an end to it. You see, Badger secretly enjoys the adulation
// - mocking though it may be - so he doesn't want the clapping to stop altogether.
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw.
// On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally,
// you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week;
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.


var revengeOfBadger = {
  record: {
    studentA: 0,
    studentB: 0,
    studentC: 0,
    studentD: 3,
    studentE: 0,
    studentF: 0,
    studentG: 0,
    studentH: 4,
    studentJ: 0,
    studentK: 0,
  },
  getCandidates: function() {
    for (var prop in this.record){
      if (this.record[prop] > 2) {
        this.candidates.push(prop);
      }
    }
  },
  candidates: [],
  draw: function() {
    this.candidates = [];
    var winner;
    this.getCandidates();
    if (this.getCandidates === 0) {
      winner = "Badger";
    } else {
      var numberOfCandidates = this.candidates.length;
      var random = Math.floor (Math.random ()* numberOfCandidates);
      winner = this.candidates[random];
    };
    console.log("Lucky " + winner + " You will be doing the warmup today");
    return winner;
  },
};
