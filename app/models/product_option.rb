class ProductOption < ActiveRecord::Base
   belongs_to :product
   belongs_to :option

  validates :product, :presence => true
  validates :option, :presence => true
end
