global.jQuery = require('jquery');
require('bootstrap');

var style = require("./public/css/style.scss");
var App = require("./app");

var app = new App();
app.start();