# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts "To quit enter q "

def prompt (message)
  print message
  gets.chomp.to_f
end

def trip_time_calc (speed,distance)
  speed/distance
end

def cost_calc(fuel_cost,fuel_consumption)
  fuel_cost*fuel_consumption
end


answer = "y"

while answer == "y"
  distance = prompt ("Enter distance : ")
  fuel_consumption = prompt ("Enter fuel consumption (km/l) :")
  fuel_cost = prompt( "Enter current fuel cost (per l) :")
  speed = prompt ("Enter speed in (km/l) :")
  time_taken = trip_time_calc(speed,distance)
  cost = cost_calc(fuel_cost,fuel_consumption)
  puts "#{time_taken},#{cost}"
  puts "do you wish to continue: "
  answer = gets.chomp
end
