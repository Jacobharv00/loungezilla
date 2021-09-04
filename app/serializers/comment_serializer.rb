class CommentSerializer < ActiveModel::Serializer
  attributes :comment, :movie_db_id
  # has_one :user
end
