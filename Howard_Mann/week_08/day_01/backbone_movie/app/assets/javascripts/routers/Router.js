var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "":"index",
    "movies":"index",
    "movies/:id":"show"
  },

  index: function() {
    var appView = new app.View({
      collection: app.movies
    });
    appView.render();
  },

  show: function(id) {
    // Create a new instance of the showPageView and then render it
    // Get a movie from the collection movies
    var movie = app.movies.get(id);
    var appMovieShowView = new app.MovieShowView({
      model: movie
    });
    appMovieShowView.render();
  }
});
