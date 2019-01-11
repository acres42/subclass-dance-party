 var snowDancer = function(top, left, timeBetweenSteps) {
   makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass('snowflake');

 };

 snowDancer.prototype = Object.create(makeDancer.prototype);
 snowDancer.prototype.constructor = snowDancer;

 snowDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);
   this.$node.fadeToggle();

   $('.dancer.snowflake').on('mouseover', function() {
     // $(".dancer.snowflake").stop();
     $(".dancer.snowflake").animate([{
       transform: 'scale(1)',
       offeset: 0
     }, {
       transform: 'scale(2)',
       offeset: 0
     }], {
       duration: 3000,
       easing: 'linear',
       delay: 10,
       iteration: Infinity,
       direction: 'alternate',
       fill: 'forwards'
     });
   });

 };

 makeDancer.prototype.lineUp = function() {
   this.$node.toggle(true);
   this.$node.animate({
     left: '200px'
   }, 5000);
 };