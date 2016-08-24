class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.text :released
      t.text :songs
      t.text :image

      t.timestamps null: false
    end
  end
end
