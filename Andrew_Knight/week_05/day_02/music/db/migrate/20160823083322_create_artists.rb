class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.text :nationality
      t.text :image

      t.timestamps null: false
    end
  end
end
