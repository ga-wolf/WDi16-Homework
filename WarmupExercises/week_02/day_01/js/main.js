var revengeOfBadger = {
    // Track how many times each student in the class has clapped this week;
    record: {
        Andrew: 0,
        Arpan: 0,
        Howard: 0,
        Jong: 0,
        Lucas: 0,
        Peter: 0,
        Priyanka: 0,
        Samit: 0,
        Stephen: 0,
        Tomas: 0,
        Yangmei: 0
    },

    // Function to populate the 'candidates' array with students that have clapped more than twice this week.
    getCandidates: function() {
        for (var prop in this.record) {
            if (this.record[prop] > 2) {
                this.candidates.push(prop);
            }
        }
    },

    // Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
    candidates: [],

    // Pick a random student to deliver the solution to Friday's warmup.
    draw: function() {
        this.candidates = [];
        var winner;
        this.getCandidates();
        if (this.candidates.length === 0) {
            winner = "Badger";
        } else {
            var numberOfCandidates = this.candidates.length;
            var random = Math.floor(Math.random() * numberOfCandidates);
            winner = this.candidates[random];
        }
        console.log("Lucky " + winner + ". You'll be doing the warmup today!");
        return winner;
    }
};
