App.Views.FeedsIndex = Backbone.CompositeView.extend({
  template: JST["feeds/index"],
  
  events: {
    "click button.add": "addFeed"
  },
  
  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
    this.addFeed();
  },
  
  addFeed: function() {
    var feedNew = new App.Views.FeedNew();
    this.addSubview("div.new_feed", feedNew);
  },
  
  render: function () {
    var renderedContent = this.template({ feeds: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});