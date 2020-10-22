
     class Card < ApplicationRecord
        has_many :fortune_tellings  
        has_many :keywords 
        has_many :meanings 
        has_many :questions_to_ask  
    end

