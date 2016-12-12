var TestView = Backbone.Marionette.View.extend({
  tagName: 'p',
  template: _.template("hello")
});

module.exports = TestView;