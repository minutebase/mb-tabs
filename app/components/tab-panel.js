import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "tabs__panel",
  classNameBindings: "activeClass",

  name:     null,
  _manager: null,

  activeClass: Ember.computed("isActive", function() {
    if (this.get("isActive")) {
      return "tabs__panel--active";
    }
  }),

  isActive: Ember.computed("name", "_manager.active", function() {
    return this.get("name") === this.get("_manager.active");
  }),

  setupManager: Ember.on("init", function() {
    var manager = this.nearestWithProperty("isTabPane");
    this.set("_manager", manager);
  })
});