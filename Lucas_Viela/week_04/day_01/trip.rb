puts "Welcome to the trip calculator"

puts "First start with the distance of the trip in km "
distance = gets().chomp.to_f

puts "How many liters per km does your car do ? "
liter_km = gets().chomp.to_f

puts "What is the price of the fuel at your town ?"
price_fuel = gets().chomp.to_f

puts "What speed do you want to travel ? "
speed = gets().chomp.to_f

price_per_km = price_fuel /price_per_km
price = price_per_km * liter_km
time = distance / speed

puts "Your trip will cost $#{price} and you will arrive in #{time}hours "
