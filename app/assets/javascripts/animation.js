$( document ).ready(function() {

   TweenMax.to(".white-bread", 3, {x:450, y:100, ease:Bounce.easeOut});
   TweenMax.staggerTo(".chicken1", 1.5, {opacity:1, x: 400, y:60, rotation: 90, delay:2, scale:.7},.2);
   TweenMax.staggerTo(".chicken2", 1.5, {opacity:1, x: 400, y:60, rotation: 170, delay:1, scale:.7},.2);
   TweenMax.from(".light-onion", .3, {opacity:0, x:450, y:200, delay:4 });
   TweenMax.from(".dark-onion", .3, {opacity:0, x:450, y:190, delay:4.1 });
   TweenMax.from(".dark-onion2", .3, {opacity:0, x:450, y:150, delay:4.2 });
   TweenMax.from(".light-onion2", .3, {opacity:0, x:450, y:150, delay:4.3 });
   TweenMax.from(".dark-onion3", .3, {opacity:0, x:450, y:150, delay:4.4 });
   TweenMax.from(".light-onion3", .3, {opacity:0, x:450, y:150, delay:4.5 });
   TweenMax.to(".trans-bread", 1, {x:450, y:100,opacity:.8, delay:4.8});
   TweenMax.to('.chicken1, .chicken2, .light-onion3, .light-onion2, .light-onion, .dark-onion3, .dark-onion2, .dark-onion, .trans-bread', 1,{
      opacity:0, delay:6 });
   TweenMax.to(".white-bread", 3, 
      {scale:.3, delay:7});
   $('white-bread').hide();

      $('.title').textillate({

         initialDelay: 4800,


         // in animation settings
         in: {
          // set the effect name
          effect: 'bounceInUp',


          // set to true to animate all the characters at the same time
          sync: true,

         }
      });

});


   // window.onload = function() {
   //   var logo = document.getElementById("logo");
   //    TweenLite.from(logo, 2, {opacity:0, left:"1000px"});
   // }

