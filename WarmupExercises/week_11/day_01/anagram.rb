class Anagram
  def initialize(word)
    @word = word
  end

  def match(array)
    # The enumerable.select method takes an enumerable (such as an array) and returns an array of all the element for which the block returns true.
    array.select {|word| sort_word_chars(word) == sort_word_chars(@word)}
  end

  def sort_word_chars(str)
    str.chars.sort
  end
end
