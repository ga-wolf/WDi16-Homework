var app = app || {};

app.Movie = Backbone.Model.extend({
  urlRoot: "/movies",

  defaults: {
    title: "name of movie",
    director: "name of director",
    plot: "movie plot",
    year: "N/A"
  }
});
