window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.$el = $('<div>').addClass("content");
    
    $('body').append(this.$el);
    
    App.Routers.appRouter = new App.Routers.AppRouter({ $el: this.$el });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.initialize();
});
