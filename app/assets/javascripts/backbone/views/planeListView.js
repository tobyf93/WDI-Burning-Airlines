var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#view',

  render: function () {
    var planeListViewTemplate = $('#planeListViewTemplate').html();
    this.$el.html(planeListViewTemplate);

    app.planeView = new app.PlaneView();

    // Don't leave this in
    for (var i = 0; i < 5; i++) {
      app.planeView.render();
    }
  }
});



