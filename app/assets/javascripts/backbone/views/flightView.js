var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'li',
  className: "list-group-item",

  events: {
    'click': 'showSeatsView'
  },

  render: function( parentView ) {
    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template(flightViewTemplate);

    var obj = this.model;
    // debugger;

    // There are two types of data
      // An actual Backbone model which has an attributes key
      // An object which doesn't have the attributes key

    // If it has the attributes key, perform the toJSON method

    if ( _.has( this.model, "attributes" ) ) {
      obj = this.model.toJSON();
    }

    // If it doesn't, leave it alone

    console.log( "Object is ", obj );

    var toAppend = this.$el.append( flightViewHTML( obj ) );
    parentView.append(toAppend);
  },


  showSeatsView: function () {
    app.router.navigate('planes/' + this.model.plane_id + '/flights/' + this.model.id + '/reservations', true);
  }

});