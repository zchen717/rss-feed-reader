App.Views.FeedNew = Backbone.View.extend({
  template: JST["feeds/new"],
  
  events: {
    "submit form": "newFeed"
  },
  
  render: function () {
    var renderedContent = this.template();
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  newFeed: function (event) {
    event.preventDefault();
    
    var view = this;
    var $form = $(event.currentTarget);
    var json = $form.serializeJSON();
    var feed = new App.Models.Feed();

    $form.find('.input').prop("disable", true);
    
    var success = function () {
      App.Collections.feeds.add(feed);
    
      $form.find('.input').prop("disable", false);
    };
    
    var error = function () {
      $form.find('.input').prop("disable", false);
    };
    
    feed.save(json.feed, {
      success: success,
      error: error
    });
  }
});
