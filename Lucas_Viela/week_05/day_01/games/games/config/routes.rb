Rails.application.routes.draw do
  get '/game' => 'game#index'

  get '/game/magic8' => 'magic8#index'
  # get '/game/magic8/:number' => 'magic8#index'



end
