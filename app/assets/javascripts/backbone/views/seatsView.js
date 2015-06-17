var app = app || {};

app.SeatsView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);

    // console.log(this.collection);
    var view = this;

    this.collection.each(function(reservation) {
      app.seatView = new app.SeatView({model: reservation});
      app.seatView.render( view.$el );
    });
  }

});