require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do
  erb :home
end

get "/pry" do
  binding.pry
  "Pry route"
end

get "/games" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_games = db.execute "SELECT * FROM games;"
  db.close
  erb :games_index
end

get "/games/new" do
  erb :games_new
end

post "/games" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "INSERT INTO games (name, genre, description, cover, screenshot) VALUES ('#{params[:name]}', '#{params[:genre]}', '#{params[:description]}', '#{params[:cover]}', '#{params[:screenshot]}');"
  game = db.execute(sql)
  db.close
  redirect "/games"
end

get "/games/:id/edit" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @game = db.execute( "SELECT * FROM games WHERE id == #{params[:id]};" ).first
  db.close
  erb :games_edit
end

post "/games/:id" do
  sql = "UPDATE games SET name = '#{params[:name]}', genre = '#{params[:genre]}', description = '#{params[:description]}', cover =  '#{params[:cover]}', screenshot = '#{params[:screenshot]}' WHERE id == #{params[:id]};"
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close
  redirect "/games/#{params[:id]}"
end

get "/games/:id/delete" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute "DELETE FROM games WHERE id == #{params[:id]};"
  db.close
  redirect "/games"
end

get "/games/:id" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @game = db.execute( "SELECT * FROM games WHERE id == #{params[:id]};" ).first
  db.close
  erb :games_show
end

# /games GET index
# /games POST create
# /games/:id  GET show
# /games/:id POST update
# /games/:id/new  GET new
# /games/:id/edit GET edit
# /games/:id/delete GET delete
