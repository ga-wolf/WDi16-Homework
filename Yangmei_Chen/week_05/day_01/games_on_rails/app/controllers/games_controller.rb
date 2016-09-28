class GamesController < ApplicationController
  def magic_eight_ball
  end

  def answer
    @question = params[:question]

    answers = [
      "It is certain",
      "It is decidedly so",
      "My reply is no",
      "You cannot count on it",
      "Better not tell you now",
      "signs point to yes",
      "Outlook not so good",
      "Concentrate and ask again"
    ]
    @answer = answers[Random.rand(8)]
  end

  def secret_number
  end

  def secret_result
    @random = Random.rand(10)
    @number = params[:button].to_i
    if @random == @number
      @result = "Congratulations! You picked the right number!"
    else
      @result = "Wrong pick!"
    end
  end

  def rock_paper_scissors

  end

  def rock_paper_scissors_play
    @throw = params[:throw]
    throw = [
      "rock",
      "paper",
      "scissors"
    ]
    @random = throw[Random.rand(3)]
    if @throw == @random
      @result = "Congratulations!"
    else
      @result = "Sorry you lost!"
    end
  end

end
