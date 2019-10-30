var flipDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="flipDancer"></span>');
  var max = 1800;
  var randomInt = Math.floor(Math.random() * Math.floor(max));
  // this.$node.animate(
  //   {left: randomInt.toString().concat('px')}
  // );
  // this.$node.animate(
  //   {top: '10px'}
  // );
  // this.$node.animate(
  //   {right: Math.floor(Math.random() * Math.floor(max).toString().concat('px'))}
  // );
  // this.$node.animate(
  //   {top: '800px'}
  // );
  // this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
flipDancer.prototype = Object.create(makeDancer.prototype);
flipDancer.prototype.constructor = flipDancer;

flipDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


};

