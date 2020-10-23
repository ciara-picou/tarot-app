class AddCard1ToReading < ActiveRecord::Migration[6.0]
  def change
    add_column :readings, :card1, :string
    end
end
