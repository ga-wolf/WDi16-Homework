require 'pry'

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiplication"
  puts "(d) - Division"
  puts "(p) - Power"
  puts ""
  puts "(b) - BMI calculator"
  puts "(r) - Mortgage repayment calculator"
  puts ""
  puts "(q) - quit"
  print "Enter your choice: "
  gets.chomp()
end

user_choice = menu()

def add
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  result = first_num + second_num
  puts ""
  puts "The result is #{result}"
end

def subtract
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  result = first_num - second_num
  puts ""
  puts "The result is #{result}"
end

def multiply
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  result = first_num * second_num
  puts ""
  puts "The result is #{result}"
end

def divide
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  result = first_num / second_num
  puts ""
  puts "The result is #{result}"
end

def power
  print "What is your number? "
  first_num = gets.to_f
  print "What is the power? "
  second_num = gets.to_f

  result = first_num**second_num
  puts ""
  puts "The result is #{result}"
end

def body_mass
  print "Height in meters? "
  first_num = gets.to_f
  print "Weight in Kilograms "
  second_num = gets.to_f

  result = second_num / (first_num ** 2)
  puts ""
  puts "Your BMI is #{result}"
end

def repayment
  print "Amount borrowed? "
  principle = gets.to_f
  print "Interest rate? "
  rate = gets.to_f
  print "Length of loan (months)? "
  term = gets.to_f
  p (rate/1200)*principle
  p (rate+ 1)**term
  p line_one

  line_one = principle * (rate/1200) * ((rate + 1)**term)
  line_two = ((rate + 1)**term) -1

  result = line_one/line_two
  puts ""
  puts "Monthly repayments = $#{result}"
end

until user_choice == "q"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "p" then power()
  when "b" then body_mass()
  when "r" then repayment()
  else
    puts "that is not a valid option"
  end
  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"
