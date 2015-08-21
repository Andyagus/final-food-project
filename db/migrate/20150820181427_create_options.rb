class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :name
      t.decimal :price
      t.references :product_component
      t.timestamps null: false
    end
  end
end
