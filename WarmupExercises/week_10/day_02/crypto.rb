require 'pry'
class Crypto

  def initialize(str)
    @str = str
  end

  def normalize_plaintext
    # removing spaces, punctuation, non-letter characters
    @str.downcase.gsub(/[^a-z0-9]/,"")
  end

  def size
    # as close to a perfect square of the normalize_plaintext as I can get
    Math.sqrt(normalize_plaintext.length).ceil

  end

  def plaintext_segments
    # Chunking my normalized_plaintext into groups of #{size} characters

    normalize_plaintext.split("").each_slice(size).to_a
    # Could also use a regular expression:
    # normalize_plaintext.scan(/.{1,#{size}}/)
  end

  def ciphertext
    # The output - re-assigning characters to arrays of #{size} size, then outputting space seperated groups of 5 characters
    cipher_text = []
    plaintext_segments.each do |segment|
      segment.each_with_index do |char , i|
        cipher_text[i] ||= []
        cipher_text[i] << char
      end
    end
    cipher_text.map{|e| e.join}.join(" ")
  end
end

crypto = Crypto.new("Something something dark side")
p crypto.ciphertext
