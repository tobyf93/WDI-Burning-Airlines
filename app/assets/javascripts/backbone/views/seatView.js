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

    //var toAppend = this.$el.append(seatViewHTML(this.model.attributes));
    parentView.children().children().append(seatViewHTML(this.model.attributes));
  },

  makeReservation: function () {
    console.log('make reservation');
    // app.router.navigate('planes/' + this.model.get('plane_id') + '/flights/' + this.model.get('id') + '/reservations', true);
  }

});