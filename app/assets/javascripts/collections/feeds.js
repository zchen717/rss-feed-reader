App.Collections.Feeds = Backbone.Collection.extend({
  model: App.Models.Feed,
  
  url: "api/feeds"
});

App.Collections.feeds = new App.Collections.Feeds();