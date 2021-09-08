class MovieCollectionSerializer < ActiveModel::Serializer
  attributes :id, :movie_db_id, :movie_db_image
  has_one :collection
  
end
