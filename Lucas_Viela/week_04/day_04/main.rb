require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do
  erb :home
end

get '/pry' do
  erb :binding.pry
end

get '/mountains' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.close
end

get '/mountains/new' do
  erb :mountains_new
end

post '/mountains' do
  sql = "INSERT INTO mountains (name, height, location, image) VALUES ('#{params[:name]}', '#{params[:height]}', '#{params[:location]}' '#{params[:image]}');"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect "/mountains"
end

get '/mountains/:id/edit' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @mountain = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" ).first
  db.close

  erb :mountains_edit
end
