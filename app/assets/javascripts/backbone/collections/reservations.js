var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  // Obviously won't stay like this
  url: function () {
    console.log(this.models[0].get('plane_id'));
    return '/planes/' + this.models[0].get('plane_id') + '/flights/' + this.models[0].get('flight_id') + '/seats'
  }
});