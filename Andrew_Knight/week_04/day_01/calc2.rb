require 'pry'

# Menu
# (a) - addition
# (q) - quit

# binding.pry # Very similar to debugger in JavaScript

puts "Welcome to our calculator"


def menu
  puts ""
  puts "(a) - addition"
  puts "(d) - divide"
  puts "(x^y) - exponent"
  puts "(log) - logarithm"
  puts "(m) - multiply"
  puts "(q) - quit"
  puts "(%) - percentage"
  puts "(s) - subtract"
  puts "(debt) - mortgage"
  puts "(bmi) - BMI_calc"
  puts "(trip) - trip_calc"
  puts "(sq) - square"
  puts "(sq_root) - square_root"
  print "Enter you choice: "
  gets.chomp()
end
user_choice = menu()

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

def BMI_calc
  print "What is your height (in meters)? "
  first_num = gets().to_f
  print "What is your weight? "
  second_num = gets().to_f

  result = (second_num/first_num) / first_num
  puts "The result is #{result}"
end

def divide
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num / second_num
  puts "The result is #{result}"
end

def exponent
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num ** second_num
  puts "The result is #{result}"
end

def logarithm
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = Math.log(first_num, second_num)
  puts "The result is #{result}"
end

def mortgage
  print "What is your principal? "
  first_num = gets().to_f
  print "What is your interest rate? "
  second_num = gets().to_f
  print "How many years is your mortgage? "
  third_num = gets().to_f

  result = first_num * ( 1 + ((second_num / 100) * third_num))

  result_two = (first_num * ( 1 + (second_num)/100) ** third_num)

  puts "The total simple interest amount accrued, principal and interest is #{result} - yikes"
  puts "Brace yourself - the compounded interest amount is #{result_two} - this is compounded monthly but ... holy crap"
end

def multiply
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num * second_num
  puts "The result is #{result}"
end

def percentage
  print "What is your number? "
  first_num = gets().to_f
  result = first_num / 100
  puts "The result is #{result}%"
end

def subtract
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f

  result = first_num - second_num
  puts "The result is #{result}"
end

def square
  print "What is you number? "
  first_num = gets().to_f

  result = first_num * first_num
  puts "The result is #{result}"
end

def square_root
  print "What is you number? "
  first_num = gets().to_f

  result = Math.sqrt(first_num)
  puts "The result is #{result}"
end

def trip_calc
  print "How far are you travelling (in KMs)? "
  first_num = gets().to_f
  print "How many KMs to the litre? "
  second_num = gets().to_f
  print "How much per litre ($)? "
  third_num = gets().to_f
  print "How fast (km/h) are you driving? "
  fourth_num = gets().to_f

  result = first_num / fourth_num
  result_two = (first_num / second_num) * third_num
  puts "It will take #{result} hours to get to your destination and cost approximately $#{result_two}. Remember, if you drive around 40km/h, you will use less petrol!"
end

  # Add those two numbers together
  # Print out the result

until user_choice == "q"
  case user_choice
  when "a" then add()
  when "bmi" then BMI_calc()
  when "d" then divide()
  when "x^y" then exponent()
  when "log" then logarithm()
  when "debt" then mortgage()
  when "trip" then trip_calc()
  when "m" then multiply()
  when "%" then percentage()
  when "s" then subtract()
  when "sq_root" then square_root()
  when "sq" then square()
  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end


puts ""
puts "Thanks for using our lovely calculator"
