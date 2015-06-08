import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "tabs__tab",
  classNameBindings: "activeClass",

  name:     null,
  _manager: null,

  activeClass: Ember.computed("isActive", function() {
    if (this.get("isActive")) {
      return "tabs__tab--active";
    }
  }),

  isActive: Ember.computed("name", "_manager.active", function() {
    return this.get("name") === this.get("_manager.active");
  }),

  setupManager: Ember.on("init", function() {
    var manager = this.nearestWithProperty("isTabPane");
    this.set("_manager", manager);

    // default active tab to the first one if none others are set
    // TODO - should this be here or on the manager itself?
    if (!manager.get("active")) {
      manager.set("active", this.get("name"));
    }
  }),

  setActiveTabOnClick: Ember.on("click", function() {
    this.get("_manager").set("active", this.get("name"));
  })

});