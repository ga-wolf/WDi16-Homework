# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
#
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
#
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.


# my solution...doesn't work
def values
{
  :A => 1, :B => 3, :C => 3, :D => 2,
  :E => 1, :F => 4, :G => 2, :H => 4,
  :I => 1, :J => 8, :K => 5, :L => 1,
  :M => 3, :N => 1, :O => 1, :P => 3,
  :Q => 10, :R => 1, :S => 1, :T => 1,
  :U => 1, :V => 4, :W => 4, :X => 8,
  :Y => 4, :Z => 10
}
end
require 'pry'
def score (word)
  sum = 0
  word.upcase.chars.each do |letter|
    # sum += values[letter.to_sym]
    values.each do |k,v|
      if k == letter.to_sym
        sum += v
      end
    end
  end
  puts sum
end

puts "What word was played? "
input = gets.chomp
score (input)


# Badgers solution
# def values
#   {
#   1 => %w{A E I O U L N R S T},
#   2 => %w{D G},
#   3 => %w{B C M P},
#   4 => %w{F H V W Y},
#   5 => %w{K},
#   8 => %w{J X},
#   10 => %w{Q Z}
# }
# end
#
# def score(word)
#   sum = 0
#   word.upcase.chars.each do |letter|
#     values.each do |k,v|
#       if v.include?(letter)
#         sum += k
#       end
#     end
#   end
#   puts sum
# end
#
# puts "What word was played?"
# input = gets.chomp
#
# score(input)
