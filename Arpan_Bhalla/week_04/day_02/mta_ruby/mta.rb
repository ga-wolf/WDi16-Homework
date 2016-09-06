subway = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

"L" => ["8th", "6th", "Union Square", "3rd", "1st"],

"SIX" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# puts "Please select line and station from the list below : "
#
# subway.each do |k,v|
# puts "Line is #{k} and stations in the line are :#{v} "
# end


print "Which line you wish to travel from (N/L/SIX) :"
onwards = gets.chomp

print "Enter the Start Journery Station :"
get_start_station = gets.chomp

puts "Which line you wish to travel to (N/L/SIX) :"
to = gets.chomp

print "Enter the journey Destination : "
get_end_station = gets.chomp

p start_index = onwards.index(get_start_station)

p end_index = to.index(get_end_station)

if (onwards == to)

 p journey =  subway[onwards].to_a
journey.class

end

# start_journey = subway[onwards].to_a
#
# p onwards_journey = start_journey[start_journey.index(get_start_station)..start_journey.index("Union Square")]
#
# end_journey = subway[to].to_a
#
# print "Change at Union Square and Journey : "
# p destination =
# end_journey[end_journey.index(get_end_station)..end_journey.index("Union Square")]
