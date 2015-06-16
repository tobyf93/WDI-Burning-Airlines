var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: function () {
    return '/planes/' + this.models[0].get('plane_id') + '/flights'
  }
});