class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name
      t.string :image
      t.string :background

      t.timestamps null: false
    end
  end
end
