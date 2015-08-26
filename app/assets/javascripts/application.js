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


//= require 'greensock/TweenLite'
//= require 'greensock/easing/EasePack'
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
      
      $(".image-content").hide();

      // $('.white-bread').hide()
      // $('.trans-bread').hide();
      // $('.chicken').hide();
      // $('.onion').hide();
      // $('.bread-bite').hide()

      // window.choices = []
      // $(".main-choice").click(function(){
      //   choice = $(this).data('choice');
      //   choices.push(choice);
      //   $(this).off('click');
      // })

      // function startbread(){
      //    $('.white-bread').show()
      //    $('.white-bread').addClass('fadeInDown');
      // }

      // function startchicken(){
      //    $('.chicken').show()         
      //    $('.chicken').addClass('animated slideInUp');
      // }
      
      // function startonion(){
      //    $('.onion').show()               
      //    $('.onion').addClass('animated slideInRight');
      // }

      // function closebread(){
      //  $('.trans-bread').show();
      //  $('.trans-bread').addClass('animated slideInLeft');
      // }

      // setTimeout(startbread, 0);
      // setTimeout(startchicken, 2000);  
      // setTimeout(startonion, 3000);            
      // setTimeout(closebread, 4000);

      //    $(function () {
      //        $('.tlt').textillate({
      //            initialDelay: 4000
      //        });
      //    })



    //hide base options until click on food item
        $('.sandwich-base').hide()        
        $('.hamburger-base').hide()
        $('.salad-base').hide()
        $('.pizza-base').hide()

        sandwichBaseOptions = ["White bread", "Wheat bread", "Rye"];

        $( ".sandwich" ).click(function() {
            $('.sandwich-base').show();
            $('#inner-shield-2').animate( { left: '-1400' }, 1000);
            $('#inner-shield-3').animate( { left: '0' }, 1000);
            for (var option of sandwichBaseOptions){
              $('ul.sandwich-base').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');

        });

        $( ".hamburger" ).click(function() {
            $('.hamburger-base').show()
            $(this).off('click');
        });

        $( ".salad" ).click(function() {
            $('.salad-base').show()
           $(this).off('click');

        });

        $( ".pizza" ).click(function() {
            $('.pizza-base').show()
        $(this).off('click');

        });                        


    //store main user options
      window.choices = []
      $(document).on('click', '.choice', function(){
        choice = $(this).data('choice');
        choices.push(choice);
      })

});



  
