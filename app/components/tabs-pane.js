import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "tabs",
  classNameBindings: "orientationClass",

  // so child components can find me
  isTabPane: true,

  orientation: "horizontal",
  active:       null, // current active tab

  orientationClass: Ember.computed("orientation", function() {
    return "tabs--"+this.get("orientation");
  })

});