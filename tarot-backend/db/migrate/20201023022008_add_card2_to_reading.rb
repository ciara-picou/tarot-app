
class AddCard2ToReading < ActiveRecord::Migration[6.0]
  def change
    add_column :readings, :card2, :string
    end
end