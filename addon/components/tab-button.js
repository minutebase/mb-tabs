import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: "activeClass",

  name:    null,
  manager: null,

  "active-class": null,

  activeClass: Ember.computed("isActive", "active-class", "manager.active-class", {
    get() {
      if (this.get("isActive")) {
        return this.get("active-class") || this.get("manager.active-class");
      }
    }
  }),

  isActive: Ember.computed("name", "manager.active", {
    get() {
      return this.get("name") === this.get("manager.active");
    }
  }),

  click() {
    this.get("manager").send("select", this.get("name"));
  }

});