# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.destroy_all
Product.create([{ name: 'Sandwich'}, { name: 'Hamburger'}, { name: 'Pizza'}, {name: 'Salad'}])
ProductComponent.create ([{name: "White Bread"}, {name: "Whole Wheat Bread"}, {name: "Rye Bread"}])
Option.create([{ name: 'Grilled Chicken', price:'4.99'}, {name: 'Salami', price: '4.50'}, {name: 'Smoked Salmon', price: '6.00'},{name: 'Eggs', price: '3.99'},name: 'Lettuce', price: '.50'},             {name: 'Tomatos', price: '.50'},{name: 'Avocado', price: '.50'}, {name: 'Onions', price: '.50'}, {name: 'American Cheese', price: '.50'},{name: 'American Cheese', price: '.50'},  
{name: 'Swiss Cheese', price: '.50'},
   ])
