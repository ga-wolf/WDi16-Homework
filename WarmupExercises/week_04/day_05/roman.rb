def to_roman(number)
    result = ""

    roman_mappings.each do |k,v|
        while number >= k
            p "number is #{number}"
            result += v
            p "result is #{result}"
            number -= k
        end
    end
    puts result
end

def roman_mappings
    {
        1000 => 'M',
        900 => 'CM',
        500 => 'D',
        400 => 'CD',
        100 => 'C',
        90 => 'XC',
        50 => 'L',
        40 => 'XL',
        10 => 'X',
        9 => 'IX',
        5 => 'V',
        4 => 'IV',
        1 => 'I',
    }
end


puts "What number do you want to romanize"
arabic = gets.to_i
to_roman(arabic)
