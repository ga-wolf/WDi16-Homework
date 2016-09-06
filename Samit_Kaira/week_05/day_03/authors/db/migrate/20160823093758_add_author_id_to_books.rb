class AddAuthorIdToBooks < ActiveRecord::Migration
  def change
    # add_column table_name, field_name, field_type
    add_column :books, :author_id, :integer
  end
end
