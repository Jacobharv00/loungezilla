class Collection < ApplicationRecord
  has_many :user_collections, dependent: :destroy
  has_many :users, through: :user_collections
  has_many :movie_collections, dependent: :destroy

  validates :title, presence: true

end
