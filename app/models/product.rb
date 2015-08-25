class Product < ActiveRecord::Base
   has_many :orders, through: :order_products, class_name: OrderProduct
   has_many :product_options, class_name: ProductOption
   has_many :options, through: :product_options
end