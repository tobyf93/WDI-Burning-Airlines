var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  url: function () {
    console.log(this.models[0].get('plane_id'));
    return '/planes/' + this.models[0].get('plane_id') + '/flights/' + this.models[0].get('flight_id') + '/seats'
  }
});