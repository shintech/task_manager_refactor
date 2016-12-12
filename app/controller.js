var Marionette = require('marionette');
var TableView = require("./views/TableView");

var ActiveTasks = require("./collections/ActiveTasks");
var CompletedTasks = require("./collections/CompletedTasks");

var Controller = Marionette.Object.extend({
  initialize: function(options){
    
    this.app = options.app;
    
    var tableView = new TableView();
    
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
    this.options.tableView = tableView;    
  
  },
  
  active: function(){
    console.log('active route');
    this.app.view.showChildView('main', new TableView({collection: this.options.activeTasks}));
  },
  
  completed: function(){
    console.log('completed route');
    this.app.view.showChildView('main', new TableView({collection: this.options.completedTasks}));
  }
});

module.exports = Controller;