var snowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass("snowflake");
   var snowyDancer = this;
   this.$node.on('mouseover', function (event) {
  //  console.log("mouseover!")
    var styleSettings = {
    height: 80,
    width: 80
  };
    snowyDancer.$node.css(styleSettings);
   });

};

snowDancer.prototype = Object.create(makeDancer.prototype);
snowDancer.prototype.constructor = snowDancer;

snowDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.fadeToggle();
    //this.$node.toggle();
};

makeDancer.prototype.lineUp = function(){
  this.$node.toggle(true);
  this.$node.animate({left: "200px"}, 3000);
};
