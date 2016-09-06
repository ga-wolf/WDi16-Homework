require 'rainbow'
require 'pry'

subway = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

"L" => ["8th", "6th", "Union Square", "3rd", "1st"],

"SIX" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
# Input From user -  Start Line and station

print Rainbow("Enter The Start Line : ").yellow
start_line = gets.chomp

print Rainbow("Enter Start Station : ").yellow
start_station = gets.chomp

# Input From user -  End Line and station

print Rainbow("Enter Destination Line :").red
  end_line = gets.chomp

print Rainbow("Enter Destination Station :").red
  end_station = gets.chomp

  start_journey = subway[start_line].to_a
  end_journey = subway[end_line].to_a
  p full_journey=[]

  start_station_index = start_journey.index(start_station)
  destination_station_index = end_journey.index(end_station)
  union_sq_index = start_journey.index("Union Square")
  union_sq_index_destination = end_journey.index("Union Square")

if (start_line == end_line)
  if (start_journey.index(start_station) < end_journey.index(end_station))==true
    x = start_journey[start_station_index..destination_station_index]
    p "Your journey is on same line and stations : "
    p x
    x.push(full_journey)
  elsif (start_journey.index(start_station) ==end_journey.index(end_station))==true
    puts Rainbow("Alert !!Invalid input, You have chosen same station").red
  else
    y = start_journey[destination_station_index..start_station_index]
    p "Your journey is on same line and stations : "
    p y.reverse
    y.push(full_journey)
  end

elsif (start_line != end_line)

  if (start_journey.index(start_station) < start_journey.index("Union Square"))==true
    p a = start_journey[start_station_index..union_sq_index]
    p "Change at Union Square"
    a.push(full_journey)
    else
      b = start_journey[union_sq_index..start_station_index]
      p b.reverse
      p "Change at Union Square"
      b.push(full_journey)
  end

  if (end_journey.index(end_station) > end_journey.index("Union Square"))==true
    p c = end_journey[union_sq_index_destination ..destination_station_index]
    c.push(full_journey)
    else
      d = end_journey[destination_station_index..union_sq_index_destination ]
      p d.reverse
      d.push(full_journey)
  end
end
