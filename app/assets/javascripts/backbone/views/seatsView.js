var app = app || {};

app.SeatsView = Backbone.View.extend({

  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);
  },

});