class CreateKeywords < ActiveRecord::Migration[6.0]
  def change
    create_table :keywords do |t|
      t.integer :card_id
      t.string :content

      t.timestamps
    end
  end
end
