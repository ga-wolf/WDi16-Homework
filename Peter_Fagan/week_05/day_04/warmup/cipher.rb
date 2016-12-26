
def input
  puts "Enter plain text"
  @plain_text = gets.chomp
end

def letter_index
  @letters = ('a'..'z').to_a
end

def cipher_index
  @cipher = letter_index.reverse
end

def encrypt
  result = []
  @plain_text.each do |i|

  end
  puts result.join
end

encrypt()

# class Atbash
#
#   def initialize(word)
#     @word = word.downcase
#     @alphabet = ("a".."z").to_a
#     @reverse = @alphabet.reverse
#   end
#
#   def encode
#     result = []
#     # @word.split("")
#     # @word.chars.each
#     @word.each_char do |c|
#       index = @alphabet.index(c)
#       cipher_character = @reverse[index]
#       result << cipher_character
#     end
#     result.join
#   end
#
# end
#
#
# puts "Whats the word to encrypt?"
#
# word = gets.chomp
# cipher = Atbash.new(word)
# puts cipher.encode
