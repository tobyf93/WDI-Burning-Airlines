var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#mainApp',

  render: function() {
    var appTemplate = $('#appTemplate').html();
    this.$el.html(appTemplate);
  }
});