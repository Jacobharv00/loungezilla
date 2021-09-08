class UserCollectionsController < ApplicationController
  wrap_parameters format: []

  def index
    user_collection = UserCollection.all
    render json: user_collection
  end

  def show
    render json: @current_user
  end



end
