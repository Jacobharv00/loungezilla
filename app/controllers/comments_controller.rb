class CommentsController < ApplicationController
  skip_before_action :authorize, only: :create
  wrap_parameters format: []


  def index
    comments = Comment.all
    render json: comments
  end

  # def show
  #   comment = Comment.where(movie_db_id: params[:id])
  #   render json: comment
  # end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  private

  def comment_params
    params.permit(:user_id, :movie_db_id, :comment)
  end



end


    # def show
    #     comment = Comment.where(event_id: params[:id])
    #     render json: comment, status: :ok
    # end

    # def create
    #     comment = Comment.create!(comment_params)
    #     render json: comment, status: :created
    # end