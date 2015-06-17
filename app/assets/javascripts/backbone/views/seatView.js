var app = app || {};

app.SeatView = Backbone.View.extend({
  tagName: 'li',
  className: "seatInner",

  events: {
    'click': 'makeReservation'
  },

  render: function( parentView ) {
    var seatViewTemplate = $('#seatViewTemplate').html();
    var seatViewHTML = _.template(seatViewTemplate);

    console.log(this.$el);
    parentView.children().children().append(this.$el);
  },

  makeReservation: function () {
    console.log('making res')

    var url = 'planes/' + this.model.plane_id + '/flights/' + this.model.flight_id + '/reservations';
    $.post(url, {
      reservation: {
        row: this.model.row,
        column: this.model.column
      }
    });
  }

});