var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#flights',

  events: {
    'click': 'showSeatView'
  },

  render: function() {
    var flightViewTemplate = $('#flightViewTemplate').html();
    this.$el.html(flightViewTemplate);
  },

  showSeatView: function () {
    app.router.navigate('planes/1/flights/' + this.model.get('id'), true);
  }

});