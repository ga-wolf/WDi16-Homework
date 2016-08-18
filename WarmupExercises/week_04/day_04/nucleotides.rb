def count_nucleotides(string)
  
  counts = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0
  }

  message = []

  string.upcase.chars.each do |letter|
    is_nucleotide = false
    counts.each do |k,v|
      if letter == k
        counts[k] += 1
        is_nucleotide = true
      end
    end
    unless is_nucleotide
      message.push("#{letter} is not a valid nucleotide")
    end
  end

  counts.each do |k,v|
    if counts[k] != 1
      message.push("There are #{v} #{k}s in that string")
    else
      message.push("There are #{v} #{k}s in that string")
    end
  end
  message
end




puts "Give me a string of nucleotides to count"
nucleotides = gets.chomp
puts count_nucleotides(nucleotides)
