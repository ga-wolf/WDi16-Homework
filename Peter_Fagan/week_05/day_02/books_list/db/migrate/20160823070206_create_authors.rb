class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
    t.text :name
    t.text :nationality
    t.date :dob
    t.text :genre

    t.timestamps
    end
  end
end
