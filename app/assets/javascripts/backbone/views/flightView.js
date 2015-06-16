var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#flights',

  events: {
    'click': 'showSeatsView'
  },

  render: function() {
    var flightViewTemplate = $('#flightViewTemplate').html();
    this.$el.append(flightViewTemplate);
  },

  showSeatsView: function () {
    app.router.navigate('planes/1/flights/' + this.model.get('id') + '/seats', true);
  }

});