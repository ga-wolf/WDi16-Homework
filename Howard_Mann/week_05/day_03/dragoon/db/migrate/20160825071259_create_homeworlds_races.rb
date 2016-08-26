class CreateHomeworldsRaces < ActiveRecord::Migration
  def change
    create_table :homeworlds_races, :id => false do |t|
      t.integer :homeworld_id
      t.integer :race_id
    end
  end
end
