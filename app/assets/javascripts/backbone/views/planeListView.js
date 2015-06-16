var app = app || {};

app.PlaneListView = Backbone.View.extend({
  el: '#view',

  render: function () {
    var planeListViewTemplate = $('#planeListViewTemplate').html();
    this.$el.html(planeListViewTemplate);

    var view = this;
    app.planes.each(function(plane) {
      app.planeView = new app.PlaneView({model: plane, parentView: view.$el});
      app.planeView.render( view.$el );
    });
  }
});



