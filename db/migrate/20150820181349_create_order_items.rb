class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.references :order
      t.references :product
      t.references :product_component
      t.references :option
      t.decimal :sub_total
      t.timestamps null: false
    end
  end
end
