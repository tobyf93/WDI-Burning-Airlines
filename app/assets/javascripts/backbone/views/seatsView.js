var app = app || {};

app.SeatsView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);

    app.usersListView = new app.UsersListView();
    app.usersListView.render();

    $('.seatOuter').css('width', (app.planes.get(this.collection.plane_id).attributes.columns * 54));

    var view = this;
    view.collection.each(function(reservation) {
      // Give reservation plane_id too
      reservation = reservation.toJSON();
      reservation.plane_id = view.collection.plane_id;
      // console.log(reservation.user_id);

      app.seatView = new app.SeatView({model: reservation});
      app.seatView.render( view.$el );
    });
  }

});