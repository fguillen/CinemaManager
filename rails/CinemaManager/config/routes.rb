CinemaManager::Application.routes.draw do
  resources :showings

  resources :performances do
    collection do
      get "search"
    end
  end

  match '/calendar/day/:date' => 'calendars#day', :as => :calendar_day
  match '/calendar/month/:date' => 'calendars#month', :as => :calendar_month

  namespace :api do
    resources :showings, :only => [:index, :create, :update, :destroy]
    resources :performances, :only => [:index]
  end
end
