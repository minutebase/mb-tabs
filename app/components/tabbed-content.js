import Ember from 'ember';

export default Ember.Component.extend({

  active: null,

  "active-class": "active",

  actions: {
    select(tab) {
      this.sendAction("on-change", tab);
    }
  }

});