class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.references :products
      t.references :product_components
      t.references :options
      t.integer :sub_total
      t.timestamps null: false
    end
  end
end
