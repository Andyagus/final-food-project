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
//= require_tree .

$( document ).ready(function() {
      
      // $(".image-content").hide();

      // $('.white-bread').hide()
      // $('.trans-bread').hide();
      // $('.chicken').hide();
      $('.onion').hide();
      $('.bread-bite').hide()

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


            // img = "white-bread.png"
            // .append("<img class=" + "image-content" + "src='" + img + "'>")

  
      //homepage
      $('#inner-shield-1').click(function() {
            $('#inner-shield-1').animate( { left: '-1400' }, 1000)
            $('#inner-shield-2').animate( { left: '0' }, 1000);
            $('#inner-shield-3').animate( { left: '1400' }, 1000);
      });

    




    //store  user options
      window.choices = []
      $(document).on('click', '.choice', function(){
        choice = $(this).data('choice');
        choices.push(choice);
      })

      function sanitizeChoice(choice){
       return choice.replace(/\s/g, '-').toLowerCase();

      }

      function getImgUrl(choice) {
        return sanitizeChoice(choice) + '.png';
      }

    //brings out chosen photo
      $(document).on('click', '.choice', function(){
        console.log($(this).parents().find('.shield').attr('id'));
        choice = $(this).data('choice');
        imgUrl = getImgUrl(choice);

        //$("<img class='animation ' " + sanitizeChoice(choice) + " src='" + imgUrl + "'>").appendTo('#content-wrapper');
        $("<img class='animation " + 'a' + sanitizeChoice(choice) + " ' src=' " + imgUrl + " '>").appendTo('#content-wrapper');
        TweenMax.to(".asandwich", 3, {y:30, x:335, scale:0.9, ease:Bounce.easeOut});
        TweenMax.to(".awhite-bread", 3, {y:150, opacity:1});
        TweenMax.to(".agrilled-chicken", 3, {y:250, rotation:68, opacity:1});

      })




    // base options 

        sandwichBaseOptions = ["White Bread", "Whole Wheat Bread", "Rye Bread"];
        hamburgerBaseOptions = ["Whole Wheat Bun", "Brioche Bun", "Sesame Bun"];
        pizzaBaseOptions = ["Small Pie", "Medium Pie", "Large Pie"];
        saladBaseOptions = ["Romaine Lettuce", "Baby Spinach", "Arugula"];

        $( ".sandwich" ).click(function() {
          setTimeout(function(){ 
            $('.sandwich-base').show();
            $('#inner-shield-2').animate( { left: '-1400' }, 1000);
            $('#inner-shield-3').animate( { left: '0' }, 1000);
            $('#inner-shield-4').animate( { left: '1400' }, 1000);
          }, 4000); 


            for (var option of sandwichBaseOptions){
              $('ul.sandwich-base').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });

        $( ".hamburger" ).click(function() {
            $('.hamburger-base').show();
            $('#inner-shield-2').animate( { left: '-1400' }, 1000);
            $('#inner-shield-3').animate( { left: '0' }, 1000);
            $('#inner-shield-4').animate( { left: '1400' }, 1000);
            
            for (var option of hamburgerBaseOptions){
              $('ul.hamburger-base').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });


        $( ".salad" ).click(function() {
            $('.salad-base').show();
            $('#inner-shield-2').animate( { left: '-1400' }, 1000);
            $('#inner-shield-3').animate( { left: '0' }, 1000);
            $('#inner-shield-4').animate( { left: '1400' }, 1000);

            for (var option of saladBaseOptions){
              $('ul.salad-base').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });


        $( ".pizza" ).click(function() {
            $('.pizza-base').show();
            $('#inner-shield-2').animate( { left: '-1400' }, 1000);
            $('#inner-shield-3').animate( { left: '0' }, 1000);
            $('#inner-shield-4').animate( { left: '1400' }, 1000);
            for (var option of pizzaBaseOptions){
              $('ul.pizza-base').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });


      // protein options    

      sandwichProteinOptions = ["Grilled Chicken", "Smoked Salmon", "Eggs", "Salami"];
      hamburgerProteinOptions = ["Beef", "Grilled Chicken", "Veggie"];
      saladProteinOptions = ["Roasted Chicken", "Steak", "Tofu", "Hard Boiled Eggs"];
      pizzaProteinOptions = ["Pepperoni", "Grilled Chicken"];

        $( ".sandwich-base" ).click(function() {
          setTimeout(function(){ 
            $('.sandwich-protein').show();
            $('#inner-shield-3').animate( { left: '-1400' }, 1000);
            $('#inner-shield-4').animate( { left: '0' }, 1000);
            $('#inner-shield-5').animate( { left: '1400' }, 1000);
          }, 3000);


            for (var option of sandwichProteinOptions){
              $('ul.sandwich-protein').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });


        $( ".hamburger-base" ).click(function() {
            $('.hamburger-protein').show();
            $('#inner-shield-3').animate( { left: '-1400' }, 1000);
            $('#inner-shield-4').animate( { left: '0' }, 1000);
            $('#inner-shield-5').animate( { left: '1400' }, 1000);

            for (var option of hamburgerProteinOptions){
              $('ul.hamburger-protein').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });

        $( ".salad-base" ).click(function() {
            $('.salad-protein').show();
            $('#inner-shield-3').animate( { left: '-1400' }, 1000);
            $('#inner-shield-4').animate( { left: '0' }, 1000);
            $('#inner-shield-5').animate( { left: '1400' }, 1000);

            for (var option of saladProteinOptions){
              $('ul.salad-protein').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        })


        $( ".pizza-base" ).click(function() {
            $('.pizza-protein').show();
            $('#inner-shield-3').animate( { left: '-1400' }, 1000);
            $('#inner-shield-4').animate( { left: '0' }, 1000);
            $('#inner-shield-5').animate( { left: '1400' }, 1000);

            for (var option of pizzaProteinOptions){
              $('ul.pizza-protein').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        })


       // toppings options    
      
      sandwichToppingOptions = ["Lettuce", "Tomato", "Avocado","American Cheese", "Swiss Cheese", "Onions"];
      hamburgerToppingOptions = ["Lettuce", "Tomato", "Pickles", "American Cheese"];
      saladToppingOptions = ["Olives", "Brocolli", "Carrotts", "American Cheese", "Mozzarella Cheese"];
      pizzaToppingOptions = ["Mushrooms", "Olives", "Peppers"];
        
        $( ".sandwich-protein" ).click(function() {
            
          setTimeout(function(){ 
            $('.sandwich-topping').show();
            $('#inner-shield-4').animate( { left: '-1400' }, 1000);
            $('#inner-shield-5').animate( { left: '0' }, 1000);
            $('#inner-shield-6').animate( { left: '1400' }, 1000);
          }, 4000); 

            for (var option of sandwichToppingOptions){
              $('ul.sandwich-topping').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });
        
        $( ".hamburger-protein" ).click(function() {
            $('.hamburger-topping').show();
            $('#inner-shield-4').animate( { left: '-1400' }, 1000);
            $('#inner-shield-5').animate( { left: '0' }, 1000);
            $('#inner-shield-6').animate( { left: '1400' }, 1000);

            for (var option of hamburgerToppingOptions){
              $('ul.hamburger-topping').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });

        $( ".salad-protein" ).click(function() {
            $('.salad-topping').show();
            $('#inner-shield-4').animate( { left: '-1400' }, 1000);
            $('#inner-shield-5').animate( { left: '0' }, 1000);
            $('#inner-shield-6').animate( { left: '1400' }, 1000);

            for (var option of saladToppingOptions){
              $('ul.salad-topping').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });


        $( ".pizza-protein" ).click(function() {
            $('.pizza-topping').show();
            $('#inner-shield-4').animate( { left: '-1400' }, 1000);
            $('#inner-shield-5').animate( { left: '0' }, 1000);
            $('#inner-shield-6').animate( { left: '1400' }, 1000);

            for (var option of pizzaToppingOptions){
              $('ul.pizza-topping').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });

       // condiments options    

      sandwichCondimentOptions = ["Ketchup", "Mayonnaise", "Mustard"];
      hamburgerCondimentOptions = ["Ketchup", "Mayonnaise", "Mustard"];
      saladCondimentOptions = ["Blue Cheese Dressing", "Ranch Dressing", "Belsamic Vinegerette"];
      pizzaCondimentOptions = ["Ketchup", "Hot Sauce", "Red Pepper", "Garlic"];

        $( ".sandwich-topping" ).click(function() {
            
            $('.sandwich-condiment').show();
            $('#inner-shield-5').animate( { left: '-1400' }, 1000);
            $('#inner-shield-6').animate( { left: '0' }, 1000);
            $('#inner-shield-7').animate( { left: '1400' }, 1000);
            console.log("animated5")

            for (var option of sandwichCondimentOptions){
              $('ul.sandwich-condiment').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });      

        $( ".hamburger-topping" ).click(function() {
            $('.hamburger-condiment').show();
            $('#inner-shield-5').animate( { left: '-1400' }, 1000);
            $('#inner-shield-6').animate( { left: '0' }, 1000);
            $('#inner-shield-7').animate( { left: '1400' }, 1000);

            for (var option of hamburgerCondimentOptions){
              $('ul.hamburger-condiment').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });  

        $( ".salad-topping" ).click(function() {
            $('.salad-condiment').show();
            $('#inner-shield-5').animate( { left: '-1400' }, 1000);
            $('#inner-shield-6').animate( { left: '0' }, 1000);
            $('#inner-shield-7').animate( { left: '1400' }, 1000);

            for (var option of saladCondimentOptions){
              $('ul.salad-condiment').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });

        $( ".pizza-topping" ).click(function() {
            $('.pizza-condiment').show();
            $('#inner-shield-5').animate( { left: '-1400' }, 1000);
            $('#inner-shield-6').animate( { left: '0' }, 1000);
            $('#inner-shield-7').animate( { left: '1400' }, 1000);

            for (var option of pizzaCondimentOptions){
              $('ul.pizza-condiment').append("<li class='choice' data-choice='" + option + "'>" + option + "</li>");
            }
            $(this).off('click');
        });        

        // review your order    

        $( ".sandwich-condiment" ).click(function() {
            $('#inner-shield-6').animate( { left: '-1400' }, 1000);
            $('#inner-shield-7').animate( { left: '0' }, 1000);
            document.getElementById("review-food").innerHTML = choices[0];
            document.getElementById("review-base").innerHTML = choices[1];
            document.getElementById("review-protein").innerHTML = choices[2];
            document.getElementById("review-topping").innerHTML = choices[3];
            document.getElementById("review-condiment").innerHTML = choices[4];        
            console.log("animated4")
        
        });      


        $( ".hamburger-condiment" ).click(function() {
            $('#inner-shield-6').animate( { left: '-1400' }, 1000);
            $('#inner-shield-7').animate( { left: '0' }, 1000);
            document.getElementById("review-food").innerHTML = choices[0];
            document.getElementById("review-base").innerHTML = choices[1];
            document.getElementById("review-protein").innerHTML = choices[2];
            document.getElementById("review-topping").innerHTML = choices[3];
            document.getElementById("review-condiment").innerHTML = choices[4];        
        });    

        $( ".salad-condiment" ).click(function() {
            $('#inner-shield-6').animate( { left: '-1400' }, 1000);
            $('#inner-shield-7').animate( { left: '0' }, 1000);
            document.getElementById("review-food").innerHTML = choices[0];
            document.getElementById("review-base").innerHTML = choices[1];
            document.getElementById("review-protein").innerHTML = choices[2];
            document.getElementById("review-topping").innerHTML = choices[3];
        });    

        $( ".pizza-condiment" ).click(function() {
            $('#inner-shield-6').animate( { left: '-1400' }, 1000);
            $('#inner-shield-7').animate( { left: '0' }, 1000);

            document.getElementById("review-food").innerHTML = choices[0];
            document.getElementById("review-base").innerHTML = choices[1];
            document.getElementById("review-protein").innerHTML = choices[2];
            document.getElementById("review-topping").innerHTML = choices[3];
            document.getElementById("review-condiment").innerHTML = choices[4];

        
        });                      

});
