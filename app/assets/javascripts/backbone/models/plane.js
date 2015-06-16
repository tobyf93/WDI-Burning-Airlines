var app = app || {};

app.Plane = Backbone.Model.extend({
  defaults: {
    name: 'Undefined Name',
    rows: 10,
    columns: 10,
  }
});