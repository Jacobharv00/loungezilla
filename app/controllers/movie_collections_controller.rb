class MovieCollectionsController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []

  def index
    movie_collections = MovieCollection.all
    render json: movie_collections
  end





  
end
