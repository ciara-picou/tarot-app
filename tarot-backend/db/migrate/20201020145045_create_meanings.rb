class CreateMeanings < ActiveRecord::Migration[6.0]
  def change
    create_table :meanings do |t|
      t.integer :card_id
      t.string :light_shadow
     
      t.string :content

      t.timestamps
    end
  end
end
