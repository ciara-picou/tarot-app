Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :cards
resources :meanings
resources :keywords
resources :readings
resources :card_readings
end
