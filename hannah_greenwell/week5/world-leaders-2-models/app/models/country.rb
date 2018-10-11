class Country < ApplicationRecord
  has_many :world_leaders
  has_many :users
end
