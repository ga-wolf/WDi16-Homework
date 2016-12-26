# No classes method (my solution)

# puts "what is the first strand sequence?"
# strand_one = gets.chomp.split("")
# puts "what is the second strand sequence?"
# strand_two = gets.chomp.split("")
#
# hamming = 0
# strand_one.each_with_index do |v,i|
#     if v != strand_two[i]
#       hamming +=1
#     end
# end
#
# p hamming


# Class initialize method

class DNA

    def initialize(str1,str2)
        @strand_one = str1
        @strand_two = str2
    end

    def hamming_distance
        hamming = 0
        @strand_one.chars.each_with_index do |v,i|
            if v != @strand_two[i]
              hamming +=1
            end
        end
        puts "The Hamming difference betweeen #{@strand_one} and #{@strand_two} is #{hamming}"
    end

end

d = DNA.new("GATTACA", "CATTAGA")
d.hamming_distance
