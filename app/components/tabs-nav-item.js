import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "tabs__tab",
  classNameBindings: "activeClass",

  name:     null,
  _manager: null,

  activeClass: function() {
    if (this.get("isActive")) {
      return "tabs__tab--active";
    }
  }.property("isActive"),

  isActive: function() {
    return this.get("name") === this.get("_manager.active");
  }.property("name", "_manager.active"),

  setupManager: function() {
    var manager = this.nearestWithProperty("isTabPane");
    this.set("_manager", manager);

    // default active tab to the first one if none others are set
    // TODO - should this be here or on the manager itself?
    if (!manager.get("active")) {
      manager.set("active", this.get("name"));
    }
  }.on("init"),

  setActiveTabOnClick: function() {
    this.get("_manager").set("active", this.get("name"));
  }.on("click")

});