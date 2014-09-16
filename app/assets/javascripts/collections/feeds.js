App.Collections.Feeds = Backbone.Collection.extend({
  model: App.Models.Feed,
  
  url: "api/feeds",
  
  getOrFetch: function (id) {
    var model = this.get(id);
    var collection = this;
    
    if (model) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      model.fetch({
        success: function () { collection.add(model); }
      });
    }
    
    return model;
  }
});

App.Collections.feeds = new App.Collections.Feeds();