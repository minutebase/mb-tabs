import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "tabs__panel",
  classNameBindings: "activeClass",

  name:     null,
  _manager: null,

  activeClass: function() {
    if (this.get("isActive")) {
      return "tabs__panel--active";
    }
  }.property("isActive"),

  isActive: function() {
    return this.get("name") === this.get("_manager.active");
  }.property("name", "_manager.active"),

  setupManager: function() {
    var manager = this.nearestWithProperty("isTabPane");
    this.set("_manager", manager);
  }.on("init")
});