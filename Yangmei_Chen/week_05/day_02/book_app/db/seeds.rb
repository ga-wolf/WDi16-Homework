# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Author.create({
  :name => "Khaled Hosseini",
  :nationality => "Afghanistan American",
  :dob => "1965/03/04",
  :image => "https://si.wsj.net/public/resources/images/AR-AC488_KHALED_DV_20130515125406.jpg"
  })

Book.destroy_all
Book.create({
  :title => "The Kite Runner",
  :page_count => "372",
  :publish_date => "2003/05/29",
  :image => "http://www.fab-bookclub-recommendations.com/images/kiterunner.jpg"
  })
