import Ember from 'ember';

export default Ember.Controller.extend({
  active: "one",

  actions: {
    changeTab(tab) {
      this.set("active", tab);
    }
  }
});