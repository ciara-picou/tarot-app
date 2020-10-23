class Reading < ApplicationRecord
    has_many :card_readings
    has_many :cards, through: :card_readings
end
