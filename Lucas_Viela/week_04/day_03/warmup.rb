# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.

print "Let's play scrabble give me a word: "
word = gets().chomp.capitalize

values = {
    :arr1 => "A" "E" "I" "O" "U" "L" "N" "R" "S" "T",
    :arr2 => "D" "G",
    :arr3 => "B" "C" "M" "P",
    :arr4 => "F" "H" "V" "W" "Y",
    :arr5 => "K",
    :arr6 => "J" "X",
    :arr7 => "Q" "Z",
}


# loop for each statement, if the world have the letters of arr1 adds the points to the result

array = world.split.map.join('')
array.each do |i|
    puts i
end
