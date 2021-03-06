var Marionette = require('marionette');
var PanelView = require("./views/PanelView");
var TasksView = require("./views/TasksView");
var TableView = require("./views/TableView");
var ActiveTasks = require("./collections/ActiveTasks");
var CompletedTasks = require("./collections/CompletedTasks");

var Controller = Marionette.Object.extend({
  initialize: function(options){
    
    this.app = options.app;
    
    var tableView = new TableView();
    var panelView = new PanelView({ heading: 'Tasks' });
    var activeTasks = new ActiveTasks();
    var completedTasks = new CompletedTasks();
    
    activeTasks.fetch({
      success: function(data){
        console.log('activeTasks fetch success...');
       }
    });
  
    completedTasks.fetch({
      success: function(data){
        console.log('completedTasks fetch success...');
      }
    });
    
    this.options.activeTasks = activeTasks;
    this.options.completedTasks = completedTasks;
    this.options.panelView = panelView;    
    this.options.tableView = tableView;
    
    this.app.view.showChildView('main', this.options.panelView);
    this.options.panelView.showChildView('body', this.options.tableView);

  },
  active: function(){
    console.log('active route');
    this.options.tableView.showChildView('body', new TasksView({collection: this.options.activeTasks}));
  },
  
  completed: function(){
    console.log('completed route');
    this.options.tableView.showChildView('body', new TasksView({collection: this.options.completedTasks}));
  }
});

module.exports = Controller;