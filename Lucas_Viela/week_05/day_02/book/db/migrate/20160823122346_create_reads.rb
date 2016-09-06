class CreateReads < ActiveRecord::Migration
  def change
    create_table :reads do |t|
      t.string :name
      t.string :author
      t.integer :year

      t.timestamps null: false
    end
  end
end
