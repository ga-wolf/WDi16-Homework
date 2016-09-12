var app = app || {};

$(document).ready(function(){
  console.log("DOM loaded");

  // Instantiate a new app.Movies collection and fetch data from server
  app.movies = new app.Movies();
  app.movies.fetch().done(function(){
    console.log(app.movies);
    // Instantiate a new router and start listening for fragment histories
    app.router = new app.Router();
    Backbone.history.start(); // HM you will forget this
  });
});
