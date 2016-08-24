Rails.application.routes.draw do

  get '/games' => 'games#index'

  get '/games/eight' => 'games#eight_ball'
  get '/games/eight_answer' => 'games#eight_answer'

  get '/games/secret_number' => 'games#secret_number'
  get '/games/secret_number/:number' => 'games#secret_answer'

  get '/games/scissor' => 'games#scissor'
  get '/games/scissor/:object' => 'games#scissor_answer'
end
