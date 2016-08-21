def plan_trip(start_line, start_stop, des_line, des_stop)
  train_lines = {
    :n => ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd", "1st"],
    :six => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
  if start_line == des_line
    start_index = train_lines[start_line].index(start_stop)
    des_index = train_lines[start_line].index(des_stop)
    num_of_stops = (des_index - start_index).abs - 1
    if start_index < des_index
      stops = train_lines[start_line][(start_index + 1)..(des_index - 1)]
    end
    if start_index > des_index
      stops = train_lines[start_line][(des_index + 1)..(start_index - 1)].reverse
    end
    if start_index == des_index
      p "You're about as sharp as a marble."
    end
    p "Your trip has #{num_of_stops} stops: #{stops.join(", ")}."
  end


  if start_line != des_line
    # start line
    start_index = train_lines[start_line].index(start_stop)
    start_us_index = train_lines[start_line].index("Union Square")
    num_of_stops_one = (start_us_index - start_index).abs - 1

    if start_index < start_us_index
      stops_one = train_lines[start_line][(start_index + 1)..(start_us_index - 1)]
    elsif start_index > start_us_index
      stops_one = train_lines[start_line][(start_us_index + 1)..(start_index - 1)].reverse
    end
    # destination line
    des_index = train_lines[des_line].index(des_stop)
    des_us_index = train_lines[des_line].index("Union Square")
    num_of_stops_two = (des_index - des_us_index).abs - 1
    if des_index > des_us_index
      stops_two = train_lines[des_line][(des_us_index + 1)..(des_index - 1)]
    elsif des_index < des_us_index
      stops_two = train_lines[des_line][(des_index + 1)..(des_us_index - 1)].reverse
    end
    p "Travel to Union Square through #{num_of_stops_one} stations: #{stops_one.join(", ")}, switch to #{des_line} line and travel through #{num_of_stops_two} stations: #{stops_two.join(", ")}. Get off at #{des_stop}."
  end

end
plan_trip(:n,"Time Square",:six,"Grand Central");
