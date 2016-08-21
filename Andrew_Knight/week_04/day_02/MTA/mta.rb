require 'pry'

def train_network
  {
    "Line N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "Line L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "Line 6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
end

def get_stations(line, start_index, end_index)
  if start_index < end_index
    train_network[line][start_index..end_index]
  else
    train_network[line][end_index..start_index].reverse
  end
end

def interchange
  "Union Square"
end

def get_trip(starting_line, ending_line, starting_stop, ending_stop)
  start_station_index = train_network[starting_line].index(starting_stop)
  end_station_index = train_network[ending_line].index(ending_stop)
  if starting_line == ending_line 
    p get_stations(starting_line,start_station_index,end_station_index)
  else
    interchange_start_index = train_network[starting_line].index(interchange)
    interchange_end_index = train_network[ending_line].index(interchange)
    p get_stations(starting_line, start_station_index, interchange_start_index)
    p get_stations(ending_line, interchange_end_index, end_station_index)
  end
end

puts "enter a starting line"
start_line = gets.chomp #plan_trip[0]
puts "enter the ending line"
end_line = gets.chomp #plan_trip[2]
puts "enter the starting stop"
start_stop = gets.chomp #plan_trip[1]
puts "enter the ending stop"
end_stop = gets.chomp #plan_trip[3]
# interchange = "Union Square"

get_trip(start_line, end_line, start_stop, end_stop)


# def forward_trip(start, stop)
#   start < stop
# end



# starting_location = train_network[starting_line][:stops].index(plan_trip[1])
# ending_location = train_network[ending_line][:stops].index(plan_trip[3])
# interchange_one = train_network[starting_line][:stops].index("Union Square")-1
# interchange_two = train_network[ending_line][:stops].index("Union Square")-1
#
# first_stops = train_network[starting_line][:stops][starting_location..interchange_one]
# second_stops = train_network[ending_line][:stops][ending_location..interchange_two]
# total_stops = first_stops.length + second_stops.length + 1
#
# train_network[starting_line][:stops][starting_stop..interchange].map do |v|
#   p v
# end


# numbers.each do |k,v|
#   puts "my #{k} number is #{v}"
# end

# .each
# .reverse

# # Flatten the first network - but alter it for the required stops
# first_leg = train_network.map { |k,v| train_network[k][:stops]}.flatten
# p first_leg
#
# second_leg = train_network.map { |k,v| train_network[k][:stops]}.flatten.reverse
# p second_leg
