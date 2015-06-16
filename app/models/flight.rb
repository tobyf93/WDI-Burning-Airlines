# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  origin      :string
#  destination :string
#  date        :datetime
#  plane_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
  has_many :reservations
  belongs_to :plane
end
