# MTA first attempt with Ruby Week_04 Day_01
require 'rainbow' # Because it is awesome

class Line
  attr_reader :name, :stops # global access to attributes

  def initialize(name)
    @name = name
  end

  def add_stops(arr)
    @stops = arr
  end
end

# PlanTrip method
def planTrip(start_line, start1, end_line, end2)
  line1 = start_line.stops
  line2 = end_line.stops
  start = line1.index(start1)
  finish = line2.index(end2)
  start_union = line1.index("Union Square")
  finish_union = line2.index("Union Square")
  count = 0
  stops_arr = []
  stops_arr2 = []

  if start_line == end_line
    if start < finish
      (start+1).upto(finish) do |x|
        stops_arr.push(line1[x])
        count+=1
      end
    elsif start > finish
      (start-1).downto(finish) do |x|
        stops_arr.push(line1[x])
        count+=1
      end
    end
    p "To go from #{start1} to #{end2} you must travel through the following stops: #{stops_arr.join(', ')}. For a total of #{count} stops"
  elsif start_line != end_line
    if start < start_union
      (start+1).upto(start_union) do |x|
        stops_arr.push(line1[x])
        count+=1
      end
    elsif start > start_union
      (start-1).downto(start_union) do |x|
        stops_arr.push(line1[x])
        count+=1
      end
    end

    if finish < finish_union
      (finish_union-1).downto(finish) do |x|
        stops_arr2.push(line2[x])
        count+=1
      end
    elsif finish > finish_union
      (finish_union+1).upto(finish) do |x|
        stops_arr2.push(line2[x])
        count+=1
      end
    end

    puts "\nTravel directions from '#{start1} station on line #{start_line.name}' to '#{end2} station on line #{end_line.name}': \n1) Travel on #{start_line.name} through: #{stops_arr.join(', ')}\n2) Change at Union Square for line #{end_line.name}; then, \n3) Continue on through: #{stops_arr2.join(', ')} \nTotal trip stops: #{count}"
  end

end

puts Rainbow("Create subway lines from class Line:").bg(:rebeccapurple).white
line1 = Line.new("N")
line1.add_stops(['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'])
line2 = Line.new("L")
line2.add_stops(['8th', '6th', 'Union Square', '3rd', '1st'])
line3 = Line.new("6")
line3.add_stops(['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'])
puts Rainbow("Line: #{line1.name}: [#{line1.stops.join(', ')}]").chartreuse
puts Rainbow("Line: #{line2.name}: [#{line2.stops.join(', ')}]").yellow
puts Rainbow("Line: #{line3.name}: [#{line3.stops.join(', ')}]").hotpink
puts "\n"

puts Rainbow("Run planTrip").bg(:chartreuse).black
planTrip(line1, "34th", line2, "1st")
planTrip(line2, "1st", line3, "Grand Central")
planTrip(line1, "34th", line3, "Grand Central")
