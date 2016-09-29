# This is Test Driven Development at it's finest - we've been given a bunch of tests, and we've got to write code to make those tests pass. You might look at the tests and think "what? That's not an area code" or "why would we return ten zeros if the number's invalid? Do we really hate the person with the number 0000000000 and want to pepper them in SMSs?" - it doesn't matter.

# We're going to use the tests as a starting point and let that guide the code we write. We're going to write JUST ENOUGH code to make a test pass, then move on to the next test and repeat.

#We're going to create a class called "Phone", because when we run the first test, we see an error 'uninitialized constant Phone' (and if we look at the test suite, we can see that they've called the .new method on a class called Phone)

class Phone

# The first error was that the initialze method had the wrong number of arguments (1, expecting 0). So let's add our own initialize method and give it a parameter, then store whatever argument is passed in as an instance variable, accessible to all our other class methods.
  def initialize(number)
    @number = number
  end

  def number
  # The gsub method takes two arguments - a pattern and a replacement - and returns a string replacing all pattern matches with the replacement.
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
    # This is kind of gross, having all these numbers bouncing around (the initialize's parameter, the class method, etc), but what I'm doing here is getting the first 3 characters of whatever the .number method returns. If I got the first three characters of the instance variable @number, I wouldn't be getting the gsub in the number method and validations in the valid method
    number[0..2]
  end

  def middle_numbers
    # As above.
    number[3..5]
  end

  def end_numbers
    # As above.
    number[6..9]
  end

  def to_s
    number =
    "(#{area_code}) #{middle_numbers}-#{end_numbers}"
  end
end

# In case you're interested, The Hammer suggested this cleaner, alternative 'to_s' method:
    # def to_s
    #     number =~ /(\d{3})(\d{3})(\d+)/
    #     return "(#{$1}) #{$2}-#{$3}"
    # end

    # And this absolute face-melter that I can't get my head around:
    # def to_s
    #     match =~ number.match(/regex/)
    #     area, prefix, rest = match.captures
    #     return "(#{area}) #{prefix}-#{rest}"
