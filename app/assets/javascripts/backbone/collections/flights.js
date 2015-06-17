var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: function () {
    // If there is no plane_id or origin or destination 
      // The request should be /flights
    // If there is a plane_id
      // The request should be /planes/:id/flights
    // If there is an origin and destination
      // The request should be /flights?origin=____&destination=____




    var url = '/flights';

    return url;
  },

  initialize: function ( origin, destination ) {
    // this.origin = origin;
    // this.destination = destination;
  }

});