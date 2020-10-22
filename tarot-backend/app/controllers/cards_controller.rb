class CardsController < ApplicationController
    def index
        cards = Card.all 
        # include to include associated models
        render json: cards, include: [:keywords, :meanings] 
    end
end

# def index
#     sightings = Sighting.all
#     render json: sightings, include: [:bird, :location]
#   end