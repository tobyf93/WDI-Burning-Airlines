var app = app || {};

app.Poller = function(options) {
  for (var option in options) {
    this[option] = options[option];
  }

  // Check for valid object attributes
  if (typeof this.collection === 'undefined') {
    console.warn('Must specify a collection to poll.');
  }
  if (typeof this.seconds === 'undefined') {
    console.warn('Must specify a time (in seconds) to poll.');
  }

  app.currentPoller = this;
};

app.Poller.prototype.start = function() {
  console.log('POLL: Starting...');
  app.currentPoller.fetch();
};

app.Poller.prototype.fetch = function() {
  console.log('POLL: Fetching data...');

  app.currentPoller.collection.fetch({
    success: app.currentPoller.onSuccess
  });
};

app.Poller.prototype.onSuccess = function() {
  console.log('POLL: Fetched!  (next fetch in ' + app.currentPoller.seconds + ' seconds)');

  app.currentPoller.success();

  setTimeout(app.currentPoller.fetch, app.currentPoller.seconds * 1000);
};