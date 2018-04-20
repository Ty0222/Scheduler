Rails.application.routes.draw do
  root "plans#index"
  resources :plans
end
