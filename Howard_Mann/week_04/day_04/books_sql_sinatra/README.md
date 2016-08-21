# CRUD workflow notes

1. Create sinatra and CRUD folder and files in following tree
  - main.rb
  - books.sql
  - database.db
  - public
    - style.css
  - views
    - layout.erb
    - home.erb
    - books_index.erb
    - books_show.erb
    - books_edit.erb
    - books_new.erb

2. Create table in books sql file and write SQL to CREATE TABLE with relevant columns
    - Write SQL code in books.sql
    ```
    CREATE TABLE books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      cover TEXT,
      price FLOAT
    );
    ```
    - Link to database by running in terminal
    ```
    sqlite3 database.db < books.sql
    ```
    - Check that table has been created ```sqlite3 database.db .schema ```

3. Create routes in main.rb
  - require gems 'pry, sinatra, sinatra/reloader, sqlite3'
  - run server in terminal: 'ruby main.rb'
  - write out get routes for each page Create Read Update Delete
    - CREATE
      - get '/books/new' do end     --> erb (:books_new)
      - post url '/books'           --> redirect '/books'

    - READ
      - get url '/books'            --> erb (:books_index)
      - get url '/books/:id'        --> erb (:books_show)

    - UPDATE
      - get url '/books/:id/edit'   --> erb (:books_edit)
      - post url '/books/:id'       --> redirect '/books/:id'

    - DELETE
      - get url '/books/:id/delete' --> redirect '/books'

4. Write instructions within the routes
  - Prefix all get and post requests which are accessing the database (Which are  all routes except new) with the code below (not worth remembering):
    ```
      db = SQLite3::Database.new("database.db")
      db.results_as_hash = true
    ```
  - This is requiring the 'sqlite3 ruby gem' and linking our database file with a Ruby instance to allow us to write SQL instructions in Ruby

  - Store our SQL code in a string for readability and then use gem method to execute sql string (not worth remembering), and then store it in an instance variable to access in the views pages:
    ` sql = "code" ` + ` @variable = db.execute sql `

    - CREATE
      - get url '/books/new': erb(:books_new) to html form page where method post params to books url

      - post url '/books': INSERT/ Create and post form values to the books url and then use SQL to store the values with params
        `INSERT INTO books (title, author, cover, price) VALUES (params[:title],params[:author],params[:cover],params[:price]);`

    - READ
      - get url '/books': SELECT all values from the database
      <!-- HM note: Returns an array of hashes for us to iterate through -->
        `SELECT * FROM books;`

      - get url '/books/:id': SELECT the value with the id of the url (note: for simplicity I am not including erb syntax)
      <!-- HM note: This one is tricky. It returns an array with one hash. After we execute we need to select the hash by accessing it with [0] (i.e. we are actually doing this above by iterating through a block)  -->
        `SELECT * FROM books WHERE id == params[:id]`

    - UPDATE
      <!-- HM: EDIT IS THE TRICKIEST ONE, WE ONLY USE SQL TO SELECT IN ANTICIPATION OF UPDATE LOGIC IS:
      1) We get the url and :id of the page
      2) Use SQL to reference the params[:id] to get all the values from the database  
      3) Redirect to the edit view page
      4) On the edit views page, we cache the form values with the hash property values (ie. in input tag add value = "")
      5) Remember to change the form action to the books/id url and method to post
       -->
      - get url '/books/:id/edit': SELECT values to pre-populate form 'value='' fields
        `SELECT * FROM books WHERE id == params[:id]`

      - post url '/books/:id': UPDATE values of the params[:id] from the url
      <!-- HM: Remember to update the HTML form input with name='title' etc. -->
        `UPDATE books SET title='params[:title]', author= 'params[:author]', cover= 'params[:cover]', price= 'params[:price]' WHERE id == params[:id]; `

    - DELETE
      - get url '/books/:id/delete': DELETE values where id = params[:id]
        `DELETE FROM books WHERE id == params[:id];`

# BEWARE TRAPS!!
  - Order of the get and post route methods
    - order get from most specific to dynamic
    - post in same order but can be independent of get methods

  - db.close
    - Make sure to use db.close after every db.execute command, to ensure no open requests

  - Forms
    - Read carefully the action and method for the Forms
      - For creating new record 'action' url to "/books" with method = POST
      - For updating existing record 'action' url is to "/books/:id" with method = POST

  - Global variables
    - Remember to prefix ruby variables with @variable if they are to be accessed in the views folder
