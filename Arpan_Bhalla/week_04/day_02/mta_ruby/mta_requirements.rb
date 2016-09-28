require 'rainbow'

subway = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

"L" => ["8th", "6th", "Union Square", "3rd", "1st"],

"SIX" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print Rainbow("Enter Destination Line :").red
  end_line = gets.chomp

print Rainbow("Enter Destination Station :").red
  end_station = gets.chomp

  end_journey = subway[end_line].to_a

  destination_station_index = end_journey.index(end_station)
  union_sq_index_destination = end_journey.index("Union Square")


if (end_journey.index(end_station) > end_journey.index("Union Square"))==true
  p c = end_journey[union_sq_index_destination ..destination_station_index]
  else
    d = end_journey[destination_station_index..union_sq_index_destination ]
    p d
end
