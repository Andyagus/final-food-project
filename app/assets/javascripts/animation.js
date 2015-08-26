$( document ).ready(function() {

    $('h1').click(function() {
            $('#inner-shield-1').animate( { left: '-1400' }, 1000);
            $('#inner-shield-2').animate( { left: '0' }, 1000);
            console.log("hello");
      });

});


   // window.onload = function() {
   //   var logo = document.getElementById("logo");
   //    TweenLite.from(logo, 2, {opacity:0, left:"1000px"});
   // }

