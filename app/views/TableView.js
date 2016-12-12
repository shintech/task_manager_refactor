var TasksView = require("./TasksView");

var TableView = Backbone.Marionette.View.extend({
  tagName: 'table',
  className: 'table',
  template: require("../templates/table-view-template.html"),
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender: function(){
    this.showChildView('body', new TasksView({collection: this.collection}));
  }
});

module.exports = TableView;