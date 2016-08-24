# == Schema Information
#
# Table name: races
#
#  id          :integer          not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image       :text
#  homeworld   :text
#  description :text
#  leader      :text
#

class Race < ActiveRecord::Base
  has_many :units
  has_many :weapons, :through => :units
  has_many :characters
end
