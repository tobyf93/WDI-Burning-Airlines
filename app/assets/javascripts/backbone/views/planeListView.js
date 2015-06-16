var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#view',

  render: function () {
    var planeListViewTemplate = $('#planeListViewTemplate').html();
    this.$el.html(planeListViewTemplate);

    app.planes.each(function(plane) {
      app.planeView = new app.PlaneView({model: plane});
      app.planeView.render();
    });
  }
});



