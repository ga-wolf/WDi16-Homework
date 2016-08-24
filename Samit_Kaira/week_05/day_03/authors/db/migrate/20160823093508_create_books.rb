class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :medium
      t.text :style
      t.text :image
    end
  end
end
