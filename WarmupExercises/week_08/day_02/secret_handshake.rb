require 'pry'
# Holy shit binary is horrible, isn't it? This might help: http://www.purplemath.com/modules/numbbase.htm
class SecretHandshake
    def initialize(digits, type)
        if type == "b"
            # We want to reverse the string passed into the new method, since binary works from right to left.
            # We then want to split the string into an array (using .chars), .collect each element (this is the same as .map) and pass each element to the to_i method to convert the string digits to integers.
            @digits = digits.reverse.chars.collect { |d| d.to_i }
        else
            # For binary inputs, we want to take the string entered by the user, then turn it into an integer JUST so we can call the .to_s method, passing in the base 2 to get the binary string representation of our naumber.
            @digits = digits.to_i.to_s(2).reverse.chars.collect(&:to_i)
        end
    end

    def commands
        # We want our handshake to be an array of signals, not a string of signals, since we want to be able to reverse the order of the signals in the handshake (if 10000), not the order of the characters in the handshake - eg reversed "wink jump" becomes "jump wink", not "pmuj kniw".
        handshake = []
        # We can ignore any digits (in our reversed input) that have an index greater than the length of the signals array, since we don't have any 'signals' for those digits (whether they're 1 or 0). We could write 4.times do, but using the .length of the signals array is a better approach (so if we add more signals, we don't have to update this loop).
        signals.length.times do |index|
            # If the index'th element of the is 1, then add the index'th element of the signals array to our handshake
            if @digits[index] == 1
                handshake << signals[index]
            end
        end

        if @digits[4] == 1
            handshake.reverse
        else
            handshake.empty? ? "That's not a valid binary" : handshake
            # That's a ternary representation of the following conditional
            # if handshake.empty?
            #     "That's not a valid binary"
            # else
            #     handshake
            # end
        end
    end

    def signals
        ["wink", "double blink", "close your eyes", "jump"]
    end
end

puts "What number do you want to convert?"
number = gets.chomp

puts "Is that a (d)ecimal or a (b)inary number?"
selection = gets.chomp


handshake = SecretHandshake.new(number, selection)
puts handshake.commands
