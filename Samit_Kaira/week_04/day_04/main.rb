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

get '/mountains' do
  db = SQLite3::Database.new("database.db") #make a connection to database.db
  db.results_as_hash = true #convert the arrays into hashes (objects)

  @all_mountains = db.execute"SELECT*FROM mountains";
  db.close

  erb :mountains_index
end

get '/mountains/new' do
  erb :mountains_new
end


post '/mountains' do #this will add a new record to the 'mountains' table in the database, taking the data from the form in the mountains_new view
  db = SQLite3::Database.new("database.db") #make a connection to database.db
  db.results_as_hash = true #convert the array of arrays into hashes (objects)

  sql = "INSERT INTO mountains (name, height, image, country) VALUES ('#{params[:name]}','#{params[:height]}','#{params[:image]}','#{params[:country]}');"
  mountain = db.execute sql #this creates a new record in the SQL database
  db.close

  redirect "/mountains" #this goes back to the /mountains page upon submission
end

get '/mountains/:id/edit' do #here, the purpose is to show the form PRE-FILLED
  db = SQLite3::Database.new("database.db") #make a connection to database.db
  db.results_as_hash = true #convert the arrays into hashes (objects)
  @mountain = db.execute("SELECT * FROM mountains WHERE id == #{params[:id]}").first #THIS IS WHAT PRE-FILLS OUR FORM
  db.close
  erb :mountains_edit
end


# POST requests to the /mountains/:id path - this will take attributes from the edit form (which will be available in the params hash) and update the record with the id matching the :id key in the params hash
post '/mountains/:id'do #this is to UPDATE/EDIT an animal (using its ID)
  sql = "UPDATE mountains SET name = '#{params[:name]}', height = '#{params[:height]}', image = '#{params[:image]}', country = '#{params[:country]}' WHERE id == #{params[:id]}"

  db = SQLite3::Database.new("database.db") #make a connection to database.db
  db.results_as_hash = true #convert the arrays into hashes (objects)

  db.execute sql
  db.close
  redirect "/mountains/#{params[:id]}"
end

# GET requests to the delete path for a mountain profile
get '/mountains/:id/delete' do
    # Create a new connection to the 'database.db' using SQLite3 as our database adaptor, and store this connection in a variable called 'db'
    db = SQLite3::Database.new("database.db")
    # We want the results to be returned as hashes, rather than as (the default) arrays.
    db.results_as_hash = true
    # Call the execute method on the open database connection, passing in the SQL query to delete a record using data in the params hash
    db.execute("DELETE FROM mountains WHERE id == #{params[:id]};")
    # Once a response has been received, close the connection to the database, since we can only have a limited number of concurrent database connections.
    db.close
    # We don't actually want to render a view here - there's no view that corresponds with a 'delete' - the delete action happens on the back end. Instead, once the code above has been run and the relevant record has been deleted in the animals table in the database, we want to redirect the browser to our GET '/animals' route (which displays the animal  index page).
    redirect "/mountains"
end

get '/mountains/:id' do
  db = SQLite3::Database.new("database.db") #make a connection to database.db
  db.results_as_hash = true #convert the arrays into hashes (objects)

  @mountain = db.execute("SELECT * FROM mountains WHERE id == #{params[:id]}").first #this just returns the first object within the array (because otherwise the entire array would be returned)

  puts "\n\n"
  p @mountain
  puts "\n\n"
  erb :mountains_show
end
