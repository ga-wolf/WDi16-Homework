

require 'pry'
puts "Welcome to our calculator"

def menu
  puts " "
  puts "(a) - addition"
  puts "(b) - subtraction"
  puts "(c) - multiplication"
  puts "(d) - division"
  puts "(e) - exponent"
    puts "(f) - squareroot"
    puts "(g) - mortgageCalculator"
      puts "(h) - bmiCalculator"
      puts "(I) - tripCalculator"

  puts "(q) - quit"


  print "Enter your choice: "
  gets.chomp()
end

user_choice = menu()

def addition
print " what is ur first number? "
  first_num = gets().to_f
  print " what is ur second number? "
    second_num = gets().to_f
    # result = first_num + second_num
 puts " the result is #{first_num + second_num} "
end

def subtraction
  print " what is ur first number? "
    first_num = gets().to_f
    print " what is ur second number? "
      second_num = gets().to_f
      puts " the result is #{first_num - second_num} "
end

def multiplication
  print " what is ur first number? "
    first_num = gets().to_f
    print " what is ur second number? "
      second_num = gets().to_f
      puts " the result is #{first_num * second_num} "
end
def division
  print " what is ur first number? "
    first_num = gets().to_f
    print " what is ur second number? "
      second_num = gets().to_f
      puts " the result is #{first_num / second_num} "
end

def exponent
  print " what is ur first number? "
    first_num = gets().to_f

      puts " the result is #{first_num ** 2} "
end

def squareroot
  print " what is ur first number? "
    first_num = gets().to_f

      puts " the result is #{Math.sqrt(first_num) } "
end

 def mortgageCalculator
balance = 60000
annual_rate = 2.15.to_f * 0.01
monthly_rate = annual_rate / 12.to_f
n = 15*12

puts "Loan term (Number of payments) [#{n}]"
puts "Annual interest rate [#{annual_rate*100}]"
puts "Monthly interest rate [#{monthly_rate}]"
term = (1 + monthly_rate)**n
puts "Term = [#{term}]"

monthly_payment = balance * (monthly_rate * term / (term - 1))
puts "Monthly Payment = [#{(monthly_payment)}]"
end

def bmiCalculator
print "Enter you height (m): "
max_height = gets.to_f

print "Enter you weight (kgs): "
max_weight = gets.to_f

yourbmi = (max_weight/(max_height * max_height))
print "Your BMI is #{yourbmi}\n"
end

def tripCalculator
  print "Enter distance (m): "
  max_distance = gets.to_f
  print "Enter speed (): "
  max_speed = gets.to_f
  print "Enter miles per gallon (): "
  max_miles = gets.to_f
  print "Enter price per gallon (): "
  max_price = gets.to_f
  timeRequired = max_distance / max_speed
  costRequired = max_distance * max_miles * max_price
  print "Your time is #{timeRequired}\n"
  print "Your time is #{costRequired}\n"
end

until user_choice == "q"
  case user_choice
  when "a"
    then addition()
  when "b"
    then subtraction()
  when "c"
    then multiplication()
  when "d"
    then division()
  when "e"
    then exponent()
  when "f"
    then squareroot()
  when "g"
    then mortgageCalculator()
  when "h"
    then bmiCalculator()
  when "I"
    then tripCalculator()
  # when "f"
  #   then ()
  else
    puts "that is not a valid option"
  end
    user_choice = menu()
end
#   puts " You still have not pressed q"
#

# end
#
puts ""
puts " Thanks for using our lovely calculator!"
