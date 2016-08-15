require 'pry' # For debugger, get's access to custom irb gem 'pry'
require 'rainbow'
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

# Menu
  # (a) - Mortgage Calculator
  # (b) - BMI Calculator
  # (c) - Trip Calculator
  # (q) - quit

puts Rainbow("Bonus calculators".center(80,'.')).bg(:chartreuse).black

def menu
  puts Rainbow("\nMenu Bar:").bg(:yellow).black
  puts Rainbow("\n#{'Mortgage Calculator'.ljust(30,'.')} (a)").rebeccapurple
  puts Rainbow("#{'BMI Calculator'.ljust(30,'.')} (b) ").peru
  puts Rainbow("#{'Trip Calculator'.ljust(30,'.')} (c)").hotpink
  puts "#{'Quit'.ljust(30,'.')} (q)"
  print "Enter a choice above: ".rjust(32,' ')
  gets.chomp
end
user_choice = menu()

def mortgage
  print Rainbow("Enter loan amount ($): ").rebeccapurple.underline
  value = gets.chomp.to_i
  print Rainbow("Enter term of loan (years): ").rebeccapurple.underline
  term = gets.chomp.to_i
  print Rainbow("Enter interest rate (%): ").rebeccapurple.underline
  rate = (gets.chomp.to_f)/100
  print Rainbow("Enter interest only (a) or principal and interest (b): ").rebeccapurple.underline
  method = gets.chomp
  annual_interest = value*rate
  result = value*((rate/12) / (1-((1+rate/12)**(-term*12))))

  while method != "a" || method != "b"
    if method == "a"
      puts Rainbow("Monthly interest only repayment ($): #{((annual_interest)/(12)).round}").bg(:rebeccapurple)
      break
    elsif method == "b"
      puts Rainbow("Monthly principal and interest repayment ($): #{result.round} ").bg(:rebeccapurple)
      break
    else
      puts Rainbow("Try again").red.underline
      print "Enter interest only (a) or principal and interest (b):"
      method = gets.chomp
    end
  end
end

def bmi
  print Rainbow("Enter your weight (kg): ").yellow.underline
  weight = gets.chomp.to_f
  print Rainbow("Enter your height (cm): ").yellow.underline
  height = gets.chomp.to_f
  result = weight / ((height/100)**2)
  puts Rainbow("Your BMI index is: #{result.round(2)}").bg(:yellow).black
end

def trip
  print Rainbow("Enter distance (km): ").hotpink.underline
  distance = gets.chomp.to_f
  print Rainbow("Enter km per litre for vehicle (km): ").hotpink.underline
  km_litre = gets.chomp.to_f
  print Rainbow("Enter petrol price per litre ($): ").hotpink.underline
  price_litre = gets.chomp.to_f
  print Rainbow("Enter average speed (km/hr): ").hotpink.underline
  km_hr = gets.chomp.to_f
  result_cost = ( distance/ km_litre ) * price_litre
  result_time = distance / km_hr

  puts Rainbow("Total travel time of #{result_time.round(2)} hrs and total petrol cost of $#{result_cost.round(2)}").bg(:hotpink).black
end

while user_choice != 'q'
  case user_choice
  when "a" then mortgage()
  when "b" then bmi()
  when "c" then trip()
  else
    puts Rainbow("try another option").bg(:red)
  end

  user_choice = menu()
end
puts Rainbow("Bonus calculator exit message".center(80,'*')).bg(:chartreuse).black
puts 'sl'
