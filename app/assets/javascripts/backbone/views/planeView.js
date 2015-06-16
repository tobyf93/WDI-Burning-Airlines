var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#planes',

  render: function() {
    var planeViewTemplate = $('#planeViewTemplate').html();
    this.$el.html(planeViewTemplate);

    console.log(planeViewTemplate);
  }
});