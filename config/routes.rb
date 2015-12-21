Flixter::Application.routes.draw do
  get "dashboards/show"
  devise_for :users

  root 'static_pages#index'

  resources :courses, only: [:index, :show] do
    resources :enrollments, only: :create
  end

  resources :lessons, only: [:show]

  namespace :instructor do
    resources :lessons, only: [:update]
    resources :sections, only: [:update] do
      resources :lessons, only: [:create]
    end
    resources :courses, only: [:new, :create, :show] do
      resources :sections, only: [:create]
    end
  end
  
  resource :dashboard, only: [:show]
  
end