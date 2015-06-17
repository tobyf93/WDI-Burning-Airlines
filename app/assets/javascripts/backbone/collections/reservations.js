var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  initialize: function(options) {
    for (var option in options) {
      this[option] = options[option];
    }
  },

  // Obviously won't stay like this
  url: function () {
    return '/planes/' + this.plane_id + '/flights/' + this.flight_id + '/reservations';
  }
});