# Our test suite is expecting the code we're testing to be in a file called 'calculator' in the same directory as the test.rb (require_relative './calculator').

# We run the test suite in the terminal using the command `ruby test.rb` (ruby, followed by the filename of the test suite). Tests with the 'skip' method will, surprisingly, be skipped. We just want to get one test passing at a time.

# We start out with a completely blank calculator.rb file and run the first test. This tells us that there's an uninitialized constant "Calculator". So let's create a class called "Calculator"
class Calculator

# If we remove the skip keywork from the next test, we hit a failure because the 'ask' method is not defined. So we add an empty 'ask' method, re-run the test, and if it passes, unskip the next test. etc etc.
  def ask(question)
    # The .match method returns a 'MatchData object if there are any matches (if there are no matches, the .match method returns nil). A MatchData object will capture any strings that match the regular expression and, if we've used parentheses to actually CAPTURE matches, we'll be able to access those using array-like syntax (question.match(/something/)[1], etc). We can also just pass the match object into a block, and do something with the matches.

    # What we're saying here is that we want to match strings that exactly follow the pattern 'What is [any number, including negative numbers] plus [any number, including negative numbers]'

    #Let's break it down:

    # => \d matches any digit
    # => \d+ matches one or more digits
    # => -d+ matches one or more digits if they are preceded by a '-' symbol
    # => -?\d+ matches one or more digits if they are preceded by 0 or one '-' symbol 
    question.match(/What is (-?\d+) plus (-?\d+)/) do |matches|
      matches[1].to_i + matches[2].to_i
    end
  end
end
