var app = app || {};

app.SeatsView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);

    // console.log(this.collection);
    var view = this;
    var rows = 10;
    var columns = 10;

    var view = this;
    view.collection.each(function(reservation) {
      // Give reservation plane_id too
      reservation = reservation.toJSON();
      reservation.plane_id = view.collection.plane_id;

      app.seatView = new app.SeatView({model: reservation});
      app.seatView.render( view.$el );
    });
  }

});