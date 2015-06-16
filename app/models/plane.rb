# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  rows       :integer
#  columns    :integer
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Plane < ActiveRecord::Base
  has_many :flights
  has_many :reservations, through: :flights
end
