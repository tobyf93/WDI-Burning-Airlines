var app = app || {};

app.PollingView = Backbone.View.extend({
  el: '#mainApp',

  render: function() {
    this.$el.html('let the polling begin!');
  }
});