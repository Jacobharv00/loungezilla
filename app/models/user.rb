class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :user_collections, dependent: :destroy
  has_many :collections, through: :user_collections



end