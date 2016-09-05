class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.text :image
      t.text :background

      t.integer :race_id
      t.integer :weapon_id

      t.timestamps null: false
    end
  end
end
