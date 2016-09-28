require 'pry' #this says can you please require the pry gem so I can use it later on


puts "Welcome to our calculator"
puts "" #this is just an empty line

def menu #here the method is defined. it doesnt require any parameters because it asks the user for information
  puts "" #This is just an empty line
  puts "(a) is addition"
  puts "(b) is subtraction"
  puts "(c) is multiplication"
  puts "(d) is division"
  puts "(e) is for exponents"
  puts "(q) is for quit"
  print "Enter your choice: "
  gets.chomp() #Whateever we type is saved as this gets.chomp() statements. Note: this is the same as saying return.gets.chomp but we don't need it because the final line in a method is automatically returned
end
user_choice = menu() # i.e. whatever the user types in, please save as the user_choice variable
binding.pry


def add
  #Ask the user for two numbers
  puts "What is your first number?: "
  first_num = gets().to_f

  puts "What is your second number?: "
  second_num = gets().to_f

    #Sum those two numbers together
  result = first_num + second_num
  puts "The result is #{result}"

  binding.pry #Very similar to the debugger in JS
  #Print out the result
end



def subtract
  #Ask the user for two numbers
  puts "What is your first number?: "
  first_num = gets().to_f

  puts "What is your second number?: "
  second_num = gets().to_f

    #Subtract those two numbers together
  result = first_num - second_num
  puts "The result is #{result}"
end



def multiply
  #Ask the user for two numbers
  puts "What is your first number?: "
  first_num = gets().to_f

  puts "What is your second number?: "
  second_num = gets().to_f

    #Subtract those two numbers together
  result = first_num * second_num
  puts "The result is #{result}"
end



def divide
  #Ask the user for two numbers
  puts "What is your first number?: "
  first_num = gets().to_f

  puts "What is your second number?: "
  second_num = gets().to_f

    #Subtract those two numbers together
  result = first_num/second_num
  puts "The result is #{result}"
end



def exponent
  #Ask the user for two numbers
  puts "What is your first number?: "
  first_num = gets().to_f

  puts "What is your second number?: "
  second_num = gets().to_f

    #Subtract those two numbers together
  result = first_num ** second_num
  puts "The result is #{result}"
end



until user_choice == "q" #If user choice = q, this loop won't run. Therefore, it will run whenever user choice is NOT q
  #If the user chose "a" call the add function
  case user_choice
  when "a" then add() #when user_choice == "a" then run the add() method (which is just a function)
  when "b" then subtract()
  when "c" then multiply()
  when "d" then divide()
  when "e" then exponent()
  else
    puts "That is not a valid option"
  end
  user_choice = menu()
  binding.pry
end

puts "Thanks for using our lovely calculator"
