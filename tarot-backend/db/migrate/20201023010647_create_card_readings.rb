class CreateCardReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :card_readings do |t|
      t.integer :card_id
      t.integer :reading_id

      t.timestamps
    end
  end
end
