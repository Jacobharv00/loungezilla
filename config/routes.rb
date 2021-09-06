Rails.application.routes.draw do
  resources :movie_collections
  resources :comments
  resources :user_collections
  resources :collections
  resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
