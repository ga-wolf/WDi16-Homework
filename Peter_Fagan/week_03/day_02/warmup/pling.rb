
# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'. If the number contains 5 as a factor, output 'Plang'. If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the string representation of the number itself.

require 'pry'

print "Choose a number "
num = gets.to_i

# My code
if num % 3 == 0
  print "Pling "
  if num % 5 == 0
    print "Plang "
    if num % 7 == 0
      print "Plong"
    end
  end
else
  puts num
end

# Badgers code
def raindrops (num)
  str = ""
    str << "Pling" if num % 3 == 0
    str << "Plang" if num % 5 == 0
    str << "Plong" if num % 7 == 0
    return str unless str.empty?
    num.to_ss
end

puts raindrops (num)
