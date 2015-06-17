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
};

app.Poller.prototype.start = function() {
  console.log('starting to poll!');
};

