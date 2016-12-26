# crypto = Crypto.new("Have a nice day. Feed the dog & chill out!")
# crypto.normalize_plaintext
# # => "haveanicedayfeedthedogchillout"
# crypto.size
# # => 36
# crypto.plaintext_segments
# # => ["havean", "iceday", "feedth", "edogch", "illout"]
# crypto.ciphertext
# # => "hifei acedl v..."

# puts "Type in your sentance please"
# input = gets.chomp
# # cipher = crypto.new(input)
#
# # Class crypto
# #
# #   def initialize(input)
# #     @input = input.downcase.gsub(/[!'"&%$#?@0-9\s]/i, '').to_a
# #   end
# #   p @input
# # end
#
# array = input.downcase.gsub(/[!'"&%$#?@0-9\s]/i, '').split('').to_a
# num = array.length
# row = Math.sqrt(num).ceil
# col = array.each_slice(row).to_a
# p col.transpose

class Crypto

  def initialize(str)
    @str = str
  end

  def normalize_plaintext
    @str.downcase.gsub(/[^a-z0-9]/,"")
  end

  def size
    Math.sqrt(normalize_plaintext.length).ceil
  end

  def plaintext_segments
    normalize_plaintext.split("").each_slice(size).to_a
  end

  def ciphertext
    cipher_text = []
    plaintext_segments.each do |segment|
      segment.each_with_index do |char, i|
        cipher_text[i] ||=[]
        cipher_text[i] << char
      end
    end
    cipher_text.map{|e|
      e.join}.flatten.each_slice(5)
  end

end

crypto = Crypto.new(str)
