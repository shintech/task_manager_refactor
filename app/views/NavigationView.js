var NavigationView = Backbone.Marionette.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-inverse',
  template: require("../templates/navigation-view-template.html")
});

module.exports = NavigationView;