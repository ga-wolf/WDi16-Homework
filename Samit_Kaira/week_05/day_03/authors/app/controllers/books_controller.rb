class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create(book_params)
    redirect_to book #same as redirect_to "/works/#{work.id}"
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)
    redirect_to book #Go to the show page for this particular work
  end

  def show
    @book = Book.find(params[:id])
  end

  def destroy
    book = Book.find(params[:id]) #create a local variable because we arent aiming to display this on the page
    book.destroy #this removes the entry from the DB
    redirect_to book #this is the same as redirect_to "/works"
  end

private
  def book_params
    params.require(:book).permit(:title, :year, :image, :style, :medium, :author_id)
  end

end
