# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

###################### USER
User.destroy_all
u1 = User.create :name => "Howie", :email => "howie@ga.co", :password => "chicken", :password_confirmation => "chicken", :admin => true
u2 = User.create :name => "Badger", :email => "badger@ga.co", :password => "chicken", :password_confirmation => "chicken"
u3 = User.create :name => "Wolf", :email => "wolf@ga.co", :password => "chicken", :password_confirmation => "chicken"

puts "\nUser seed".ljust(50,'.')
p "User count is #{User.all.count}"
p "User names include #{User.all.pluck(:name)}"

###################### PROJECT
Project.destroy_all
p1 = Project.create :name => "Project 1"
p2 = Project.create :name => "Project 2"
p3 = Project.create :name => "Project 3"
p4 = Project.create :name => "Project 4"
p5 = Project.create :name => "Project 5"

puts "\nProject seed".ljust(50,'.')
p "Project count is #{Project.all.count}"
p "Project names include #{Project.all.pluck(:name)}"

###################### HAS_MANY BELONGS_TO
u1.projects << p1 << p2
u2.projects << p3 << p4
u3.projects << p5

puts "\nUser has_many Projects".ljust(50,'.')
p "User 1 proejcts include #{u1.projects.all.pluck(:name)}"
p "User 2 proejcts include #{u2.projects.all.pluck(:name)}"
p "User 3 proejcts include #{u3.projects.all.pluck(:name)}"
