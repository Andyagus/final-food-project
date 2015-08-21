class AddForeignKeys < ActiveRecord::Migration
  def change
    add_foreign_key :orders, :users
    add_foreign_key :order_items, :orders
    add_foreign_key :order_items, :products
    add_foreign_key :product_options, :products
    add_foreign_key :product_options, :options
    add_foreign_key :options, :product_components
  end
end
