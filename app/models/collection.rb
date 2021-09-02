class Collection < ApplicationRecord
  has_many :user_collections, dependent: :destroy
  has_many :users, through: :user_collections

  validates :title, presence: true

end
