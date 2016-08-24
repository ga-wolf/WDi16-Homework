class WeaponsController < ApplicationController
  def index
    @weapons = Weapon.all
  end

  def show
    @weapon = Weapon.find_by(:name => params[:id])
    @races = []
    @weapon.races.each do |el|
      @races.push(el.name)
    end
    return @races.uniq!
  end

end
