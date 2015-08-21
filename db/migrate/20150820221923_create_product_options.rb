class CreateProductOptions < ActiveRecord::Migration
  def change
    create_table :product_options do |t|
      t.references :product
      t.references :option
      t.timestamps null: false
    end
  end
end
