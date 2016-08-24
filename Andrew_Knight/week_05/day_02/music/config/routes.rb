Rails.application.routes.draw do
  resources :artists, :albums
  # # Create step
  # get "/artists/new" => 'artists#new'
  # post "/artists" => 'artists#create'
  #
  # # Read step
  # get "/artists" => 'artists#index'
  # get "/artists/:id" => 'artists#show'
  #
  # # Update step
  # get "/artists/:id/edit" => 'artists#edit'
  # put "/artists/:id" => 'artists#update'
  # patch "/artists/:id" => 'artists#update'
  # post "/artists/:id" => 'artists#update'
  #
  # # DELETE STEP
  # delete '/artists/:id/delete' => 'artists#destroy'
end
