
class AddCard3ToReading < ActiveRecord::Migration[6.0]
  def change
    add_column :readings, :card3, :string
    end
end