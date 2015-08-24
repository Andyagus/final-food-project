// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
      $('.white-bread').hide()
      $('.trans-bread').hide();
      $('.chicken').hide();
      $('.onion').hide();
      $('.bread-bite').hide()



      function startbread(){
         $('.white-bread').show()
         $('.white-bread').addClass('fadeInDown');
      }

      function startchicken(){
         $('.chicken').show()         
         $('.chicken').addClass('animated slideInUp');
      }
      
      function startonion(){
         $('.onion').show()               
         $('.onion').addClass('animated slideInRight');
      }

      function closebread(){
       $('.trans-bread').show();
       $('.trans-bread').addClass('animated slideInLeft');
      }

      function takebite(){
         $('.trans-bread').hide();
         $('.white-bread').hide();
         $('.bread-bite').show();
         $('.bread-bite').addClass('animated pulse');
      }


      setTimeout(startbread, 0);
      setTimeout(startchicken, 500);  
      setTimeout(startonion, 1000);            
      setTimeout(closebread, 2000);
      setTimeout(takebite, 2500);

         $(function () {
             $('.tlt').textillate({
                 initialDelay: 1200
             });
         })
});





