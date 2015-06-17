var app = app || {};

app.FlightListView = Backbone.View.extend({
  
  el: '#view',

  render: function () {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    var view = this;
    // debugger;
    // console.log(app.flights)

    if ( _.isArray( app.flights ) ) {
      app.flights = app.flights;
    } else {
      app.flights = app.flights.toJSON();
    }

    // debugger;

    _.each( app.flights, function ( flight ) { 

      app.flightView = new app.FlightView({
        model: flight, 
        parentView: view.$el
      });
      app.flightView.render( view.$el );

    } );
  },

});