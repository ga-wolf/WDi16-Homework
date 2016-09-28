require 'rainbow'
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.

# plan_trip {
# "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
# "lineL" => ["8th", "6th", "Union Square", "3rd", "1st"]
# "line6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }
# end

print Rainbow("What station are you leaving from ? ").bg(:red)
start = gets().chomp

print "What station are you going to ? "
finish = gets().chomp
