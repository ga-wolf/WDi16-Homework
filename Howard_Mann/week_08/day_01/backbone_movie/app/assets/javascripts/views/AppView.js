var app = app || {};

app.View = Backbone.View.extend({
  // Only job is to loop through the collection and pass to another function
  render: function(){
    $("#app").html("");
    _.each(this.collection.models, function(movie){
      var appMovieIndexView = new app.MovieIndexView({model: movie});
      appMovieIndexView.render();
    });
  }
});
