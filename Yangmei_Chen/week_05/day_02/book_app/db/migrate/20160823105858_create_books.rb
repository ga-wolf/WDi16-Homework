class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :page_count
      t.date :publish_date
      t.text :image
      t.timestamps null: false
    end
  end
end
