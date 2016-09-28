# You and your fellow cohort of those in the "know" when it comes to binary decide to come up with a secret "handshake".
#
# 1 = wink
# 10 = double blink
# 100 = close your eyes
# 1000 = jump
# 10000 = Reverse the order of the operations in the secret handshake.
# Write a program that will convert a binary number, represented as a string (i.e. "101010"), and convert it to the appropriate sequence of events for a secret handshake.
#
#
# handshake = SecretHandshake.new "11001"
# handshake.commands # => ["jump","wink"]
# The program should consider strings specifying an invalid binary as the value 0.

# Take the input, make it into an instance variable
# reverse he order of the input
# iterate through the input and for each 1, push the signal to an empty array

class SecretHandshake

  def initialize (digits)
    @digits = digits.reverse.chars.map { |s| s.to_i }
  end

  def commands
    handshake = []
    signals.length.times.do |index|
      if @digits[index] == 1
        handshake << signals[index]
      end
    end
    if @digits[4] == 1
      handshake.reverse
    else
      handshake.empty? ? "Thats not a valid binary" : handshake
    end
  end

  def signals
    ["wink", "double blink", "close your eyes", "jump"]
  end

end

puts "What binary greeting?"
input = gets.chomp


# I HAVE NO IDEA WHY THIS DOESN"T WORK?? IT SAYS AN UNEXPECTED END??


handshake = SecretHandshake.new(input)
p handshake.commands
