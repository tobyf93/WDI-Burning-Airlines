var app = app || {};

app.FlightListView = Backbone.View.extend({

  el: '#flightListTemplate',

  render: function() {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    app.flightView = new app.FlightView();
    app.flightView.render();
  }

});