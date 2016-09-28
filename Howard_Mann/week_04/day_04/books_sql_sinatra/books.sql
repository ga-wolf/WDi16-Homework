-- SQL code to create books table and link to database.db

CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author TEXT,
  cover TEXT,
  price FLOAT
);
