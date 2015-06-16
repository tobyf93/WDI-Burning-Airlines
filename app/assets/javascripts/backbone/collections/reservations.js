var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  // Obviously won't stay like this
  url: '/planes'
});