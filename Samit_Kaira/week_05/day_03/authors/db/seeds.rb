# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Author.destroy_all
a1 = Author.create({
  :name => "JK Rowling",
  :nationality => "English",
  :dob =>"1965/05/07",
  :period => "21st century",
  :image => "http://vignette4.wikia.nocookie.net/harrypotter/images/3/3e/JKRowling.jpg/revision/latest?cb=20151001174249"
  })

  Book.destroy_all
  w1 = Work.create({
    :title => "Harry Potter",
    :year => 2000,
    :medium => "Hardcopy",
    :style => "Fantasy",
    :image => "http://vignette3.wikia.nocookie.net/harrypotter/images/7/7b/Harry01english.jpg/revision/latest?cb=20150208225304",
    :author_id => a1.id
    })
