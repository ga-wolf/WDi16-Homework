# add_column :table_name, :field_name, :field_tag
class AddRaceIdToHeroes < ActiveRecord::Migration
  def change
    add_column :heros, :race_id, :integer
  end
end
