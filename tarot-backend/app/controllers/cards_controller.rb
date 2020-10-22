class CardsController < ApplicationController
    def index
        cards = Card.all 
        # include to include associated models
        render json: cards 
    end
end
