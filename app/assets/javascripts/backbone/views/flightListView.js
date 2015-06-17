var app = app || {};

app.FlightListView = Backbone.View.extend({

  el: '#view',

  render: function () {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    var view = this;
    app.flights.each(function(flight) {
      app.flightView = new app.FlightView({model: flight, parentView: view.$el});
      app.flightView.render( view.$el );
      // app.flightView.render();
    });
  }

});