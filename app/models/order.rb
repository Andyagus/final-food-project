class Order < ActiveRecord::Base
   has_many :products, through: :order_products
   belongs_to :user
end
