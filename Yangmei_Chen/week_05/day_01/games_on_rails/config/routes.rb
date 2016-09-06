Rails.application.routes.draw do
  get '/games' => 'games#home'
  get '/games/magic_eight_ball' => 'games#magic_eight_ball'
  get '/games/answer' => 'games#answer'

  get '/games/secret_number' => 'games#secret_number'
  get '/games/secret_result' => 'games#secret_result'

  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors_play' => 'games#rock_paper_scissors_play'
end
