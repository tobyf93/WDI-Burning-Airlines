var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'li',
  className: "list-group-item",

  events: {
    'click': 'showSeatsView'
  },

  render: function( parentView ) {
    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template(flightViewTemplate);

    var toAppend = this.$el.append(flightViewHTML(this.model.attributes));
    console.log('rendering flight ' + this.model.get('id'));
    parentView.append(toAppend)
  },



  showSeatsView: function () {
    app.router.navigate('planes/' + this.model.get('plane_id') + '/flights/' + this.model.get('id') + '/seats', true);
  }

});