class MovieCollection < ApplicationRecord
  belongs_to :collection

  validates :movie_db_id, uniqueness: {scope: :collection}

end
