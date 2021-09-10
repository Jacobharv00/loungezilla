class MovieCollectionSerializer < ActiveModel::Serializer
  attributes :id, :movie_db_id, :movie_db_image, :user_id
  has_one :collection
  has_one :user
end
