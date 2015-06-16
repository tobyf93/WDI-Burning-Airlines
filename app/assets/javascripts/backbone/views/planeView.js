var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#planes',

  events: {
    'click': 'showFlights'
  },

  render: function() {
    var planeViewTemplate = $('#planeViewTemplate').html();
    this.$el.append(planeViewTemplate);
  },

  showFlights: function() {
    app.router.navigate('planes/1/flights', true);
  }
});