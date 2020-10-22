class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :number
      t.string :arcana
      t.string :suit
      t.string :img
      t.string :archetype
      t.string :hebrew_alphabet
      t.string :numerology
      t.string :elemental
      t.string :mythical_spiritual
      t.string :astrology
      t.string :affirmation
      
    end
  end
end
