var Marionette = require('marionette');
var TestView = require("./views/TestView")

var Controller = Marionette.Object.extend({
  initialize: function(options){
    this.app = options.app
  },
  root: function(){
    console.log('root route')
    this.app.view.showChildView('main', new TestView());
  }
});

module.exports = Controller;