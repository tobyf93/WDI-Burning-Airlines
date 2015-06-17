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
    //console.log(this.$el);
    parentView.children().children().append(this.$el);

    if ( this.model.user_id ) {
      // var $thing = this.$el
      // $($thing).addClass('HasBeenClicked');

      this.$el.addClass('HasBeenClicked');
    }

  },

  makeReservation: function () {
    // console.log('making res on: ');
    var co = this.model['column'];
    var ro = this.model['row'];

    var dynamicRows = app.planes.get(this.model.plane_id).attributes.columns
    var numSelector = ( ( (ro - 1) * dynamicRows ) + (co - 1) );
    var $clicked = $('.seatOuter').children()[numSelector];
    $($clicked).addClass('HasBeenClicked');

    var url = 'planes/' + this.model.plane_id + '/flights/' + this.model.flight_id + '/reservations';
    $.post(url, {
      reservation: {
        row: this.model.row,
        column: this.model.column,
        flight_id: this.model.flight_id,
        user_id: 9999
      }
    });
  }

});