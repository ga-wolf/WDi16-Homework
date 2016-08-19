require 'pry'
# Menu

  #(a) - addition
  #(q) - quit

puts "Welcome to our calculator"
def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(q) - quit"
  puts "(p) - power"
  puts "(sr) - square root"
  print "Enter your choice: "
  gets.chomp
end
user_choice = menu()

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
  # puts "The result is #{first_num + second_num}"
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

# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

def morgage_calc
  puts "What's your loan amount?"
  loan_amount = gets.to_f
  puts "What is your loan period? (_ years)"
  loan_period = gets.to_f
  puts "What is the interest rate? (_ %)"
  interst_rate = gets.to_f/100
  all = loan_amount*(1 + (interst_rate * loan_period))
  yearly_payments = all / loan_period
  monthly_payments = yearly_payments / 12
  puts "Your monthly required payment is #{monthly_payments}"
end
morgage_calc()

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
def bmi
  puts "What is your height (cm)?"
  height = gets.to_f
  puts "What is your mass weight (kg)?"
  weight = gets.to_f
  body_mass_index = (weight / (height ** 2)) * 10000
  puts "Your BMI is #{body_mass_index}"
end
bmi()

# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip_calculator
  puts "What's the distance in miles? "
  distance = gets.to_f
  puts "How many miles per gallon does your car run?"
  miles_p_gallon = gets.to_f
  puts "What's the fuel price? $/gallon"
  price_p_gallon = gets.to_f
  puts "How fast do you drive? (miles per hour)"
  speed = gets.to_f

  trip_time = distance / speed
  trip_cost = (distance / miles_p_gallon) * price_p_gallon

  puts "Your trip will take #{trip_time} hours and cost roughly $#{trip_cost}."
end
trip_calculator()
