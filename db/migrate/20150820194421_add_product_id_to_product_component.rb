class AddProductIdToProductComponent < ActiveRecord::Migration
  def change
   remove_column :product_components, :product_id
  end
end
