var Drake = function(top, left, timeBetweenSteps) {
  flipDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="Drake"></span>');


  this.step();
};

Drake.prototype = Object.create(flipDancer.prototype);
Drake.prototype.constructor = Drake;

Drake.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
