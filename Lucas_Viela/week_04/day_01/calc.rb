require 'pry'
require 'rainbow'

puts "Welcome to our calculator"


def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(d) - division"
  puts "(m) - multiply"
  puts "(e) - elevate"
  puts "(r) - square root"
  puts "(q) - quit"
  print "Enter your choice: "
  choice = gets.chomp()
end

user_choice = menu()

def add
  #Ask the user for 2 numbers
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your seccond number?"
  seccond_num = gets().to_f

  result = first_num + seccond_num #Similar to the debugger in JavaScript
  Rainbow(puts "The result is #{result}").red
end

def substract
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your seccond number?"
  seccond_num = gets().to_f

  result = first_num - seccond_num
  puts "The result is #{result}"
end


def divide
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your seccond number?"
  seccond_num = gets().to_f
  result = first_num / seccond_num
  puts "The result is #{result}"
end

def multiply
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your seccond number?"
  seccond_num = gets().to_f

  result = first_num * seccond_num
  puts "The result is #{result}"
end

def elevate
  print "What is your first number? "
  first_num = gets().to_f
  print "What number is elevate your first number?"
  seccond_num = gets().to_f

  result = first_num ** seccond_num
  puts "The result is #{result}"
end

def root
  print "What is your  number? "
  first_num = gets().to_f

  result = Math.sqrt(first_num)
  puts "The square root of #{first_num} is #{result}"
end

until user_choice == "q"
  case user_choice
  when "a" then add()
  when "s" then substract()
  when "d" then divide()
  when "m" then multiply()
  when "e" then elevate()
  when "r" then root()

  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end


#
# until user_choice == "q"
#   puts "You still haven't press q"
#
#   user_choice = menu ()
# end
#
# puts ""
# puts "Thanks for using our calculator"
