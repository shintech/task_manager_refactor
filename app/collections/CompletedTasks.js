var Task = require("../models/Task");

var CompletedTasks = Backbone.Collection.extend({
  model: Task,
  url: 'http://shintech.ninja:8000/api/tasks/completed'
});

module.exports = CompletedTasks;