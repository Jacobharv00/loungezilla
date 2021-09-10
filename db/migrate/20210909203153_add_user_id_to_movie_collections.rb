class AddUserIdToMovieCollections < ActiveRecord::Migration[6.1]
  def change
    add_reference :movie_collections, :user, null: false, foreign_key: true
  end
end
