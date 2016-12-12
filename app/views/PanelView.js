var TableView = require("./TableView");

var PanelView = Backbone.Marionette.View.extend({
  initialize: function(options){
    this.heading = options.heading
  },
  serializeData: function(){
    return {
      "heading": this.heading
    }
  },
  tagName: 'div',
  className: 'panel panel-default',
  template: require("../templates/panel-view-template.html"),
  regions: {
    body: {
      el: '.panel-body'
    }
  },
  onRender: function(){
    this.showChildView('body', new TableView());
  }
});

module.exports = PanelView;