# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
puts "Welcome to my calculator, what do you want to do?"

def prompt (message)
  print message
  gets.chomp.to_f
end

def addition
  first_num = prompt ("Enter first number: ")
  second_num = prompt ("Enter second number: ")
  puts "Addition of #{first_num} and #{second_num} is #{first_num + second_num}"
end

def subtract
  first_num = prompt ("Enter first number:  ")
  second_num = prompt ("Enter second number: ")
  puts "Subtraction of #{first_num} and #{second_num} is #{first_num - second_num}"
end

def division
  first_num = prompt ("Enter first number:  ")
  second_num = prompt ("Enter second number: ")
  puts "Division of #{first_num} and #{second_num} is #{first_num / second_num}"
end

def multiplication
  first_num = prompt ("Enter first number:  ")
  second_num = prompt ("Enter second number: ")
  puts "Multiplication of #{first_num} and #{second_num} is #{first_num * second_num}"
end

def exponent
  first_num = prompt ("Enter first number:  ")
  second_num = prompt ("Enter second number: ")
  puts "#{first_num} to the power of #{second_num} is #{first_num ** second_num}"
end

def menu
  puts " "
  puts "***********************************"
  puts "     WELCOME TO MY CALCULATOR      "
  puts "***********************************"
  puts " "
  puts "(a) - Addition"
  puts "(b) - subtraction"
  puts "(c) - division"
  puts "(d) - multiplication"
  puts "(e) - exponent"
  puts "(q) - quit calculator"
  puts " "
  print "Please enter your choice of action: "
  gets.chomp.downcase
end

user_choice = menu()

until user_choice == "q"
  case user_choice
    when "a" then addition()
    when "b" then subtract()
    when "c" then division()
    when "d" then multiplication()
    when "e" then exponent()
  else
    puts "Its invalid choice"
  end
  puts "Do you want to continue ?"
  user_choice = menu()
end
