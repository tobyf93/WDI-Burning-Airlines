var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#planes',

  events: {
    'click': 'showFlights'
  },

  render: function() {
    var planeViewTemplate = $('#planeViewTemplate').html();
    var planeViewHTML = _.template(planeViewTemplate);

    $('#planes').append(planeViewHTML(this.model.attributes));
  },

  showFlights: function() {
    console.log('fire');
    app.router.navigate('planes/' + this.model.get('id') + '/flights', true);
  }
});