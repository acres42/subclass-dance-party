var starDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="star-five"></span>') || this.$node;
  this.$node.addClass('star-five');

};

starDancer.prototype = Object.create(makeDancer.prototype);
starDancer.prototype.constructor = starDancer;

starDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('bounce');

  this.$node.on('mouseover', function() {
    $('.dancer.star-five').animate({
      width: '70%',
      opacity: 0.4
    }, 1500);
  });
};

makeDancer.prototype.lineUp = function() {
  this.$node.toggle(true);
  this.$node.animate({
    left: '200px'
  }, 5000);
};