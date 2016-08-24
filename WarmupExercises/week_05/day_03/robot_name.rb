require 'pry'

class Robot

  def initialize
    @mac_address = generate_letters
    @instruction_count = 0
    generate_name
    @created_time = Time.now
  end

  def generate_name
    @instruction_count += 1
    @name = "#{generate_letters}-#{generate_numbers}"
    @boot_time = Time.now
  end

  def generate_letters
    ("A".."Z").to_a.sample(2).join
  end

  def generate_numbers
    (1..9).to_a.sample(3).join
  end

  def timers
    @instruction_count += 1
    @time_since_created = Time.now - @created_time
    @time_since_boot = Time.now - @boot_time
    puts "This robot was created #{@time_since_created} seconds ago and was last booted #{@time_since_boot} seconds ago."
  end

  def instructions_count
    puts @instruction_count
  end

  def reset
    generate_name
    @instruction_count = 0
    puts "Resetting to factory settings"
  end

end

binding.pry
puts "Badger Robotics thanks you for your services towards the imminentization of the singularity."
