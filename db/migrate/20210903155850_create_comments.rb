class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :movie_db_id

      t.timestamps
    end
  end
end
