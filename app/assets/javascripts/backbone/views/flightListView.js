var app = app || {};

app.FlightListView = Backbone.View.extend({

  el: '#flightListTemplate',

  events: {
    'click': 'showFlight'
  },

  render: function() {
    var flightListViewTemplate = $('#flightListViewTemplate').html();
    this.$el.html(flightListViewTemplate);

    app.flightView = new app.FlightView();
    app.flightView.render();
  },
  
  showFlight: function () {
    app.router.navigate('planes/1/flights/' + this.model.get('id'), true);
  }

});