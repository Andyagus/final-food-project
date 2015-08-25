class AddOptionsAndComponentsToProduct < ActiveRecord::Migration
  def change
      add_column :products, :option, :string
      add_column :products, :component, :string
  end
end
