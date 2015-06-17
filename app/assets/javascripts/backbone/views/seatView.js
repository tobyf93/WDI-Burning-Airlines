var app = app || {};

app.SeatView = Backbone.View.extend({
  tagName: 'li',
  className: "list-group-item",

  events: {
    'click': 'makeReservation'
  },

  render: function( parentView ) {
    var seatViewTemplate = $('#seatViewTemplate').html();
    var seatViewHTML = _.template(seatViewTemplate);

    var toAppend = this.$el.append(seatViewHTML(this.model.attributes));
    parentView.append(toAppend);
  },

  makeReservation: function () {

    var url = 'planes/' + this.model.plane_id + '/flights/' + this.model.flight_id + '/reservations';
    $.post(url, {
      reservation: {
        row: this.model.row,
        column: this.model.column
      }
    });
  }

});