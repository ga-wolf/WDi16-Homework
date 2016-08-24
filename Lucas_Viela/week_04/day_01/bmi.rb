puts "Welcome to the BMI calculator"

puts "What is you weight ? "
weight = gets().chomp.to_f

puts "What is your height ? "
height = gets().chomp.to_f

result = weight / (height * height)

if result > 24
  print "You are under wheight, eat betetr"
elsif  result < 24 && result > 29
  print "Your weight is normal"

elsif result < 29 && result > 39
  print "You are overweight"

elsif result < 39
  print "You are obese "
end
