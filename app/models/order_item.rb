class OrderItem < ActiveRecord::Base
   belongs_to :order
   belongs_to :product
   belongs_to :option
   belongs_to :product_component

   validates :order, :presence => true
   validates :product, :presence => true
   validates :option, :presence => true
   validates :product_component, :presence => true
end
