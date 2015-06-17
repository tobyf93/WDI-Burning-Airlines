var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes': 'planes',
    'planes/:id': 'plane',
    'planes/:plane_id/flights': 'flights',
    'planes/:plane_id/flights/:id': 'flight',
    'planes/:plane_id/flights/:id/seats': 'seats',
    'search/:origin/:destination': 'search',
    'polling': 'polling'
  },

  planes: function(id) {
    app.planeListView = new app.PlaneListView();
    app.planeListView.render();

    console.log('ROUTE: planes');
  },

  plane: function(id) {
    console.log('ROUTE: plane (id: '+ id + ')');
  },

  flights: function(plane_id) {
    app.flights = new app.Flights({plane_id: plane_id});
    app.flights.fetch().done(function() {
      app.flightListView = new app.FlightListView();
      app.flightListView.render();
    });

    console.log('ROUTE: flights (plane_id: '+ plane_id + ')');
  },  

  flight: function(plane_id, id) {
    console.log('ROUTE: flight (plane_id: '+ plane_id + ', id: ' + id + ')');
  },

  seats: function(plane_id, id) {
    console.log('ROUTE: flight(plane_id: ' + plane_id + ', id: ' + id + ', seats)');
  },

  polling: function() {
    console.log('ROUTE: Polling demo');

    app.reservations = new app.Reservations();
    app.reservations.fetch();

    app.pollingView = new app.PollingView();
    app.pollingView.render();
  },

  search: function(origin, destination) {
    // debugger;
    //
    // var origin = origin.val();
    // var destination = destination.val();
    // debugger;

    var origin = origin;
    var destination = destination;

    // debugger;
    app.flights = new app.Flights();
    app.flights.fetch().done(function() {
      app.flights = app.flights.where({ 
        origin: origin, 
        destination: destination 
      });

      app.flightListView = new app.FlightListView();
      app.flightListView.render();
    });
    // Need to search for the origin and destination.
    // If the results match, render in the view a list of flights.
    // else, print `There are no flights matching your query`.


  }

});