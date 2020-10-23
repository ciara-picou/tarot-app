class CardReadingsController < ApplicationController
    def index
        cardreadings = CardReading.all 
        # include to include associated models
        render json: card_readings, include: [:cards, :readings] 
    end
end
