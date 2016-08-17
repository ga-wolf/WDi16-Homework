# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.

# plan_trip( :n, "Times Square", :l, "Grand Central" ) or something similar

# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


# if the starting line and end line are the same,
# get start station index and end station index and return the range between them (reverse if required)

# if the start line and end line are different,
# get the start station index and return the range between it and Union square (reverse if required)
# do the same for the end station
require 'pry'
mta_lines = {
  :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
  :six_line => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "Which line are you starting on? (n, l or 6) "
start_line = gets.chomp
print "Which station are you starting from? "
start_station = gets.chomp
print "which line are you going to? (n, l or 6) "
end_line = gets.chomp
print "Which station are you going to? "
end_station = gets.chomp

case start_line
  when "n" then start_line = mta_lines[:n_line]
  when "l" then start_line = mta_lines[:l_line]
  when "6" then start_line = mta_lines[:six_line]
end

case end_line
  when "n" then end_line = mta_lines[:n_line]
  when "l" then end_line = mta_lines[:l_line]
  when "6" then end_line = mta_lines[:six_line]
end

start_station_index = start_line.index(start_station)
end_station_index = end_line.index(end_station)
if start_line == end_line
  if start_station_index > end_station_index
    trip_one = start_line[end_station_index..start_station_index].reverse
  else
    trip_one = start_line[start_station_index..end_station_index]
  end
else
  if start_station_index > start_line.index("Union Square")
    trip_one = start_line[start_line.index("Union Square")..start_station_index].reverse
  else
    trip_one = start_line[start_station_index..start_line.index("Union Square")]
  end
  if end_station_index > end_line.index("Union Square")
    trip_two = end_line[end_line.index("Union Square")..end_station_index]
  else
    trip_two = end_line[end_station_index..end_line.index("Union Square")].reverse
  end
end

  p trip_one
  p trip_one.length
  p trip_two
  p trip_two.length
  
