class AddImageToUnits < ActiveRecord::Migration
  def change
    add_column :units, :image, :text
  end
end
