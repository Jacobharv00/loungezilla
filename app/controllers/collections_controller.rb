class CollectionsController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []

  def index
    collections = Collection.all
    render json: collections
  end

  # find a user by the sessions user_id: .collections for that specific user

end
