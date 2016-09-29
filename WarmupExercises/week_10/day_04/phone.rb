class Phone

  def initialize(number)
    @number = number
  end

  def number
    @number.gsub!(/[^0-9]/, "")
    valid
  end

  def valid
    if @number.length == 11 && @number.start_with?("1")
      @number[1..10]
    elsif @number.length == 10
      return @number
    else
      return "0" * 10
    end
  end

  def area_code
    @number[0..2]
  end

  def middle_numbers
    @number[3..5]
  end

  def end_numbers
    @number[6..9]
  end

  def to_s
    "(#{area_code}) #{middle_numbers}-#{end_numbers}"
  end
end
