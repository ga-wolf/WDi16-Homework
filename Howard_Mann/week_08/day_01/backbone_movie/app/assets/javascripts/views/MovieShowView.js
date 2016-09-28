var app = app || {};

app.MovieShowView = Backbone.View.extend({

  render: function(){
    var dynamicMarkup = $("#movie-show-template").html();
    var template = _.template(dynamicMarkup);
    var output = template(this.model.toJSON());
    $('#app').html(output);
  }
});
