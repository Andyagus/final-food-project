class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :users
      t.decimal :sub_total
      t.decimal :grand_total
      t.timestamps null: false
    end
  end
end
