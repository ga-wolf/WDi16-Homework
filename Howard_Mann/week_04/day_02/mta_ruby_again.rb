# MTA RUBY homework exercise using hashes and arrays

@subway = {
  :n => {
    :name => "N",
    :stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  },
  :l => {
    :name => "L",
    :stops => ['8th', '6th', 'Union Square', '3rd', '1st']
  },
  6 => {
    :name => "6",
    :stops => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
}

def planTrip (startLine, startStop, endLine, endStop)
  # Cache start and finish lines and stop and union square index positions
  start_name = @subway[startLine][:name]
  finish_name = @subway[endLine][:name]
  start_line = @subway[startLine][:stops]
  finish_line = @subway[endLine][:stops]
  start_index = start_line.index(startStop)
  finish_index = finish_line.index(endStop)
  start_union = start_line.index("Union Square")
  finish_union = finish_line.index("Union Square")
  stops_a = []
  stops_b = []

  if startLine == endLine       # No switching lines
    case start_index <=> finish_index # Because spaceships are awesome
      when -1 then stops_a = start_line[(start_index+1)..finish_index]
      when 1 then stops_a = start_line[finish_index..(start_index-1)].reverse
    end

    puts "\nTo go from #{startStop} to #{endStop} station on line #{start_name} you must travel through the following stops: #{stops_a.join(', ')}. For a total of #{stops_a.length} stops"

  elsif startLine != endLine    # Switching lines at Union Square
    case start_index <=> start_union  # Piew piew!
      when -1 then stops_a = start_line[(start_index+1)..start_union]
      when 1 then stops_a = start_line[start_union..(start_index-1)].reverse
    end

    case finish_index <=> finish_union
      when -1 then stops_b = finish_line[(finish_index)..(finish_union-1)].reverse
      when 1 then stops_b = finish_line[(finish_union+1)..finish_index]
    end

    puts "\nTo go from '#{startStop} station on line #{start_name}' to '#{endStop} station on line #{finish_name}': \n1) Travel on line #{start_name} through: #{stops_a.join(', ')}\n2) Change at Union Square for line #{finish_name}; then, \n3) Continue on through: #{stops_b.join(', ')} \nTotal trip stops: #{stops_a.length + stops_b.length}"
  end
end

planTrip(:n,"Times Square",:n,"8th")
planTrip(:n,"8th",:n,"Times Square")
planTrip(:n,"Times Square",:l,"1st")
planTrip(:n,"Times Square",:l,"8th")
planTrip(6,"33rd",:l,"8th")
