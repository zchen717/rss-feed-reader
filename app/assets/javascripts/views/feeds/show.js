App.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var renderedContent = this.template({ 
      feed:    this.model, 
      entries: this.collection 
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})