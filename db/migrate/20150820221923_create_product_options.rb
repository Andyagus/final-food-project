class CreateProductOptions < ActiveRecord::Migration
  def change
    create_table :product_options do |t|
      t.belongs_to :products
      t.belongs_to :options
      t.timestamps null: false
    end
  end
end
