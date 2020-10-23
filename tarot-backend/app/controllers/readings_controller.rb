class ReadingsController < ApplicationController
    def index
        readings = Reading.all 
        # include to include associated models
        render json: readings 
    end

    def new
        reading = reading.new
        render json: readings
    end

    def create
        reading = Reading.create
        render json: reading
    end
end

# def new
#     @hike = Hike.new
#   end

#   def create
#     params[:hike][:user_id] = session[:id].to_s
#     #byebug
#     @hike = Hike.create(hike_params)
#     redirect_to hike_path(@hike)
#   end

# private
  
#   def hike_params
#     #byebug
#     params.require(:hike).permit(:trail_id,:hike_date,:user_id)
#   end
# end