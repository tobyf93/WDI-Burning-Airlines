# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  password_digest :string
#  admin           :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string
#

class User < ActiveRecord::Base
  has_many :reservations
  has_many :flights, through: :reservations

  has_secure_password
  
  ##error handling for things like "no blank names"
  validates :name, :presence => true
  validates :name, :uniqueness => true #case-sensative
end
