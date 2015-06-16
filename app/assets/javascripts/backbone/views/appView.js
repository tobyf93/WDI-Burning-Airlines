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

  search: function() {
    var search = $('#search').val();
    app.router.navigate('search/' + search, true);
  }
});