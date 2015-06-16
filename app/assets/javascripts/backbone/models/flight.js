var app = app || {};

app.Flight = Backbone.Model.extend({
  defaults: {
    origin: 'Undefined Origin',
    destination: 'Undefined Destination',
    date: 'Undefined Date'
    // Not sure if we'd want a default ID?
  }
});