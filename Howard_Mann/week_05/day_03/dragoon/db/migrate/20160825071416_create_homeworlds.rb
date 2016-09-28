class CreateHomeworlds < ActiveRecord::Migration
  def change
    create_table :homeworlds do |t|
      t.string :name
      t.text :background
      t.text :image

      t.timestamps null: false
    end
  end
end
