class MovieCollectionsController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []

  def index
    movie_collections = MovieCollection.all
    render json: movie_collections
  end

  def create
    movie_collection = MovieCollection.create!(movie_collection_params)
    render json: movie_collection, status: :created
  end

  def destroy
    # byebug
    movie = MovieCollection.find_by(movie_db_id: params[:id])
    movie.destroy
    head :no_content
  end

  private

  def movie_collection_params
    params.permit(:movie_db_id, :collection_id, :movie_db_image, :user_id)
  end

  
end

