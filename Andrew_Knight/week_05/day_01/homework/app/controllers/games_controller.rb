class GamesController < ApplicationController

  def index
    @games = Game.all
  end

  def eight_ball
  end

  def eight_answer
    @question = params[:question]
    answers = [
      "Badger says: Not likley",
      "Badger says: Definitely",
      "Badger says: All signs point to yes"
    ]
    @random = answers[Random.rand(3)]
  end

  def secret_number
  end

  def secret_answer
    @number = params[:number]
    @secret = Random.rand(1..10)
    if @number == @secret
      @result = "congrats"
    else
      @result = "Wrong"
    end
  end

  def scissor
  end

  def scissor_answer
    answers = [
      "Scissors",
      "Paper",
      "Rock"
    ]
    @scissors = answers[Random.rand(3)]
    @object = params[:object]
    if ( @scissors == "Scissors" && @object == "Paper" || @scissors == "Paper" && @object == "Rock" || @scissors == "Rock" && @object == "Scissors")
      @result = "You Lose"
    else
      @result = "You Win"
  end
  end

end
