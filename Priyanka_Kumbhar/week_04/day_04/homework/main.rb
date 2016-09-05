require 'sqlite3'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do

    erb :home
end

get '/mountains' do
    
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    @all_mountains = db.execute "SELECT * FROM mountains;"
    db.close
    erb :mountains_index
end

get '/mountains/new' do
    erb :mountains_new
end

post '/mountains' do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    sql = "INSERT INTO mountains(height, image, description) VALUES ('#{params[:height]}','#{params[:image]}','#{params[:description]}')"
    db.execute(sql)
    db.close
    redirect "/mountains"
end

get '/mountains/:id' do
    # Create a new connection to the 'database.db' using SQLite3 as our database adaptor, and store this connection in a variable called 'db'
    db = SQLite3::Database.new("database.db")
    # We want the results to be returned as hashes, rather than as (the default) arrays.
    db.results_as_hash = true
    # Call the 'execute' method on our database connection, passing in the SQL query we want to execute (one which will return a record from the animals table in the database, using the ID in the params hash (which will be whatever's in the :id space in the path /animals/:id/), and store the response in an instance variable called '@animal', which will make this variable available in the view rendered by this route (the animalst view, below). We need to select the first record, since the response will be in an array.
    @mountain = db.execute( "SELECT * FROM mountains WHERE id == #{params[:id]};" ).first
    # Once a response has been received, close the connection to the database, since we can only have a limited number of concurrent database connections.
    db.close
    # Render the animals_show erb template (this will look for a file called animals_show.erb in our views folder)
    erb :mountains_show
end

get '/mountain/:id/edit' do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    @mountain = db.execute( "SELECT * FROM mountains WHERE id == #{params[:id]};" ).first
    db.close
    erb :mountains_edit
end

post '/mountain/:id' do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
     sql = "UPDATE mountains SET height = '#{params[:height]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"
     db.execute(sql)
     db.close
     redirect "/mountains/#{params[:id]}"
end

get '/mountain/:id/delete' do
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    db.execute("DELETE FROM mountains WHERE id == #{params[:id]};")
    db.close
    redirect '/mountains'
end
