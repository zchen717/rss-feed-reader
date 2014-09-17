App.Views.UserNew = Backbone.View.extend({
  template: JST["users/new"],
  
  events: {
    "submit form": "createUser"
  },
  
  createUser: function (event) {
    event.preventDefault();
  
    var $form = $(event.currentTarget);
    var json = $form.serializeJSON();
    var user = new App.Models.User();

    $form.find('.input').prop("disable", true);
    
    var success = function () {
      App.Models.user = user;
      
      $form.find('.input').prop("disable", false);
    };
    
    var error = function () {
      $form.find('.input').prop("disable", false);
    };
    
    user.save(json.user, {
      success: success,
      error: error
    });
  },
  
  render: function () {
    var renderedContent = this.template({ user: this.model });
    
    this.$el.html(renderedContent);
    
    return this;
  }
});