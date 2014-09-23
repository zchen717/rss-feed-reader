App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow",
    "users": "users"
  },
  
  initialize: function (options) {
    this.$el = options.$el;
  },
  
  feedShow: function (id) {
    var feed = App.Collections.feeds.getOrFetch(id);
    
    var show = new App.Views.FeedShow({
      model:      feed,
      collection: App.Collections.feeds
    });
    
    this._swapView(show);
  },
  
  users: function () {
    var user = new App.Models.User();
    
    var newUser = new App.Views.UserNew({
      model: user
    });
    
    this._swapView(newUser);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$el.html(view.render().$el);
    this.currentView = view;
  }
});