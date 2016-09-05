class SecretsController < ApplicationController
  def guess
  end

  def guessed
    @guessed = params[:guessed].to_i
    if @guessed == 7
      redirect_to '/guess/win'
    else
      redirect_to '/guess/lose'
    end
  end

  def win
    @guessed
  end

  def lose
    @guessed
  end


  def play
    @throw = params[:throw]
    array = ["rock","paper","scissors"]
    @computer = array.sample
    @message = ''

    if @throw == @computer
      @message = 'DRAW'
    elsif @throw == "rock" && @computer == "scissors"
      @message = "win"
    elsif @throw == "rock" && @computer == "paper"
      @message = "lose"
    elsif @throw == "paper" && @computer == "rock"
      @message = "win"
    elsif @throw == "paper" && @computer == "scissors"
      @message = "lose"
    elsif @throw == "scissors" && @computer == "paper"
      @message = "win"
    elsif @throw == "scissors" && @computer == "rock"
      @message = "lose"
    else
      @message = "did not recognise"
    end
  end
end
