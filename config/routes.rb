Rails.application.routes.draw do
  resources :movie_collections, only: [:index, :create]
  resources :comments
  resources :user_collections
  resources :collections
  resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  delete "movie_collections/:id", to: "movie_collections#destroy"

end
