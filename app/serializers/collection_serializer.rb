class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :movie_collections
  # has_many :users
end

# create custom method
# access current session id??