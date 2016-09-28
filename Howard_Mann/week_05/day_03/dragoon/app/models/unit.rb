# == Schema Information
#
# Table name: units
#
#  id         :integer          not null, primary key
#  name       :string
#  race_id    :integer
#  weapon_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Unit < ActiveRecord::Base
  belongs_to :race
  belongs_to :weapon
end
