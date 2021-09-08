class UserCollectionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :collection_id
  has_one :user
  has_one :collection
end
