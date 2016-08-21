require 'sqlite3'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/pry' do
  binding.pry
  "Pry route"
end

get '/waves' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_waves = db.execute "SELECT * FROM waves;"
  db.close

  erb :waves_index
end

get '/waves/new' do
  erb :waves_new
end

post '/waves' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "INSERT INTO waves (wave, image, description) VALUES('#{params[:wave]}','#{params[:image]}','#{params[:description]}');"
  db.execute sql
  db.close
  redirect "/waves"
end

get '/waves/:id/edit' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @wave = db.execute( "SELECT * FROM waves WHERE id == #{params[:id]}" ).first
  db.close
  erb :waves_edit

end

post '/waves/:id' do
  sql = "UPDATE waves SET wave= '#{params[:wave]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.execute sql
  db.close
  redirect "/waves/#{params[:id]}"
end

get '/waves/:id/delete' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.execute "DELETE FROM waves WHERE id == #{params[:id]};"
  db.close
  redirect "/waves"
end

get '/waves/:id' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @wave = db.execute( "SELECT * FROM waves WHERE id == #{params[:id]}").first
  db.close
  puts "\n\n"
  p @wave
  puts "\n\n"

  erb :waves_show
end
