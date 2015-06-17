var app = app || {};

app.UsersListView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var template = $('#usersListViewTemplate').html();
    var compiled = _.template(template);

    var users = [];
    this.collection.each(function(reservation) {
      var name = reservation.get('name');
      
      if (name) {
        users.push(name);
      }
    });
    users = _(users).uniq();

    this.$el.append(compiled({users: users}));
  }
});