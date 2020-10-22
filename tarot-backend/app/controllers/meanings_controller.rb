class MeaningsController < ApplicationController
    def index
        meanings = Meaning.all 
        render json: meanings 
    end
end
