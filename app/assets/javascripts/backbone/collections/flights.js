var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: '/planes/1/flights'
});