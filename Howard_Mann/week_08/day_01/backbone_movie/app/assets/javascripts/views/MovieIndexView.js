var app = app || {};

// Job is to display each model on the page as well as assign click event listener for show page
app.MovieIndexView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click':'showMovie'
  },

  showMovie: function() {
    app.router.navigate('movies/'+this.model.get("id"), true);
  },

  render: function(){
    var output = this.$el.append(this.model.get("title"));
    $('#app').append(output);
  }

});
