-- rake db:create
-- sqlite3 development.sqlite3 < books.sql


CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author TEXT,
  cover TEXT,
  price FLOAT,
  description TEXT
);
