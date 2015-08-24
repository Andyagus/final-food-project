class OrdersController < ApplicationController

   def index
      @products = Product.all 
      @components = ProductComponent.all
      @options = Option.all
   end


end
