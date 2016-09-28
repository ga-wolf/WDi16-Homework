# Given an age in seconds, calculate how old someone would be on:
#
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.

# MY SOLUTION, WORKS, BUT CAN BE DONE BETTER...WHoops! did it in Ruby, not JS

# puts "what age in seconds?"
# age = gets.chomp.to_f
#
# earthYears = (age / 31557600).round(2)
# mercuryYears = (earthYears / 0.2408467).round(2)
# venusYears = (earthYears / 0.61519726).round(2)
# marsYears = (earthYears / 1.8808158).round(2)
# jupiterYears = (earthYears / 11.862615).round(2)
# saturnYears = (earthYears / 29.447498).round(2)
# uranusYears = (earthYears / 84.016846).round(2)
# neptuneYears = (earthYears / 164.79132).round(2)
# p "On Mercury, you are " + mercuryYears.to_s + " years old"
# p "On Venus, you are " + venusYears.to_s + " years old"
# p "On Earth, you are " + earthYears.to_s + " years old"
# p "On Mars, you are " + marsYears.to_s + " years old"
# p "On jupiter, you are " + jupiterYears.to_s + " years old"
# p "On saturn, you are " + saturnYears.to_s + " years old"
# p "On uranus, you are " + uranusYears.to_s + " years old"
# p "On Neptune, you are " + neptuneYears.to_s + " years old"
