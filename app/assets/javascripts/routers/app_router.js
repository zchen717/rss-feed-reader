App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow",
  },
  
  initialize: function (options) {
    this.$el = options.$el;
  },
  
  feedsIndex: function () {
    App.Collections.feeds.fetch();
    
    var index = new App.Views.FeedsIndex({
      collection: App.Collections.feeds
    });
    
    this._swapView(index);
  },
  
  feedShow: function (id) {
    var feed = App.Collections.feeds.getOrFetch(id);
    
    var show = new App.Views.FeedShow({
      model:      feed,
      collection: feed.entries()
    });
    
    this._swapView(show);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$el.html(view.render().$el);
    this.currentView = view;
  },
});