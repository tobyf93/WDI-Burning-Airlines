var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#flightTemplate',

  render: function() {
    var flightViewTemplate = $('#flightViewTemplate').html();
    this.$el.html(flightViewTemplate);
  }

});