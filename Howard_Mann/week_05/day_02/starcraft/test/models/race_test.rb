# == Schema Information
#
# Table name: races
#
#  id          :integer          not null, primary key
#  name        :string
#  image       :string
#  homeworld   :string
#  description :string
#  leader      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class RaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
