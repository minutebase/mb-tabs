import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  name:    null,
  manager: null,

  isActive: Ember.computed("name", "manager.active", function() {
    return this.get("name") === this.get("manager.active");
  })
});