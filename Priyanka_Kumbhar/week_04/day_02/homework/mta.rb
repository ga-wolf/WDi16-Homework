
require 'pry'
def tripplan(start_point,second_point,start_line,dest_line)
allLines={
:N=>["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
:L=>["8th", "6th", "Union Square", "3rd","1st"],
:d6=>["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place","Redfern"]
}

middle_stop = "Union Square"



if (start_line.to_sym === dest_line.to_sym)
line = allLines[start_line.to_sym]
singlelinestops = line[line.index(start_point)+1..line.index(second_point)-1]
puts "The stops in between are #{singlelinestops.join(" , ")}"
elsif(start_line.to_sym != dest_line.to_sym)
    allsecondline_stops = []
    line = allLines[start_line.to_sym]
    line2 = allLines[dest_line.to_sym]
    stops_lineone = line[line.index(start_point)+1..line.index(middle_stop)-1]
    if(line2.index(second_point) > line2.index(middle_stop))
        stop_twobig =line2[line2.index(middle_stop)+1..line2.index(second_point)-1]
        allsecondline_stops.push(stop_twobig)
    else
        line2 = line2.reverse

        stops_two = line2[line2.index(middle_stop)+1..line2.index(second_point)-1]

        allsecondline_stops.push(stops_two)
    end
        puts "start on ,line #{start_line}  the stops in between are #{stops_lineone.join(" ")} travel upto #{middle_stop} on the line #{dest_line} and the stops in between are
        #{allsecondline_stops.join(" ")} "
end
end
# tripplan("8th","1st","L","L")
# tripplan("8th","33rd","L","d6")
tripplan("8th","Redfern","L","d6")
