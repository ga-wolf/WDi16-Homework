var app = app || {};

app.Movies = Backbone.Collection.extend({
  url: "/movies",

  model: app.Movie
});
