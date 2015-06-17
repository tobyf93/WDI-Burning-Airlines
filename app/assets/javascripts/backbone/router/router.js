var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes': 'planes',
    'planes/:id': 'plane',
    'planes/:plane_id/flights': 'flights',
    'planes/:plane_id/flights/:id': 'flight',
    'search/:origin/:destination': 'search',
    'planes/:plane_id/flights/:id/reservations': 'reservations',
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
    app.flights.fetch({ 
      data: {
        plane_id: plane_id
      }
    }).done(function() {
      app.flightListView = new app.FlightListView();
      app.flightListView.render();
    });

    console.log('ROUTE: flights (plane_id: '+ plane_id + ')');
  },  

  flight: function(plane_id, id) {
    console.log('ROUTE: flight (plane_id: '+ plane_id + ', id: ' + id + ')');
  },

  reservations: function(plane_id, id) {
    console.log('ROUTE: flight(plane_id: ' + plane_id + ', id: ' + id + ', reservations)');
    app.reservations = new app.Reservations({plane_id: plane_id, flight_id: id});

    app.pollReservations = new app.Poller({
      collection: app.reservations,
      seconds: 5,
      success: function() {
        app.seatsView = new app.SeatsView({collection: app.reservations});
        app.seatsView.render();
      }
    });
    app.pollReservations.start();    
  },

  polling: function() {
    console.log('ROUTE: Polling demo');

    app.tobys = new app.Tobys();
    app.tobyPoller = new app.Poller({
      collection: app.tobys,
      seconds: 5
    });
    app.tobyPoller.start();

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