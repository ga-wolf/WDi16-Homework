class CreateUnits < ActiveRecord::Migration
  def change
    create_table :units do |t|
      t.string :name
      t.integer :race_id
      t.integer :weapon_id
      t.timestamps null: false
    end
  end
end
