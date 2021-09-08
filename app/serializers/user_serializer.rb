class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :user_photo
  has_many :comments
  has_many :user_collections
end
