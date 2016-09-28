class HomeworldsController < ApplicationController
  def index
    @homeworlds = Homeworld.all
  end

  def show
    @homeworld = Homeworld.find_by(:name => params[:id])
  end

  def edit
  end

  def new
  end
end
