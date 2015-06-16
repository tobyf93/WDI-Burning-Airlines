var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    app.flights.each(function(flight) {
      app.flightView = new app.FlightView({model: flight});
      // app.flightView.render();
    });
  },

});