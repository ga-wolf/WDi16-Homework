require 'pry' # For debugger, get's access to custom irb gem 'pry'
# binding.pry # Similar to debugger; in JS
# Extra homework: Rainbow gem

# Week_04 Day_01 Homework: Ruby methods and loops

# #Calculator
#
# ###Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ###Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# ####Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# ####Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do advanced arithmetic (exponents, square roots)


puts "Week_04 Ruby HW: Welcome to our calculator".center(80,'.')

def menu
  puts "\nCalculator options:"
  puts "(a) - addition"
  puts "(b) - subtraction"
  puts "(c) - mutliplication"
  puts "(d) - division"
  puts "(e) - power of"
  puts "(f) - square root"
  puts "(g) - percentage"
  puts "(h) - absolute value"
  puts "(q) - quit"
  print "\nEnter your choice: "
  gets.chomp # Value entered will be returned from method
end
user_choice = menu()

# Declare Methods: Basic arithmetic
def add
  # Ask user for two numbers
  print "Enter first number paramater: "
  first_num = gets.chomp.to_f
  print "Enter second number paramater: "
  second_num = gets.chomp.to_f

  # Add those two numbers together
  result = first_num + second_num

  # Print out the result
  puts "\nAddition result: #{first_num} + #{second_num} = #{result}"
end

def subtract
  print "Enter first number paramater: "
  first_num = gets.chomp.to_f
  print "Minus second number: "
  second_num = gets.chomp.to_f

  puts "\nSubtraction result: #{first_num} - #{second_num} = #{first_num - second_num}"
end

def multiply
  print "Enter first number paramater: "
  first_num = gets.chomp.to_f
  print "Multipled by second number: "
  second_num = gets.chomp.to_f

  puts "\nMultiply result: #{first_num} * #{second_num} = #{(first_num * second_num).round(2)}"
end

def divide
  print "Enter first number paramater: "
  first_num = gets.chomp.to_f
  print "Divided by second number: "
  second_num = gets.chomp.to_f

  puts "\nDivide result: #{first_num} / #{second_num} = #{(first_num / second_num).round(2)}"
end

def power
  print "Enter first number paramater: "
  first_num = gets.chomp.to_f
  print "To the power of number: "
  second_num = gets.chomp.to_f

  puts "\nExponent result: #{first_num} ^ #{second_num} = #{first_num ** second_num}"
end

def square_root
  print "Find the square root of number: "
  first_num = gets.chomp.to_f

  puts "\nSquare root of #{first_num} = #{Math.sqrt(first_num).round(2)}"
end

def percentage
  print "Enter first number: "
  first_num = gets.chomp.to_f
  print "As a percentage of second number: "
  second_num = gets.chomp.to_f

  puts "#{first_num} is #{((first_num/second_num)*100).round(2)}% of #{second_num}"
end

def absolute_value
  print "Find the absolute value of: "
  first_num = gets.chomp.to_f

  puts "Absolute value of #{first_num} = #{first_num.abs}"
end

# Exits the loop if q is entered
while user_choice != "q"
  # Run method based on user_choice input
  case user_choice
  when "a" then add()
  when "b" then subtract()
  when "c" then multiply()
  when "d" then divide()
  when "e" then power()
  when "f" then square_root()
  when "g" then percentage()
  when "h" then absolute_value()
  else
    puts "That is not a valid option"
  end


  # Executes the menu() callback at end until q is entered
  user_choice = menu()
end
puts "Successful quit message".center(80,'.') # Exit message
