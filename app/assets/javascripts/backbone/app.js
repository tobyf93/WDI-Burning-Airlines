var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function() {
  // Fetch plane data then start app
  app.planes = new app.Planes();
  app.planes.fetch().done(function() {
    app.router = new app.Router();
    Backbone.history.start();
  });
});