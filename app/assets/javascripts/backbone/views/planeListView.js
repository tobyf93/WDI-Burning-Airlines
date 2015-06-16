var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#view',

  render: function () {
    var planeListViewTemplate = $('#planeListViewTemplate').html();
    this.$el.html(planeListViewTemplate);

    app.planeView = new app.PlaneView();

    app.planes.each(function() {
      app.planeView.render();
    });
  }
});



