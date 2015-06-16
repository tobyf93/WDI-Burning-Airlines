var app = app || {};

app.Reservation = Backbone.Model.extend({

  defaults: {
    row: 1,
    column: 1,
    user_id: 1,
    flight_id: 1
  }

});