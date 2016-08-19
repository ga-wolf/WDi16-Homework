require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  "Home page"
  erb (:home)
end

# CREATE
get '/books/new' do
  ":books_new"
  erb (:books_new)
end

post '/books' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "INSERT INTO books (title, author, cover, price) VALUES ('#{params[:title]}', '#{params[:author]}', '#{params[:cover]}', '#{params[:price]}');"

  db.execute sql_str
  db.close

  redirect '/books'
end

# READ
get '/books' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "SELECT * FROM books;"
  @books = db.execute sql_str
  db.close

  erb (:books_index)
end

get '/books/:id' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "SELECT * FROM books WHERE id == #{params[:id]};"
  @book = db.execute(sql_str)[0]
  db.close

  erb (:books_show)
end

# UPDATE
get '/books/:id/edit' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "SELECT * FROM books WHERE id == #{params[:id]};"
  @book = db.execute(sql_str)[0]
  db.close

  erb (:books_edit)
end

post '/books/:id' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "UPDATE books SET title = '#{params[:title]}', author = '#{params[:author]}', cover = '#{params[:cover]}', price = '#{params[:price]}' WHERE id == #{params[:id]};"

  # sql = "UPDATE animals SET species='#{params[
  # :species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  db.execute sql_str
  db.close

  redirect "/books/#{params[:id]}"
end

# DELETE
get '/books/:id/delete' do
  db = SQLite3::Database.new("database.db") # Copy and paste
  db.results_as_hash = true # Copy and paste

  sql_str = "DELETE FROM books WHERE id == #{params[:id]};"
  db.execute sql_str
  db.close

  redirect '/books'
end
