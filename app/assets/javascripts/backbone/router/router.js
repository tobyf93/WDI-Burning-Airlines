var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes': 'planes',
    'planes/:id': 'plane',
    'planes/:plane_id/flights': 'flights',
    'planes/:plane_id/flights/:id': 'flight',
    'planes/:plane_id/flights/:id/seats': 'seats'

    // Considered as a bonus: '/search': 'search',
  },

  planes: function() {
    app.appView = new app.AppView();
    app.appView.render();
    app.planeListView = new app.PlaneListView();
    app.planeListView.render();

    console.log('ROUTE: planes');
  },

  plane: function(id) {
    console.log('ROUTE: plane (id: '+ id + ')');
  },

  flights: function(plane_id) {
    app.flights = new app.Flights();
    app.flights.fetch().done(function() {
      app.flightListView = new app.FlightListView({plane_id: plane_id});
      app.flightListView.render()
    });

    console.log('ROUTE: flights (plane_id: '+ plane_id + ')');
  },  

  flight: function(plane_id, id) {
    console.log('ROUTE: flight (plane_id: '+ plane_id + ', id: ' + id + ')');
  },

  seats: function(plane_id, id) {
    console.log('ROUTE: flight(plane_id: ' + plane_id + ', id: ' + id + ', seats)')
  }

});