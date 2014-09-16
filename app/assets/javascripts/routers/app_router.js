App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
  },
  
  initialize: function ($el) {
    this.$el = $el;
  },
  
  feedsIndex: function () {
    App.Collections.feeds.fetch();
    
    var index = new App.Views.FeedsIndex({
      collection: App.Collections.feeds
    });
    
    this._swapView(index);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$el.html(view.render().$el);
    this.currentView = view;
  },
});