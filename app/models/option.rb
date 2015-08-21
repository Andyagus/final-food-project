class Option < ActiveRecord::Base
   belongs_to :product_component
   has_many :product_options, class_name: ProductOption
   has_many :products, through: :product_options
end
