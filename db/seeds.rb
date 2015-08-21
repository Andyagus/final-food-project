# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.destroy_all
Product.create([{ name: 'Sandwich'}, { name: 'Hamburger'}, { name: 'Pizza'}, {name: 'Salad'}])

User.create(email: "pb@test.com", fname: "Pran", lname: "Bunsee")

ProductComponent.create(name: "Base")
ProductComponent.create(name: "Toppings")
ProductComponent.create(name: "Sauce")
ProductComponent.create(name: "Protein")

Option.create(name: "Thin and Crispy", price: 6.99, product_component_id: 1)
Option.create(name: "Chicago Deep Dish", price: 12.99, product_component_id: 1)

ProductOption.create(product_id: 3, option_id: 1)
ProductOption.create(product_id: 3, option_id: 2)

User.find(1).orders.create(sub_total: 45.99)
User.find(1).orders.create(sub_total: 98.99)

Order.create(user_id: 1, sub_total: 99)
OrderItem.create(product_id: 1, option_id: 1, sub_total: 300)

User.find(1).orders.find(1).order_items.create(product_id: 3, product_component_id: 1, option_id: 2, sub_total: 34.99)



