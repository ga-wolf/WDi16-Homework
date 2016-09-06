require 'sqlite3'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/pry' do
  binding.pry
end

get '/breeds' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_breeds = db.execute "SELECT * FROM breeds;"
  db.close

  erb :breeds_index
end

get '/breeds/new' do
  erb :breeds_new
end

post '/breeds' do
  sql = "INSERT INTO breeds (breed, image, type, description) VALUES ('#{params[:breed]}', '#{params[:image]}', '#{params[:type]}', '#{params[:description]}');"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect '/breeds'
end

get '/breeds/:id/edit' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @breed = db.execute( "SELECT * FROM breeds WHERE id == #{params[:id]};" ).first
  db.close
  erb :breeds_edit
end

post '/breeds/:id' do
  sql = "UPDATE breeds SET breed = '#{params[:breed]}', image = '#{params[:image]}', type = '#{params[:type]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect "/breeds/#{params[:id]}"
end

get '/breeds/:id/delete' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.execute "DELETE FROM breeds WHERE id == #{params[:id]};"
  db.close

  redirect "/breeds"
end


get '/breeds/:id' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @breed = db.execute( "SELECT * FROM breeds WHERE id == #{params[:id]};" ).first
  db.close

  erb :breeds_show
end
