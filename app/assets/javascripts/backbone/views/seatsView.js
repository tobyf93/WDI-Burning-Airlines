var app = app || {};

app.SeatsView = Backbone.View.extend({

  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);
    //console.log(id)

    var view = this;

    app.reservations.each(function(reservation) {
      app.seatView = new app.SeatView({model: reservation, parentView: view.$el});
      app.seatView.render( view.$el );
    });
  }

});