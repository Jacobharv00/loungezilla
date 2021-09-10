class MovieCollection < ApplicationRecord
  belongs_to :collection
  belongs_to :user

  validates :movie_db_id, uniqueness: {scope: :collection}

end
