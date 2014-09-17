App.Views.EntryShow = Backbone.View.extend({
  template: JST["entries/show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var renderedContent = this.template({ 
      entry: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
});