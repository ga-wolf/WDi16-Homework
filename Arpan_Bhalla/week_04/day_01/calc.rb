ans = "y"
while ans == "y" do
  puts "======= inside while =========="
  puts "get answer: "
  ans = gets.chomp
end

puts "======= outside until =========="
puts "value of ans is #{ans}"
until ans == "y" do
  puts "======= inside until =========="
  puts "get answer: "
  ans = gets.chomp
end
