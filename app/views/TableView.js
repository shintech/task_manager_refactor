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
});

module.exports = TableView;