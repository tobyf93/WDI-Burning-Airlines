var app = app || {};

app.SeatsView = Backbone.View.extend({

  el: '#view',

  render: function() {
    var seatsViewTemplate = $('#seatsViewTemplate').html();
    this.$el.html(seatsViewTemplate);
    //console.log(id)

    var view = this;
    var rows = 10;
    var columns = 10;


    //console.log(app.reservations);

    var justAttr = [];
    for ( var i = 0 ; i < app.reservations.models.length ; i++ ) {
      justAttr += (app.reservations.models[i].attributes);
    }

    debugger;

    for ( var i = 1 ; i <= rows ; i++ ) {
      for ( var j = 1 ; j <= columns ; j++ ) {
        var isFound = _.where(justAttr, {row: i, column: j})
        console.log(isFound);

        if ( isFound.length > 0 ) {
          reservation = isFound[0];
          app.seatView = new app.SeatView({model: reservation, parentView: view.$el});
          app.seatView.render( view.$el );
        } else {
          var seatViewTemplate = $('#seatViewTemplate').html();
          var seatViewHTML = _.template(seatViewTemplate);
          $('#view').append(seatViewHTML);
        }
      }
    }

    // app.reservations.each(function(reservation) {
    //   app.seatView = new app.SeatView({model: reservation, parentView: view.$el});
    //   console.log(reservation.attributes['row'])
    //   app.seatView.render( view.$el );
    // });
  }

});