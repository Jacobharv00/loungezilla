class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :movie_db_id
  # has_one :user
end
