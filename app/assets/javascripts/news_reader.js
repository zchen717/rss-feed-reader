window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    App.Routers.appRouter = new App.Routers.AppRouter($('body') );
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.initialize();
});
