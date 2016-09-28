class PagesController < ApplicationController
  def magic
    @question = params[:question]
    array = ["You betcha!", "No way Jose!", "Future hazy!", "For sure!"]
    @answer = array.sample
  end

end
