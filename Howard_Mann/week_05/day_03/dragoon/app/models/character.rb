# == Schema Information
#
# Table name: characters
#
#  id         :integer          not null, primary key
#  name       :string
#  image      :text
#  background :text
#  race_id    :integer
#  weapon_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Character < ActiveRecord::Base
  belongs_to :race
  belongs_to :weapon
end
