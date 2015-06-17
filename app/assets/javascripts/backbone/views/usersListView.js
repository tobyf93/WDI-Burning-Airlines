var app = app || {};

app.UsersListView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var template = $('#usersListViewTemplate').html();
    var compiled = _.template(template);

    this.$el.append(compiled());
  }
});