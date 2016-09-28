class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.string :name
      t.string :image
      t.string :homeworld
      t.string :description
      t.string :leader

      t.timestamps null: false
    end
  end
end
