class CreateMovieCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_collections do |t|
      t.integer :movie_db_id
      t.belongs_to :collection, null: false, foreign_key: true
      t.string :movie_db_image

      t.timestamps
    end
  end
end
