class CollectionsController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []

  def index
    collections = Collection.all
    render json: collections
  end






end
