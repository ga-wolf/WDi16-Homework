class AuthorsController < ApplicationController

  def index
    @authors = Author.all #all the authors in the model

  end

  def show
    @author = Author.find(params[:id])
  end

  def new
    @author = Author.new #this creates a new empty instance but doesn't save it to the DB
  end

  def create
    #don't need an instance variable as we aren't creating a page, we are simply redirecting the user back to a page
    author = Author.create(author_params) #refer to Private below
    redirect_to "/authors/#{author.id}"
  end

  def edit
    @author = Author.find(params[:id])

  end

  def update
    #because there is no update page (ie. we simply redirect back to the author's page, we don't need an instance variable)
    author = Author.find(params[:id])
    author.update(author_params) #update the fields defined in Private below in the database
    redirect_to authors_path
  end

  def destroy
    author = Author.find(params[:id])
    author.destroy #this removes the entry from the DB
    redirect_to "/authors"
  end

  private
  def author_params #this strips out the unnecessary info which is contained in the default hash
    params.require(:author).permit(:name, :nationality, :dob, :image, :period) #this removes the irrelevant data
  end
end
