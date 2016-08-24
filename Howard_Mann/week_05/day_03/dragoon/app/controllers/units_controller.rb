class UnitsController < ApplicationController
  def index
    @units = Unit.all
  end

  def show
    @unit = Unit.find_by(:name => params[:id])
  end

  def new
    @unit = Unit.new
  end

  def create
    unit = Unit.create(unit_params)
    if unit.save
      redirect_to units_path
    else
      render :new
    end
  end

  def edit
    @unit = Unit.find(params[:id])
  end

  def update
    unit = Unit.find(params[:id])
    unit.update( unit_params )
    redirect_to unit_path( unit )
  end

  private
    def unit_params
      params.require(:unit).permit(:name, :image, :race_id, :weapon_id)
    end
end
