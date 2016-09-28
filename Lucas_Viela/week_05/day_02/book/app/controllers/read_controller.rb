class ReadController < ApplicationController

  def index
  @reads = Read.all
end

def show
  @reads= Read.find params[:id]
end

end
