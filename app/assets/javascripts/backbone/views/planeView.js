var app = app || {};

app.PlaneView = Backbone.View.extend({
  tagName: 'li',
  className: "list-group-item",

  events: {
    'click': 'showFlights'
  },

  render: function( parentView ) {
    var planeViewTemplate = $('#planeViewTemplate').html();
    var planeViewHTML = _.template(planeViewTemplate);

    var toAppend = this.$el.html(planeViewHTML(this.model.attributes));
    // console.log(toAppend)
    parentView.append(toAppend)
  },

  showFlights: function(event) {
    // event.stopPropagation()
    console.log( this.model );
    // event.stopImmediatePropagation();
    console.log('fire');
    app.router.navigate('planes/' + this.model.get('id') + '/flights', true);
  }
});