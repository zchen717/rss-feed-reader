NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
    resources :users, only: [:create, :update, :show, :destroy]
    post "login", to: "session#create"
    delete "logout", to: "session#destroy"
  end

  root to: "static_pages#index"
end
