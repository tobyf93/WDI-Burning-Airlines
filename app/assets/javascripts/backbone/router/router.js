var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes': 'planes',
    'planes/:id': 'plane',
    'planes/:plane_id/flights': 'flights',
    'planes/:plane_id/flights/:id': 'flight',
    'planes/:plane_id/flights/:id/seats': 'seats',
    'search': 'search',
    'polling': 'polling'
  },

  planes: function(id) {
    app.planeListView = new app.PlaneListView({plane_id: id});
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

    app.tobys = new app.Tobys();
    app.tobyPoller = new app.Poller({
      collection: app.tobys,
      seconds: 5
    });
    app.tobyPoller.start();

    app.pollingView = new app.PollingView();
    app.pollingView.render();
  },

  search: function(plane_id) {
    // app.flights 


    // $('#search_flights_form').click(function () {
      
    // })


    // $('#search_for_flights_button').text

    // Select the text from the users input
    // And make a query to the db on 'destinations'
    // render a new view

  }

});