var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#planes',

  events: {
    'click': 'showFlights'
  },

  render: function() {
    var planeViewTemplate = $('#planeViewTemplate').html();
    var planeViewHTML = _.template(planeViewTemplate);

    this.$el.append(planeViewHTML(this.model.attributes));
  },

  showFlights: function() {
    app.router.navigate('planes/1/flights', true);
  }
});