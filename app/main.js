global.jQuery = require('jquery');
require('bootstrap');
var Backbone = require("backbone");
var Marionette = require('marionette');
var style = require("./public/css/style.scss");
var Router = require("./router");
var RootView = require("./views/RootView");
var App = require("./app");

var app = new App();
app.start()