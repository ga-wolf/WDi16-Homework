# == Schema Information
#
# Table name: weapons
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Weapon < ActiveRecord::Base
  has_many :units
  has_many :characters
  has_many :races, :through => :units, :through => :characters
end
