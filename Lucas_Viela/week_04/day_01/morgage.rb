
puts "Welcome to the Morgage calculator"

puts "I nedd a few information about your bill"

print "What is the total value of the house ? "
total_value = gets().to_f

print "How long in years is the repayment ? "
year_repayment = gets().to_f

print "How much have already been paid ? "
total_paid = gets().to_f

value_left = total_value - total_paid
months_left = year_repayment * 12
result = value_left / months_left

print "There is $#{value_left} to be paid in #{months_left} months, So your monthly payment will be $#{result} "
