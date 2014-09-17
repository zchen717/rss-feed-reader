App.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["feeds/show"],
  
  events : {
    "click button.refresh": "refresh",
    "click button.delete": "delete"
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(this.model.entries(), "add", this.addEntry.bind(this))
    
    this.model.entries().each(this.addEntry.bind(this));
  },
  
  addEntry: function(entry) {
    var entryShow = new App.Views.EntryShow({ model: entry });
    this.addSubview("ul.entries", entryShow);
  },
  
  refresh: function (event) {
    event.preventDefault();
    
    var view = this;
    var $butt = $(event.currentTarget);
    
    $butt.prop("disable", true);
    
    this.model.fetch({
      success: function () {
        view.render();
        $butt.prop("disable", false);
      }
    });
  },
  
  delete: function (event) {
    event.preventDefault();
    
    var view = this;
    var $butt = $(event.currentTarget);
    
    $butt.prop("disable", true);
    
    this.collection.remove(this.model);
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("#", true);
      },
      error: function () {
        $butt.prop("enable", true);
      }
    });
  },
  
  render: function () {
    var renderedContent = this.template({ 
      feed:    this.model, 
      entries: this.collection 
    });
    
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  }
})