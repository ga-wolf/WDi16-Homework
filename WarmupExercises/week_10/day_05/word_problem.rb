require 'pry'

class WordProblem
  def initialize(question)
    @question = question
  end

  def answer
    @matches = @question.match(/(-?\d+) (minus|plus) (-?\d+)( (minus|plus) (-?\d+))?/)
    if too_complicated?
      raise ArgumentError, "This is too complicated for me."
    else
      first_number = @matches[1].to_i
      second_number = @matches[3].to_i
      if @matches[2] == "plus"
        result = addition(first_number, second_number)
      elsif @matches[2] == "minus"
        result = subtraction(first_number, second_number)
      end
      if chain?
        if @matches[5] == "plus"
          result = addition(result, @matches[6].to_i)
        elsif @matches[5] == "minus"
          result = subtraction(result, @matches[6].to_i)
        end
      end
      result
    end
  end

  def too_complicated?
    @matches.nil?
  end

  def addition(num1, num2)
    num1 + num2
  end

  def subtraction(num1, num2)
    num1 - num2
  end

  def chain?
    @matches[4]
  end


end
