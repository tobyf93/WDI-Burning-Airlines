var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'airplanes',
    'airplanes': 'airplanes',
    'flights': 'flights',
    'flights/:id': 'flight'

    // Considered as a bonus: '/search': 'search',
  },

  airplanes: function() {
    console.log('ROUTE: airplanes');
  },

  flights: function() {
    console.log('ROUTE: flights');
  },  

  flight: function(id) {
    console.log('ROUTE: flight (id: '+ id + ')');
  }
});