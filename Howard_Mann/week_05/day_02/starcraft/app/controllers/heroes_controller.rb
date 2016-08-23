class HeroesController < ApplicationController
  def index
    @heroes = Hero.all
  end

  def show
    @hero = Hero.find(params[:id])
  end

  def new
    @hero = Hero.new
  end

  def create
    hero = Hero.create( hero_params )
    if hero.save
      redirect_to '/heroes'
    else
      render :new
    end
  end

  def edit
    @hero = Hero.find(params[:id])
  end

  def update
    hero = Hero.find(params[:id])
    hero.update( hero_params )
    redirect_to '/heroes'
  end

  private
    def hero_params
      params.require(:hero).permit(:name, :background, :image, :race_id)
    end

end
