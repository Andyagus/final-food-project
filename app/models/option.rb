class Option < ActiveRecord::Base
   has_many :product_options, class_name: ProductOption
   has_many :products, through: :product_options
end
