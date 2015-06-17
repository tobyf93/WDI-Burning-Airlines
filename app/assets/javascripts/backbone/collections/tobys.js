var app = app || {};

app.Tobys = Backbone.Collection.extend({
  model: app.Toby,

  url: '/planes',


  // Long Polling
  longPolling : false,

  intervalSeconds: 5,

  // initialize : function(){
  //   _.bindAll(this);
  // },

  startLongPolling : function(intervalSeconds){
    console.log('POLL: Start Long Polling');
    app.tobys.longPolling = true;
    if( intervalSeconds ){
      app.tobys.intervalSeconds = intervalSeconds;
    }
    app.tobys.executeLongPolling();
  },

  stopLongPolling : function(){
    app.tobys.longPolling = false;
  },

  executeLongPolling : function(){
    console.log('POLL: Execute');
    app.tobys.fetch().done(function() {
      console.log(app.tobys.intervalSeconds);

      console.log('POLL: Another Fetch in ' + app.tobys.intervalSeconds + ' seconds');
      if( app.tobys.longPolling ){
        setTimeout(app.tobys.executeLongPolling, app.tobys.intervalSeconds * 1000);
      }
    });
  }
});
