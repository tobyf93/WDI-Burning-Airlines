var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    app.flightView = new app.FlightView();

    app.flights.each(function() {
      app.flightView.render();
    });
  },

});