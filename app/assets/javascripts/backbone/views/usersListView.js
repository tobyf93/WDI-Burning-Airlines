var app = app || {};

app.UsersListView = Backbone.View.extend({
  el: '#view',

  render: function() {
    var template = $('#usersListViewTemplate').html();
    var compiled = _.template(template);

    var users = [];
    this.collection.each(function(reservation) {
      users.push(reservation.get('user_id'));
    });
    users = _(users).uniq();

    this.$el.append(compiled({users: users}));
  }
});