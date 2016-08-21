require 'pry'

# binding.pry # Very similar to debugger in JavaScript

puts "Welcome to our calculator"

$memory

def menu
  puts ""
  puts "(a) - addition"
  puts "(d) - divide"
  puts "(m) - multiply"
  puts "(q) - quit"
  puts "(s) - subtract"
  print "Enter you choice: "
  gets.chomp()
end
user_choice = menu()

def memory
  print "Store to memory? (y/n)"
  $memory = gets.chomp()
end

def add
  # Ask user for two numbers
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num + second_num
  puts "The result is #{result}"
  # puts "The result is #{first_num + second_num}"
end

def divide
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num / second_num
  puts "The result is #{result}"
end

def multiply
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num * second_num
  puts "The result is #{result}"
end

def subtract
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num - second_num
  puts "The result is #{result}"
end

  # Add those two numbers together
  # Print out the result

until user_choice == "q"
  case user_choice
  when "a" then add()
  when "d" then divide()
  when "m" then multiply()
  when "s" then subtract()
  else
    puts "That is not a valid option"
  end

  case memory_choice
  when "y" then memory()
  end

  user_choice = menu()
end


puts ""
puts "Thanks for using our lovely calculator"
