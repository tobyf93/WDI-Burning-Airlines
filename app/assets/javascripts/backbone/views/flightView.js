var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#flights',

  events: {
    'click': 'showSeatsView'
  },

  render: function() {
    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template(flightViewTemplate);
    this.$el.append(flightViewHTML(this.model.attributes));
    console.log('rendering flight ' + this.model.get('id'));
  },



  showSeatsView: function () {
    app.router.navigate('planes/' + this.model.get('plane_id') + '/flights/' + this.model.get('id') + '/seats', true);
  }

});