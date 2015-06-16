var app = app || {};

$(document).ready(function() {
  // Fetch plane data then start app
  app.planes = new app.Planes();
  app.planes.fetch().done(function() {
    app.router = new app.Router();
    Backbone.history.start();
  });
});