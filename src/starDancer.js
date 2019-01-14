var starDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
 // this.$node = $('<span class="star-five"></span>') || this.$node;
 this.$node.addClass("star-five");
   var starDancer = this;
    this.$node.on('mouseover', function() {
      // self.$node.stop();
    //  console.log('josh rulz');
   //   starDancer.$node.rotate({ count:4, duration:0.2, easing:'ease-out' });
    var styleSettings = {
    height: 80,
    width: 80
  };
    starDancer.$node.css(styleSettings);
    });

};

starDancer.prototype = Object.create(makeDancer.prototype);
starDancer.prototype.constructor = starDancer;

starDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
   this.$node.toggle('bounce');

 };

 makeDancer.prototype.lineUp = function(){
  this.$node.toggle(true);
  this.$node.animate({left: "200px"}, 3000);
};



