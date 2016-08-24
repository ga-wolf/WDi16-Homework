# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Artist.destroy_all
a1 = Artist.create({
  :name => "The Doors",
  :nationality => "American",
  :image => "http://www.mojo4music.com/media/2014/11/The-Doors-App-Icon-433.jpg?9ab822"
})

Album.destroy_all
l1 = Album.create({
  :name => "The Doors",
  :released => '1967',
  :songs => '11',
  :image => "http://eil.com/images/main/The+Doors+The+Doors+395014.jpg"
})

p a1
p l1
