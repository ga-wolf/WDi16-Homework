class AddColumnsToRaces < ActiveRecord::Migration
  def change
    add_column :races, :image, :text
    add_column :races, :homeworld, :text
    add_column :races, :description, :text
    add_column :races, :leader, :text
  end
end
