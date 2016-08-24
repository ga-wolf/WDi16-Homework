class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def show
    @character = Character.find_by(:name => params[:id])
  end

  def new
    @character = Character.new
  end

  def create
    character = Character.create(character_params )
    if character.save
      redirect_to characters_path
    else
      render :new
    end
  end

  def edit
    @character = Character.find(params[:id])
  end

  def update
    character = Character.find(params[:id])
    character.update( character_params )
    redirect_to character_path( character )
  end

  def destroy
    character = Character.find(params[:id])
    character.destroy
    redirect_to characters_path
  end

  private
    def character_params
      params.require(:character).permit(:name, :image, :background, :race_id, :weapon_id)
    end
end
