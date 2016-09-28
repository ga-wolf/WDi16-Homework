require 'pry'

puts "Welcome to our calculator"

def menu
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(q) - quit"
  puts "(p) - power"
  puts "(sr) - square root"
  print "Enter your choice:"
  gets.chomp
end

# Receive two user inputs
def prompt( message )
  print message
  gets().to_f
end

def add
  # Ask the user for two numbers
  first_num = prompt( "What is your first number? " )
  second_num = prompt( "What is your second number? ")
  # binding.pry # Very similar to the debugger in JavaScript
  result = first_num + second_num # Add those two numbers together
  puts "The result is #{result}" # Print out result
  # puts "The result is #{first_num + second_num}
end

def subtract
  first_num = prompt( "What is your first number? " )
  second_num = prompt( "What is your second number? ")
  result = first_num - second_num
  puts "The result is #{result}"
end

def multi
  first_num = prompt( "What is your first number? " )
  second_num = prompt( "What is your second number? ")
  result = first_num * second_num
  puts "The result is #{result}"
end

def division
  first_num = prompt( "What is your first number? " )
  second_num = prompt( "What is your second number? ")
  result = first_num / second_num
  puts "The result is #{result}"
end

def power
  first_num = prompt( "What is your base? " )
  second_num = prompt( "What is your exponent? ")
  result = first_num ** second_num
  puts "The result is #{result}"
end

def square_root
  first_num = prompt( "What is your number? " )
  result = Math.sqrt(first_num)
  puts "The result is #{result}"
end

user_choice = menu()

 until user_choice == "q"
  case user_choice
    when "a" then add()
    when "s" then subtract()
    when "m" then multi()
    when "d" then division()
    when "p" then power()
    when "sr" then square_root()
  else
    puts "That is not a valid option"
  end
  user_choice = menu()
 end
 puts "Thanks for using our lovely calculator"
