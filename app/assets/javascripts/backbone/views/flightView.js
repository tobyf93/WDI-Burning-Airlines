var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#flights',

  events: {
    'click': 'showSeatsView'
  },

  render: function() {
    var flightViewTemplate = $('#flightViewTemplate').html();
    this.$el.append(flightViewTemplate);
    console.log('rendering flight ' + this.model.get('id'));
  },



  showSeatsView: function () {
    app.router.navigate('planes/' + this.model.get('plane_id') + '/flights/' + this.model.get('id') + '/seats', true);
  }

});