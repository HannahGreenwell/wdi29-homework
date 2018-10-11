class User < ApplicationRecord
  belongs_to :country
  
  has_secure_password

  validates :email, presence: true, uniqueness: true
end
