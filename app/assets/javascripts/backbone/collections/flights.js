var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: function () {
    console.log(this.models[0].get('plane_id'));
    return '/planes/' + this.models[0].get('plane_id') + '/flights'
  }
});