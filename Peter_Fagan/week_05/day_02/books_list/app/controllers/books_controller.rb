class BooksController < ApplicationController
  def index
    @books = Books.all
  end

  def new
    @books = Books.new
  end

  def create
    books = Books.create( books_params)
    redirect_to books
  end

  def edit
    @books = Books.find params[:id]
  end

  def show
    @books = Books.find params[:id]
  end

  def update
    books = Books.find params[:id]
    books.update( books_params)
    redirect_to books
  end

  def destroy
    books = Books.find params[:id]
    books.destroy
    redirect_to bookss_path
  end

  private
    def books_params
      params.require(:books).permit(:name, :Published, :genre)
    end
  end
