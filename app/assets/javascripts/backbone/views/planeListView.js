var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#view',

  render: function () {
    var planeListViewTemplate = $('#planeListViewTemplate').html();
    this.$el.html(planeListViewTemplate);
  }
})



