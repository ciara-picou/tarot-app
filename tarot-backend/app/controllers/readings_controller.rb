class ReadingsController < ApplicationController
    def index
        readings = Reading.all 
        # include to include associated models
        render json: readings 
    end

    def new
        reading = Reading.new
        render json: readings
    end

    def create
        reading = Reading.create(card1: reading_params[:card1], card2: reading_params[:card2], card3: reading_params[:card3], comment: reading_params[:comment])
        
        render json: reading
    end

    # def edit
    #     @trail_list = TrailList.find(params[:id])
    #     @trails = Trail.all
    # end


    def update
        reading = Reading.find(params[:id])
        reading.update(reading_params)
        render json: reading
    end

    def destroy
        reading = Reading.find(params[:id])
        reading.destroy
        render json: reading
    end
private
  def reading_params
    #byebug
    params.require(:reading).permit(:card1,:card2,:card3, :comment)
    
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