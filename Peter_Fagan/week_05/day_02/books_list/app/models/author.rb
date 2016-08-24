# == Schema Information
#
# Table name: authors
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  genre       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Author < ActiveRecord::Base
  has_many :books
end
