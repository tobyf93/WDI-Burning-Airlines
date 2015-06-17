var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#mainApp',
  events: { 
    'click #search_for_flights_button': 'search'
  },

  render: function() {
    var appTemplate = $('#appTemplate').html();
    this.$el.html(appTemplate);
  },

  search: function( event ) {
    event.preventDefault();
    console.log("FORM RUN");

    var search = $('#search').val();
    var origin = $("#origin").val();
    var destination = $("#destination").val();
    app.router.navigate('search/' + origin + "/" + destination, true);
  }
});