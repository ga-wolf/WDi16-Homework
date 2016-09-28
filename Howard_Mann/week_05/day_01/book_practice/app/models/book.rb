# == Schema Information
#
# Table name: books
#
#  id          :integer          primary key
#  title       :text
#  author      :text
#  cover       :text
#  price       :float
#  description :text
#

class Book < ActiveRecord::Base
  validates :title, presence: true
end
